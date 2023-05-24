import { html, LitElement,  } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class Welcome extends LitElement
{
    static get properties () {
        return {
            name: { type: String }
        }
    }

    constructor () {
        super()

        this.name = 'stranger'
    }

    render () {
        return html`
            <p>Hello, ${this.name}!</p>
        `
    }
}
customElements.define('x-welcome', Welcome)
