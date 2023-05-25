import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'

import AppElement from '../utils/AppElement.mjs'

function getInitials(name) {
  const parts = []
  const nameArray = name.split(" ")
  parts.push(nameArray[0].charAt(0))
  if (nameArray.length > 1)
  {
    parts.push(nameArray[nameArray.length - 1].charAt(0))
  }
  return parts.join('').toUpperCase()
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
        .avatar {
          --size: 2.5em;

          display: inline-block;
          background-color: var(--cemph);
          color: white;
          border: white solid thin;
          border-radius: 50%;
          text-align: center;
          font-size: var(--rem);
          min-height: var(--size);
          min-width: var(--size);
          line-height: var(--size);
        }
      </style>
      <span class="avatar" title=${this.name}>
        ${getInitials(this.name)}
      </span>
    `
  }
}

customElements.define('writer-avatar', WriterAvatar)

