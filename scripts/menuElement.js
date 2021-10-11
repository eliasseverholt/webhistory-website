class MenuElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `      <nav class="navbar navbar-expand-sm navbar-light bg-light px-sm-4">
        <a class="navbar-brand" href="/index.html#">Webbhistory</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link ${
                this.getAttribute("active") === "Timeline"
                  ? "active"
                  : undefined
              }" href="/index.html#">Timeline</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${
                this.getAttribute("active") === "Impact" ? "active" : undefined
              }" href="/impact.html">Impact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${
                this.getAttribute("active") === "Security"
                  ? "active"
                  : undefined
              }" href="/security.html">Security & Privacy</a>
            </li>
          </ul>
        </div>
      </nav>`
  }
}

customElements.define("menu-element", MenuElement)
