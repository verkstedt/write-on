import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class AppHeader extends LitElement
{
    static properties = {
    }

    render ()
    {
        return html`
            <header>
              <h1>✍ Write On</h1>
              <p>An almost collaborative game of storywriting.</p>
            </header>
        `
    }
}

customElements.define('app-header', AppHeader)
