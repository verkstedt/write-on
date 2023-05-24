import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'

import AppElement from '../utils/AppElement.mjs'

class AppIntro extends AppElement
{
    static properties = {
    }

    render ()
    {
        return html`
            ${super.stylesTemplate()}
            <section>
              <h2>Rules? – Phhh, easy!</h2>
              <ol>
                <li>Enter a name</li>
                <li>
                  Check if there are already one or more story chunks. 
                  <ol>
                    <li>If so, that means that you've entered an <strong>ongoing story</strong>. Read the last sentence and write down your three sentences to add to the story.</li>
                    <li>If there are no chunks to be seen, start a new story by simply writing down three sentences.</li>
                  </ol>
                </li>
                <li>Share the URL with someone to continue your story.</li>
                <li>Done! 😎</li>
              </ol>
            </section>
        `
    }
}

customElements.define('app-intro', AppIntro)
