import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

import formatDate from '../utils/formatDate.mjs'

class OneStory extends LitElement
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
      return html`Loading…`
    }

    return html`
      <style>
        .censored
        {
          filter: blur(0.5ex);
        }
      </style>
      <section>
        ${this.story.map((part, idx) => html`
          <blockquote>
            <cite>
              ${part.player}
              at
              ${formatDate(new Date(part.createdAt))}
            </cite>
            <p>
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
