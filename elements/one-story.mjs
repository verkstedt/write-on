import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'

import AppElement from '../utils/AppElement.mjs'
import formatDate from '../utils/formatDate.mjs'

function getInitials(name) {
  const nameArray = name.split(" ")
  const firstNameIn = nameArray[0].charAt(0).toUpperCase()
  const lastNameIn = nameArray[nameArray.length - 1].charAt(0).toUpperCase()
  return [ firstNameIn, lastNameIn ].join('')
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

    this.story = null
    this.finished = false
  }

  render ()
  {
    if (!this.story)
    {
      return html`
        ${super.stylesTemplate()}
        Loading…
      `
    }

    return html`
      ${super.stylesTemplate()}
      <style>
        .censored
        {
          filter: blur(0.5ex);
        }
        cite {
          display: inline-block;
          background-color: var(--cemph);
          margin-right: 25px;
          border-radius: 50%;
          float:left
        }
        
        cite .inner {
          color: white;
          display: table-cell;
          vertical-align: middle; 
          text-align: center;
          text-decoration: none;
          height: 50px;
          width: 50px;  
          font-size: var(--rem);
        }
        blockquote {
          border-left: none;
        }
      </style>
      <section>
        ${this.story.map((part, idx) => html`
          <blockquote>
            <cite>
              <span class="inner">${getInitials(part.player)}</span>
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
