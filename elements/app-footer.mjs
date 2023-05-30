import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'

import AppElement from '../utils/AppElement.mjs'

class AppFooter extends AppElement
{
    static properties = {
    }

    render ()
    {
        return html`
            <footer>
              <center>
                <small>Made with ❤️ on an Open Wednesday by <a href="https://verkstedt.com">verkstedt</a></small>
              </center>
            </footer>
        `
    }
}

customElements.define('app-footer', AppFooter)
