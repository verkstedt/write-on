import { html } from 'lit'

import AppElement from '../utils/AppElement.mjs'

import './writer-avatar.mjs'

function scramble (text)
{
  const words = text.split(/(?=[^\w]+)/).map(part => {
    const [, nonWord, word] = part.match(/^(.*?)(\w*)$/)
    const letters = word
      .split('')
      .map(letter => ({ letter, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ letter }) => letter)
    return nonWord + letters.join('')
  })
  return words.join('')
}

class OneStory extends AppElement
{
  static properties = {
    story: {},
    finished: { type: Boolean },
  }

  constructor ()
  {
    super()

    this.story = []
    this.finished = false
  }

  render ()
  {
    const partsHtml = this.story.map((part, idx) => html`
      <blockquote>
        <cite>
          <writer-avatar name=${part.player}></writer-avatar>
        </cite>
        <p class="contribution">
          <span class=${this.finished ? '' : 'censored'}>
            ${this.finished ? part.sentenceHidden : scramble(part.sentenceHidden)}
          </span>
          <span class=${this.finished || idx === this.story.length - 1 ? '' : 'censored'}>
            ${part.sentenceOpen}
          </span>
        </p>
      </blockquote>
    `)

    return html`
      <style>
        .censored
        {
          filter: blur(0.5ex);
        }
        blockquote {
          border-left: none;
        }
        cite {
          margin-right: 25px;
          float: left;
        }
        .contribution {
          background-color: var(--cmed);
          margin-left: 3em;
          margin-top: 0;
          padding: 1em 2em;
          border-radius: 5px;
        }
      </style>
      <section>
        <slot name="header"></slot>
        ${partsHtml}
        <slot name="footer"></slot>
      </section>
    `
  }
}

customElements.define('one-story', OneStory)
