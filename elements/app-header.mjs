import { html } from 'lit'

import { STORY_LENGTH } from '../consts/story.mjs'

import AppElement from '../utils/AppElement.mjs'

class AppHeader extends AppElement
{
    static properties = {
    }
    
    render ()
    {
        return html`
            <header>
              <h1 class="title">Write On ✍</h1>
              <h2 class="subtitle">An almost collaborative game of storywriting.</h2>
              <big>
                <p>Write a story by adding three sentences and pass it on to the next one – <em>who can only see your last sentence!</em> 😄</p>
                <p>This madness is repeated ${STORY_LENGTH} times until the story is finished and ready to be admired by everyone.</p>
              </big>
            </header>
        `
    }
}

customElements.define('app-header', AppHeader)
