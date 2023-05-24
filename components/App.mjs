import {
  html,
  LitElement,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class App extends LitElement {
  static get properties() {
    return {
      _name: { type: String, state: true },
    };
  }

  constructor() {
    super();

    this._name = 'you';
  }

  render() {
    return html`
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
