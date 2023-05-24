import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class AppIntro extends LitElement
{
    static properties = {
    }

    render ()
    {
        return html`
            <section>
              <p>The rules are simple … TODO.</p>
            </section>
        `
    }
}

customElements.define('app-intro', AppIntro)
