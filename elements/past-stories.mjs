import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class PastStories extends LitElement
{
  static properties = {
    stories: { argument: false },
  }

  render ()
  {
    if (!this.stories)
    {
      return html`Loading…`
    }

    return html`
      <section>
        <h2>Past stories</h2>

        <p>Have a look at some of the stories others have already added</p>

        ${this.stories.map(story => html`
          <details>
            <summary>TODO Thumbnail of a story</summary>

            <one-story finished .story=${story}></one-story>
          </details>
        `)}
      </section>
    `
  }
}

customElements.define('past-stories', PastStories)
