class MyFooter extends HTMLElement {
  connectedCallback() {
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    p.textContent = '© 2026 박상욱. All rights reserved.';
    footer.appendChild(p);
    this.appendChild(footer);
  }
}

customElements.define('my-footer', MyFooter);
