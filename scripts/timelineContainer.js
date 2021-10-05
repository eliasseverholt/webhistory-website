class TimeLineContainer extends HTMLElement {
  addNode = (element) => {
    this.insertAdjacentElement("beforebegin", element)
  }

  connectedCallback() {
    let element = document.createElement("div")
    element.innerHTML = "<p>ls</p>"
    let observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        console.log(mutation)
        this.insertAdjacentElement("beforebegin", mutation.addedNodes[0])
      })
    })
    observer.observe(this, { childList: true })
    this.insertAdjacentElement("beforeend", element)
  }
}

customElements.define("timeline-container", TimeLineContainer)
