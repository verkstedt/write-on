import { html } from 'lit'

import { STORY_LENGTH } from '../consts/story.mjs'

import AppElement from '../utils/AppElement.mjs'
import { getAll } from '../utils/api.mjs'

import './current-story.mjs'
import './past-stories.mjs'

class StoriesContainer extends AppElement
{
  static properties = {
    _currentStory: { state: true },
    _currentStoryId: { state: true },
    _pastStories: { state: true },
  }

  constructor () {
    super()

    this._currentStory = []
    this._currentStoryId = null
    this._pastStories = null

    void this.fetchData()
  }

  async fetchData () {
    const sentences = await getAll('sentences')
    const allStories = {}
    sentences.forEach(({ game: storyId, ...sentence }) => {
      if (!(storyId in allStories)) {
        allStories[storyId] = []
      }
      allStories[storyId].push(sentence)
    })

    const lastStoryId = Math.max(...Object.keys(allStories))

    const lastStory = allStories[lastStoryId]
    if (lastStory.length >= STORY_LENGTH) {
      this._currentStory = []
      this._currentStoryId = lastStoryId + 1
    } else {
      this._currentStory = lastStory
      this._currentStoryId = lastStoryId
      delete allStories[lastStoryId]
    }

    this._pastStories = Object.values(allStories).reverse()
  }

  render ()
  {
    return html`
      <current-story
        .storyId=${this._currentStoryId}
        .story=${this._currentStory}
      ></current-story>
      <past-stories .stories=${this._pastStories}></past-stories>
    `
  }
}

customElements.define('stories-container', StoriesContainer)

