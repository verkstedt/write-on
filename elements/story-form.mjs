import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

import AppElement from '../utils/AppElement.mjs'
import { add } from '../utils/api.mjs'

class StoryForm extends AppElement
{
  static properties = {
    storyId: {}
  }

  async handleSubmit (event)
  {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    await add('sentences', Object.fromEntries(formData.entries()))

    // FIXME Drill down a function that adds story part to the state from stories-container
    window.location.reload()
  }

  render ()
  {
    return html`
      ${super.stylesTemplate()}
      <style>
        textarea
        {
          width: 100%;
        }
      </style>
      <form @submit=${this.handleSubmit}>
        <input type=hidden name="game" value=${this.storyId} />
        <label>
          <div>Name</div>
          <input
            name="player"
            required
            autocomplete="name"
          />
        </label>
        <label>
          <div>Part of the story that will be visible only at the end of the game</div>
          <textarea
            name="sentenceHidden"
            required
            rows={3}
            autoComplete="off"
          ></textarea>
        </label>
        <label>
          <div>Part of the story visible to next writer</div>
          <textarea
            name="sentenceOpen"
            required
            rows={2}
            autoComplete="off"
          ></textarea>
        </label>
        <div>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    `
  }
}

customElements.define('story-form', StoryForm)
