import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class AppFooter extends LitElement
{
    static properties = {
    }

    render ()
    {
        return html`
            <footer>
              <center>
                <small>© verkstedt</small>
              </center>
            </footer>
        `
    }
}

customElements.define('app-footer', AppFooter)
