import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'

import { STORY_LENGTH } from '../consts/story.mjs'

import AppElement from '../utils/AppElement.mjs'
import './one-story.mjs'
import './story-form.mjs'

class CurrentStory extends AppElement
{
  static properties = {
    storyId: {},
    story: { argument: false },
  }

  render ()
  {
    if (!this.storyId)
    {
      return html`
        ${super.stylesTemplate()}
        <p>
          Loading…
        </p>
      `
    }

    const start = !this.story?.length
    const end = this.story?.length >= STORY_LENGTH - 1

    return html`
      ${super.stylesTemplate()}
      <section>
        <h2>
          ${start ? 'Start a new story ✨' : 'The story in the making 📖'}</h2>
        <one-story .story=${this.story}></one-story>
        <story-form .storyId=${this.storyId} ?last=${end} />
      </section>
    `
  }
}

customElements.define('current-story', CurrentStory)
