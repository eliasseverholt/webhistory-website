class MenuElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container-fluid">
            <a class="navbar-brand" href="../index.html">Webbhistoria</a>
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
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="../index.html"
                    >Timeline</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../impact.html">Impact</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../security.html">Security</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../privacy.html">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>`
  }
}

customElements.define("menu-element", MenuElement)
