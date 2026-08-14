class MyCard extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title');
    const desc = this.getAttribute('desc');

    const card = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const button = document.createElement('button');
    const span = document.createElement('span');

    let count = 0;

    card.className = 'card';
    button.className = 'like-button';
    span.className = 'like-hint';

    h2.textContent = title;
    p.textContent = desc;
    button.textContent = `♥ 좋아요 ${count}`;
    span.textContent = '↑ 클릭하면 숫자 증가';

    card.append(h2, p, button, span);
    this.appendChild(card);

    button.addEventListener('click', function () {
      count++;
      button.textContent = `♥ 좋아요 ${count}`;
    });
  }
}

customElements.define('my-card', MyCard);
