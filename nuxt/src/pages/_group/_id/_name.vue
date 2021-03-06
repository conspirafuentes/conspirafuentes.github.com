<template>
  <article id="page-explanation" itemscope itemtype="http://schema.org/Article">
    <meta itemprop="image" :content="image" />
    <!-- <v-img v-if="image" :src="image" style="max-height: 300px" /> -->

    <h1 style="font-size: 26px" itemprop="headline">{{ title }}</h1>

    <div class="ui-post-meta ui-post-tag" itemprop="keywords">
      <v-icon small>mdi-tag-outline</v-icon>
      <router-link
        v-for="tag in tags"
        :key="tag"
        style="margin: 0 7px"
        :to="'/tags/' + tag"
      >
        {{ tag }}
      </router-link>
    </div>

    <div itemprop="articleBody" style="text-align: justify" v-html="markdown" />

    <div style="overflow: hidden">
      <Share style="float: right" />
    </div>

    <div v-if="'tag' != group">
      <v-divider />

      <div
        class="primary--text"
        style="margin: 5px; text-decoration: underline"
        @click="openReddit"
      >
        Responder en Reddit
      </div>

      <div v-for="(comment, i) in redditComments" :key="i" class="comment">
        <Comment :comment="comment.data" />
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { MetaInfo } from "vue-meta";
import axios from "axios";
import MarkdownIt from "markdown-it";
import Vue from "@/libraries/vue";

import Share from "@/components/Share.vue";
import Comment from "@/components/Comment.vue";

import postsStore from "@/store/posts";

export default Vue.extend({
  name: "Index",
  components: {
    Share,
    Comment,
  },
  async asyncData({ params }) {
    if (!params.id) return;

    try {
      const articleReq = `https://api.reddit.com/comments/${params.id}`;
      console.log("articleReq", articleReq);

      const articleResponse = await axios.get(articleReq);
      const reddit = articleResponse && articleResponse.data;

      return { reddit };
    } catch (e) {
      console.log("e", e);
      return { e };
    }
  },
  data() {
    const data = {
      reddit: null as any | null,
      asyncReddit: null as any | null,
      comments: [],
    };
    return data as typeof data & {};
  },
  computed: {
    group(): string {
      return this.$route.params.group;
    },
    posts(): any[] {
      const group = this.group;
      return postsStore.posts[group];
    },
    id(): string {
      return this.$route.params.id;
    },
    post(): any | undefined {
      const posts = this.posts;
      const id = this.id;
      return posts && posts.find((e) => e.id == id);
    },
    redditPost(): any {
      const reddit = this.asyncReddit || this.reddit;
      const post = reddit && reddit[0];
      if (!post || !post.data.children[0]) return;
      return post.data.children[0].data;
    },
    redditComments(): any {
      const reddit = this.asyncReddit || this.reddit;
      const post = reddit && reddit[1];
      if (!post) return;
      return post.data.children;
    },
    image(): string {
      const post = this.post;
      return (post && post.image) || "";
    },
    tags(): string[] {
      const post = this.post;
      return (post && post.tags) || [];
    },
    title(): string {
      const post = this.post;
      const redditPost = this.redditPost;

      if (redditPost && redditPost.title) return redditPost.title;
      return (post && post.name) || "";
    },
    markdown(): string {
      const redditPost = this.redditPost;
      if (!redditPost) return "";

      let selftext = redditPost.selftext;
      if (!selftext) return "";

      selftext = selftext.replace(/&amp;#x200B;/g, "");

      selftext = selftext.replace(
        /\[([^\]]+[^\n]+\.jpg|\.jpeg|\.png|\.svg[^\n]*)/g,
        "![$1"
      );

      const replacePattern = /(^| )([a-zA-Z0-9\:\/\.\-\_]+(\.jpg|\.jpeg|\.png|\.svg).*)( |$)/gim;
      selftext = selftext.replace(replacePattern, "$1![]($2)$4");

      // console.log("selftext", selftext);

      const md = new MarkdownIt();
      const html = md.render(selftext);

      // console.log("html", html);
      return html;
    },
    link(): string {
      const group = this.group;
      const post = this.post;
      if (!post || !group) return "";
      return postsStore.postLink(post, group);
    },
  },
  async mounted() {
    const id = this.id;
    const articleReq = `https://api.reddit.com/comments/${id}`;
    const articleResponse = await axios.get(articleReq);
    const asyncReddit = articleResponse && articleResponse.data;
    if (asyncReddit) this.asyncReddit = asyncReddit;
  },
  methods: {
    decode,
    parseDate,
    openReddit() {
      const id = this.id;
      if (!id) return "";
      window.open("https://reddit.com/" + id);
    },
  },
  head(): MetaInfo {
    const title = this.title;
    const tags = this.tags;
    const image = this.image;
    const link = this.link;

    return {
      title,
      link: [
        {
          rel: "canonical",
          href: "https://farsantes.github.io/" + link,
        },
      ],
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: tags.join(","),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: title,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: image,
        },
      ],
    };
  },
});

export function decode(html: string): string {
  if (!html) return "";
  if ("undefined" == typeof document) return "";
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

export function parseDate(unix: number): string {
  const now = new Date().getTime() / 1000;

  if (!unix || unix > now) return "";

  const seconds = now - unix;
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days === 1) return "1 day ago";
  if (days > 0) return days + " days ago";
  if (hours === 1) return "1 hour ago";
  if (hours > 0) return hours + " hours ago";
  if (minutes === 1) return "1 minute ago";
  if (minutes > 0) return minutes + " minutes ago";

  return "a few seconds ago";
}
</script>

<style>
#page-explanation .comment p {
  margin-bottom: 0 !important;
}
</style>