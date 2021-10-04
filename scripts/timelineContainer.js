class TimeLineContainer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="main-timeline">
    ${this.children}
    </div>`
  }
}

customElements.define("timeline-container", TimeLineContainer)
