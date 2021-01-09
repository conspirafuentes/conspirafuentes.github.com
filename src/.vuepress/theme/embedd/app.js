/* global require, location,Text */

import './scss/app.scss'
import async from 'async'
import mustache from 'mustache'
import hnConstructor from './hn'
import redditConstructor from './reddit'

const mainTemplate = require('./templates/main.html')
const commentTemplate = require('./templates/comment.html')

function contextConstructor () {
  let context = {}

  const script = document.currentScript
  const parent = script.parentNode
  const container = document.createElement('div')

  context.config = {
    element: container,
    url: location.protocol + '//' + location.host + location.pathname,
    dark: false,
    service: 'reddit',
    both: true,
    loadMore: true,
    infiniteScroll: false,
    limit: 5,
    debug: false
  }

  const userConfig = script.innerHTML.length > 0
    ? JSON.parse(script.innerHTML.trim())
    : {}

  context.config = extend(context.config, userConfig)

  if (typeof context.config.element === 'string') {
    context.config.element = document.querySelector(context.config.element)
  }

  context.config.element.className = 'embedd-container'

  if (context.config.element === container) {
    parent.insertBefore(container, script)
  }

  if (context.config.loadMore && context.config.infiniteScroll) {
    context.config.loadMore = false
  }

  context.clients = {}

  if (context.config.both) {
    context.clients.reddit = redditConstructor(context.config)
    context.clients.hn = hnConstructor(context.config)
  }

  if (!context.config.both && context.config.service === 'reddit') {
    context.clients.reddit = redditConstructor(context.config)
  }

  if (!context.config.both && context.config.service === 'hn') {
    context.clients.hn = hnConstructor(context.config)
  }

  function extend (o1, o2) {
    const result = {}

    for (let key in o1) {
      result[key] = o1[key]
    }
    for (let key in o2) {
      result[key] = o2[key]
    }

    return result
  }

  function initListeners () {
    const hideButtons = [].slice.call(document.querySelectorAll('.embedd-container .hideChildrenBtn'))
    const redditBtn = document.querySelector('.embedd-container .reddit-btn')
    const hnBtn = document.querySelector('.embedd-container .hn-btn')
    const viewMoreBtns = [].slice.call(document.querySelectorAll('.embedd-container .viewMore'))
    const moreBtn = document.querySelector('.embedd-container .more-btn')

    hideButtons.forEach(x => {
      x.addEventListener('click', hideChildren, false)
    })

    viewMoreBtns.forEach(x => {
      x.addEventListener('click', showMoreComments, false)
    })

    if (redditBtn) {
      redditBtn.addEventListener('click', () => {
        context.config.service = 'reddit'
        context.init()
      }, false)
    }

    if (hnBtn) {
      hnBtn.addEventListener('click', () => {
        context.config.service = 'hn'
        context.init()
      }, false)
    }

    if (moreBtn) {
      moreBtn.addEventListener('click', () => {
        renderMore(context)
      }, false)
    }

    if (!context.config.loadMore && context.config.infiniteScroll) {
      window.addEventListener('scroll', loadOnScroll, false)
    }
  }

  function loadOnScroll () {
    const maxScroll = document.body.scrollHeight - window.innerHeight
    if (maxScroll - window.scrollY < 20) {
      window.removeEventListener('scroll', loadOnScroll, false)
      renderMore(context)
    }
  }

  function renderHtml (obj) {
    const data = extend({}, obj)
    data.config = extend({}, obj.config)

    data.redditActive = () => {
      return context.config.service === 'reddit'
    }

    data.hnActive = () => {
      return context.config.service === 'hn'
    }

    if (data.data.next.length === 0) {
      data.config.loadMore = false
    }

    const html = mustache.render(mainTemplate, data, { comment: commentTemplate })

    if (context.config.debug) {
      console.log(data)
    }

    context.config.element.innerHTML = html
    initListeners()
  }

  function renderMore ({ data, config, redditActive }) {
    const template = '{{#comments}}{{> comment}}{{/comments}}'
    const element = document.querySelector('.embedd-container .comments')

    data.comments = data.next.slice(0, config.limit)
    data.next = data.next.slice(config.limit)
    data.config = config
    data.hasMore = !!data.next.length

    if (redditActive) {
      data.redditActive = redditActive
    }

    const html = mustache.render(template, data, { comment: commentTemplate })
    element.insertAdjacentHTML('beforeend', html)

    if (!data.hasMore) {
      const moreBtn = document.querySelector('.embedd-container .more-btn')

      if (moreBtn) {
        moreBtn.style.display = 'none'
      } else {
        window.removeEventListener('scroll', loadOnScroll, false)
      }
    }

    initListeners()
  }

  function hideChildren (e) {
    const el = e.target
    const parentComment = el.parentNode.parentNode.parentNode

    parentComment.classList.toggle('closed')
  }

  function showMoreComments (e) {
    const el = e.currentTarget
    const parent = el.parentElement
    const comments = parent.querySelector('.children')

    function showComment (c, count) {
      if (c && count !== 3) {
        if (c instanceof Text || getDisplayVal(c) === 'block') {
          showComment(c.nextSibling, count)
        } else {
          c.style.display = 'block'
          showComment(c.nextSibling, count + 1)
        }
      } else {
        parent.querySelector('.viewMore').style.display = 'none'
      }
    }

    showComment(comments.firstChild, 0)
  }

  function getDisplayVal (el) {
    if (el.currentStyle) {
      return el.currentStyle.display
    }

    return window.getComputedStyle(el, null).getPropertyValue('display')
  }

  context.init = () => {
    const { reddit, hn } = context.clients
    const service = context.clients[context.config.service]
    const data = {}

    if (hn) {
      data.hasHn = hn.hasComments
    }

    if (reddit) {
      data.hasReddit = reddit.hasComments
    }

    data.data = service.getComments

    async.series(data, (err, result) => {
      if (err) { throw new Error(err) }

      result.submitUrl = service.submitUrl
      context = extend(context, result)
      renderHtml(context)
    })
  }

  return context
}

const context = contextConstructor()
context.init()
