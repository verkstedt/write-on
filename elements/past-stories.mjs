import { html } from 'lit'

import AppElement from '../utils/AppElement.mjs'

import './writer-avatar.mjs'

class PastStories extends AppElement
{
  static properties = {
    stories: { argument: false },
  }

  render ()
  {
    if (!this.stories)
    {
      return html`
        <p>
          Loading…
        </p>
      `
    }


    return html`
      <section>
        <h2>Past stories</h2>

        <p>Have a look at some of the stories others have already added</p>

        ${this.stories.map(story => {
            const players = new Set()
            story.forEach(beat => { players.add(beat.player) })
            const playerNames = Array.from(players)
            return html`
              <style>
                writer-avatar:not(:first-child)
                {
                  margin-inline-start: -1em;
                }
              </style>
              <details>
                <summary>
                  ${playerNames.map(name => html`<writer-avatar .name=${name}></writer-avatar>`)}
                  <q>${story[0].sentenceHidden}</q>
                </summary>

                <one-story finished .story=${story}></one-story>
              </details>
            `
        }) }
      </section>
    `
  }
}

customElements.define('past-stories', PastStories)
