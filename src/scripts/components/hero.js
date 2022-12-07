class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section>
      <div class="hero">
        <div tabindex="0" class="hero__desc">
          <h1 class="hero__text">Selamat datang di Bistro</h2>
          <p>Restoran kecil yang bersuana santai, homey, dan kasual.</p>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('hero-section', Hero);
