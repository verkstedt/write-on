import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'

import AppElement from '../utils/AppElement.mjs'

class AppHeader extends AppElement
{
    static properties = {
      _numberOfRounds: { type: Number, state: true },
    }
    
    constructor() {
      super();

      this._numberOfRounds = 3;
    }
    

    render ()
    {
        return html`
            ${super.stylesTemplate()}
            <header>
              <h1 class="title">Write On ✍</h1>
              <h2 class="subtitle">An almost collaborative game of storywriting.</h2>
              <big>
                <p>Write a story by adding three sentences and pass it on to the next one – <em>who can only see your last sentence!</em> 😄</p>
                <p>This madness is repeated ${this._numberOfRounds} times until the story is finished and ready to be admired by everyone.</p>
              </big>
            </header>
        `
    }
}

customElements.define('app-header', AppHeader)
