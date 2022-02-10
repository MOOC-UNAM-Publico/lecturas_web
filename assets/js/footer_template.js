class CustomFooterBib extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="d-flex flex-wrap justify-content-end py-3 my-4 border-top">
            <div class="licencia">
                <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.es" target="_blank">
                    <img src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" alt="Licencia Creative Commons">
                </a>
            </div>
            <div class="logos">
            
            <a href="https://www.unam.mx/" target="_blank"><img src="../../assets/imgs/UNAM_escudo_oficial.jpg" height="100" width="auto"></a>
            <a href="https://cuaieed.unam.mx/" target="_blank"><img src="https://mooc.cuaieed.unam.mx/assets/images/cuaieed.png" height="auto" width="150"></a>
            <a href="https://mooc.cuaieed.unam.mx/" target="_blank"><img src="https://mooc.cuaieed.unam.mx/assets/images/mooc.png" height="auto" width="150"></a>

            </div>
      </footer>
        `
    }
}

customElements.define('custom-footer-bib', CustomFooterBib);