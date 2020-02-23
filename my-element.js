// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';
// Extend the LitElement base class
export class ButtonElement extends LitElement {

  static get properties() {
    return {
      name: { type: String },
      perrete: { type: Number }
    }
  }

  constructor() {
    super();
    this.name = "Juan";
    this.perrete = "5"
  }
  
  /**
   * Implement `render` to define a template for your element.
   *
   * You must provide an implementation of `render` for any element
   * that uses LitElement as a base class.
   */
  render(){
    return html`
      <h1>
        ${this.name}: 
      </h1>
      <p>
        tengo ${this.perrete} perretes
      </p>
    `;
  }

  static get styles() {
    return css`
      :host {
        background: red;
        display: inline-flex;
        padding: 16px;
        border-radius: 6px;
      }

      h1 { 
        margin: 0;
      }
    `;
  }
}

// Register the new element with the browser.
customElements.define('button-element', ButtonElement);
