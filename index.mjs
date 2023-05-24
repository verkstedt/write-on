import { html, render, LitElement,  } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

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

class App extends LitElement {
    static get properties () {
        return {
            _name: { type: String, state: true }
        }
    }

    constructor () {
        super()
        this._name = 'you'
    }

    render () {
        return html`
            <h1>✍ Write On</h1>
            <x-welcome name=${this._name}></x-welcome>
            <button @click=${() => { this._name = 'somebody else' }}>Become somebody else</button>

        `
    }
}
customElements.define('x-app', App)

render(html`<x-app />`, document.body)
