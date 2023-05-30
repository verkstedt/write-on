import { LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export default class AppElement extends LitElement
{
  createRenderRoot() {
    // Create so called “light DOM” which allows styles to bleed in and out
    return this;
  }
}
