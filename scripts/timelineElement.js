class TimeLine extends HTMLElement {
  connectedCallback() {
    let element = document.createElement("div")
    element.innerHTML = `
        <div class="timeline">
          <div class="icon"></div>
          <div class="date-content">
            <div class="date-outer">
              <span class="date">
                <span class="month">2 Years</span>
                <span class="year">2013</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title">${this.getAttribute("title")}</h5>
            <p class="description">
              LOREM IPSUM
            </p>
          </div>
        </div>
        `
    this.insertAdjacentElement("beforeend", element)
  }
}

customElements.define("time-line", TimeLine)
