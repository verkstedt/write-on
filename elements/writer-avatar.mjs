import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'

import AppElement from '../utils/AppElement.mjs'

function getInitials(name) {
  const nameArray = name.split(" ")
  const firstNameIn = nameArray[0].charAt(0).toUpperCase()
  const lastNameIn = nameArray[nameArray.length - 1].charAt(0).toUpperCase()
  return [ firstNameIn, lastNameIn ].join('')
}

class WriterAvatar extends AppElement
{
  static properties = {
    name: { type: String },
  }

  render ()
  {
    return html`
      ${super.stylesTemplate()}
      <style>
        cite {
          display: inline-block;
          vertical-align: middle;
          background-color: var(--cemph);
          border-radius: 50%;
          border: white solid thin;
        }
        .inner {
          color: white;
          display: table-cell;
          vertical-align: middle;
          text-align: center;
          text-decoration: none;
          height: 50px;
          width: 50px;
          font-size: var(--rem);
        }
      </style>
      <cite>
        <span class="inner">${getInitials(this.name)}</span>
      </cite>
    `
  }
}

customElements.define('writer-avatar', WriterAvatar)

