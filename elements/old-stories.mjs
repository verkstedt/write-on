import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class OldStories extends LitElement
{
    static properties = {
      _pastStories: [
        {title: 'La le lu', }
      ]
    }

    render ()
    {
        return html`
            <section>
              <h2>Past Stories</h2>
              <p>Have a look at some of the stories others have already added</p>
              
            </section>
        `
    }
}

customElements.define('old-stories', OldStories)
