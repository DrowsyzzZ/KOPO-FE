function calculate(num1, num2, op) {
  if (op === '+') return num1 + num2;
  if (op === '-') return num1 - num2;
  if (op === '*') return num1 * num2;

  if (op === '/') {
    if (num2 === 0) return null;
    return num1 / num2;
  }
}

let currentValue = '0';
let firstValue = null;
let operator = null;
let waitingForNextValue = false;

const result = document.querySelector('#result');
const calculation = document.querySelector('#calculation');
const numberButtons = document.querySelectorAll('.numBtn');
const operatorButtons = document.querySelectorAll('.calcBtn');
const clearButton = document.querySelector('.clearBtn');
const equalButton = document.querySelector('.equalBtn');

function showResult(value) {
  result.textContent = value;
}

function showCalculation(value) {
  calculation.textContent = value;
}

showResult(currentValue);

for (let button of numberButtons) {
  button.addEventListener('click', function () {
    const value = button.value;

    if (waitingForNextValue) {
      currentValue = value;
      waitingForNextValue = false;
      showCalculation(``);
    } else {
      currentValue = currentValue === '0' ? value : currentValue + value;
    }

    showResult(currentValue);

    if (operator !== null) {
      showCalculation(`${firstValue} ${operator} ${currentValue}`);
    }
  });
}

for (let button of operatorButtons) {
  button.addEventListener('click', function () {
    const nextOperator = button.value;

    if (operator !== null && !waitingForNextValue) {
      const answer = calculate(firstValue, Number(currentValue), operator);

      if (answer === null) {
        showResult('0으로 나눌 수 없습니다.');
        currentValue = '0';
        firstValue = null;
        operator = null;
        return;
      }

      currentValue = String(answer);
      showResult(currentValue);
    }

    firstValue = Number(currentValue);
    operator = nextOperator;
    waitingForNextValue = true;
    showCalculation(`${firstValue} ${operator}`);
  });
}

equalButton.addEventListener('click', function () {
  if (operator === null || waitingForNextValue) return;

  const calculationText = `${firstValue} ${operator} ${currentValue} =`;
  const answer = calculate(firstValue, Number(currentValue), operator);

  if (answer === null) {
    showResult('0으로 나눌 수 없습니다.');
    currentValue = '0';
  } else {
    currentValue = String(answer);
    showResult(currentValue);
    showCalculation(calculationText);
  }

  firstValue = null;
  operator = null;
  waitingForNextValue = true;
});

clearButton.addEventListener('click', function () {
  currentValue = '0';
  firstValue = null;
  operator = null;
  waitingForNextValue = false;
  showResult(currentValue);
  showCalculation('');
});
