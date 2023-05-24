import { html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export default class AppElement extends LitElement
{
  stylesTemplate () {
    return html`<style>@import url('/styles/write-on.theme.classless.css')</style>`
  }
}
