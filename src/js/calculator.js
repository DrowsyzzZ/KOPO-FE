function calculate(num1, num2, op) {
  if (op === '+') return num1 + num2;
  if (op === '-') return num1 - num2;
  if (op === '*') return num1 * num2;
  if (op === '/') {
    if (num2 === 0) return '0으로 나눌 수 없습니다';
    return num1 / num2;
  }
}

const btn = document.querySelector('#calcBtn');
const result = document.querySelector('#result');

btn.addEventListener('click', function () {
  const num1 = Number(document.querySelector('#num1').value);
  const num2 = Number(document.querySelector('#num2').value);
  const op = document.querySelector('#operator').value;

  const answer = calculate(num1, num2, op);

  result.innerHTML = `결과: ${answer}`;
});
