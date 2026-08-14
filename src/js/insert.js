const text = document.querySelector('#text');
const list = document.querySelector('#list');

function makeCard() {
  return `<div class="card">${text.value}</div>`;
}

document.querySelector('#addTop').addEventListener('click', function () {
  list.insertAdjacentHTML('afterbegin', makeCard());
});

document.querySelector('#addBottom').addEventListener('click', function () {
  list.insertAdjacentHTML('beforeend', makeCard());
});

document.querySelector('#dup').addEventListener('click', function () {
  const cards = document.querySelectorAll('.card');
  const last = cards[cards.length - 1];
  const copy = last.cloneNode(true);

  list.appendChild(copy);
});
