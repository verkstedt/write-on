import { html, styleMap } from 'lit'

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

function getColor (name) {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';
  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

class WriterAvatar extends AppElement
{
  static properties = {
    name: { type: String },
  }

  render ()
  {
    return html`
      <style>
        .avatar {
          --size: 2.5em;

          display: inline-block;
          color: var(--cbg);
          border: white solid thin;
          border-radius: 50%;
          text-align: center;
          font-size: var(--rem);
          min-height: var(--size);
          min-width: var(--size);
          line-height: var(--size);
          text-shadow: 1px 1px var(--cdark);
          font-weight: 375;
        }
      </style>
      <span
        class="avatar"
        title=${this.name}
        style=${styleMap({ backgroundColor: getColor(this.name) })}
      >
        ${getInitials(this.name)}
      </span>
    `
  }
}

customElements.define('writer-avatar', WriterAvatar)

