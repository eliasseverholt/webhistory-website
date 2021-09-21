class TimeLine extends HTMLElement {
  connectedCallback() {
    this.innerHTML(`<h2>Hello</h2>`)
  }
}

customElements.define("time-line", TimeLine)
