import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

import './one-story.mjs'
import './story-form.mjs'

class CurrentStory extends LitElement
{
  static properties = {
    story: { argument: false },
  }

  render ()
  {
    if (!this.story)
    {
      return html`Loading…`
    }

    return html`
      <section>
        <h2>The story in the making</h2>
        <one-story .story=${this.story}></one-story>
        <story-form />
      </section>
    `
  }
}

customElements.define('current-story', CurrentStory)
