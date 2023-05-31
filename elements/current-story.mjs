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

    let heading
    if (start) {
      heading = 'Start a new story ✨'
    } else if (end) {
      heading = 'Finish the story ✍'
    } else {
      heading = 'The story in the making 📖'
    }

    return html`
      ${super.stylesTemplate()}
      <one-story .story=${this.story}>
        <h2 slot="header">${heading}</h2>
        <story-form slot="footer" .storyId=${this.storyId} ?last=${end} />
      </one-story>
    `
  }
}

customElements.define('current-story', CurrentStory)
