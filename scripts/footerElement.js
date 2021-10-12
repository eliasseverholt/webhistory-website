const footerText = "© Elias"

class FooterElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<p>${footerText}</p>`
  }
}

customElements.define("footer-text", FooterElement)
