import { html } from 'lit'

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
        <p>
          Loading…
        </p>
      `
    }

    const start = !this.story?.length
    const end = this.story?.length >= STORY_LENGTH - 1

    return html`
      <one-story .story=${this.story}>
        <h2 slot="header">
          ${start ? 'Start a new story ✨' : 'The story in the making 📖'}
        </h2>
        <story-form slot="footer" .storyId=${this.storyId} ?last=${end} />
      </one-story>
    `
  }
}

customElements.define('current-story', CurrentStory)
