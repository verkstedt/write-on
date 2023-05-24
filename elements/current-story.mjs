import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class CurrentStory extends LitElement
{
    static properties = {
    }

    render ()
    {
        return html`
            <section>
              <h2>The story in the making</h2>

              <p>TODO: Preview of the story so far</p>

              <p>TODO: The form™</p>
            </section>
        `
    }
}

customElements.define('current-story', CurrentStory)
