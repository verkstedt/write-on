import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class AppHeader extends LitElement
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
            <header>
              <h1>Write On ✍</h1>
              <h2>An <em>almost</em> collaborative game of storywriting.</h2>
              <big>
                <p>Write a story by adding three sentences and passes it on to the next one – <em>who can only see your last sentence!</em> 😄</p>
                <p>This madness is repeated ${this._numberOfRounds} times until the story is finished and ready to be admired by everyone.</p>
              </big>
            </header>
        `
    }
}

customElements.define('app-header', AppHeader)
