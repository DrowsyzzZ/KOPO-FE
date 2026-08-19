const phoneRegex = /^010\d{8}$/;
const phoneForm = document.querySelector('#phone-form');
const input = document.querySelector('#phone');
const result = document.querySelector('#result');

phoneForm.addEventListener('submit', e => {
  e.preventDefault();

  const phone = input.value.trim().replaceAll('-', '');
  input.value = phone;

  result.classList.remove('success', 'error');

  if (!phone) {
    showResult('전화번호를 입력해 주세요.', 'error');
    return;
  }

  if (!/^\d+$/.test(phone)) {
    showResult('숫자만 입력해 주세요.', 'error');
    return;
  }

  if (phone.length !== 11) {
    showResult('전화번호는 11자리로 입력해 주세요.', 'error');
    return;
  }

  if (!phone.startsWith('010')) {
    showResult('010으로 시작하는 번호를 입력해 주세요.', 'error');
    return;
  }

  if (phoneRegex.test(phone)) {
    showResult('올바른 전화번호입니다.', 'success');
  }
});

function showResult(message, type) {
  result.textContent = message;
  result.classList.add(type);
}
