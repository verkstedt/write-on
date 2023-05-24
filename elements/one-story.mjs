import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'

import AppElement from '../utils/AppElement.mjs'

import './writer-avatar.mjs'

class OneStory extends AppElement
{
  static properties = {
    story: {},
    finished: { type: Boolean },
  }

  constructor ()
  {
    super()

    this.story = null
    this.finished = false
  }

  render ()
  {
    if (!this.story)
    {
      return null
    }

    return html`
      ${super.stylesTemplate()}
      <style>
        .censored
        {
          filter: blur(0.5ex);
        }
        blockquote {
          border-left: none;
        }
        writer-avatar {
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
        ${this.story.map((part, idx) => html`
          <blockquote>
            <writer-avatar name=${part.player}></writer-avatar>
            <p class="contribution">
              <span class=${this.finished ? '' : 'censored'}>
                ${part.sentenceHidden}
              </span>
              <span class=${this.finished || idx === this.story.length - 1 ? '' : 'censored'}>
                ${part.sentenceOpen}
              </span>
            </p>
          </blockquote>
        `)}
      </section>
    `
  }
}

customElements.define('one-story', OneStory)
