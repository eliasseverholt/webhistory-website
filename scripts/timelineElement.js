const startDate = new Date("1970")

class TimeLine extends HTMLElement {
  connectedCallback() {
    console.log(this.textContent)
    this.innerHTML = `
        <div class="timeline">
          <div class="icon"></div>
          <div class="date-content">
            <div class="date-outer">
              <span class="date">
                <span class="month">${
                  this.getAttribute("year") !== "Today"
                    ? (
                        parseInt(this.getAttribute("year")) -
                        startDate.getFullYear()
                      ).toString()
                    : new Date().getFullYear() - startDate.getFullYear()
                } Years</span>
                <span class="year">${this.getAttribute("year")}</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title">${this.getAttribute("title")}</h5>
            <p class="description">
              ${this.textContent}
            </p>
          </div>
        </div>
        `
    this.setAttribute("class", "timeline")
  }
}

customElements.define("timeline-element", TimeLine)
