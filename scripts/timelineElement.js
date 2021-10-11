class TimeLine extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="timeline">
          <div class="icon"></div>
          <div class="date-content">
            <div class="date-outer">
              <span class="date">
                <span class="month">2 Years</span>
                <span class="year">${this.getAttribute("year")}</span>
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
    this.setAttribute("class", "timeline")
  }
}

customElements.define("timeline-element", TimeLine)
