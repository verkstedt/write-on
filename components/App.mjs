import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'

import AppElement from '../utils/AppElement.mjs'

class App extends AppElement {
  static get properties() {
    return {
      _name: { type: String, state: true },
    };
  }

  constructor() {
    super();

    this._name = 'you'
  }

  render() {
    return html`
      ${super.stylesTemplate()}
      <x-welcome name=${this._name}></x-welcome>
        <button
          @click=${() => {
            this._name = 'somebody else'
          }}
        >
          Become somebody else
        </button>
    `;
  }
}

customElements.define('x-app', App)
