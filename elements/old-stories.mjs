import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class OldStories extends LitElement
{
    static properties = {
    }

    render ()
    {
        return html`
            <section>
              <h2>Past Stories</h2>

              TODO
            </section>
        `
    }
}

customElements.define('old-stories', OldStories)
