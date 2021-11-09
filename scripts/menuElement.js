class MenuElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="navbar navbar-expand-sm navbar-light bg-light px-sm-4">
        <div class="container-fluid">
          <a class="navbar-brand" href="/index.html#">Webbhistoria</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
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
                }" href="/index.html#">Tidslinje</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${
                  this.getAttribute("active") === "Impact"
                    ? "active"
                    : undefined
                }" href="/impact.html">Påverkan</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ${
                  this.getAttribute("active") === "Security"
                    ? "active"
                    : undefined
                }" href="/security.html">Säkerhet & Integritet</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`
  }
}

customElements.define("menu-element", MenuElement)
