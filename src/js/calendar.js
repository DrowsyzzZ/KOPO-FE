const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();

const title = document.querySelector('#title');
const days = document.querySelector('#days');
const lastMonth = document.querySelector('#lastMonth');
const nextMonth = document.querySelector('#nextMonth');

function renderCalendar() {
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();

  title.textContent = `${currentYear}년 ${currentMonth + 1}월`;
  days.replaceChildren();

  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement('div');
    days.appendChild(blank);
  }

  for (let date = 1; date <= lastDate; date++) {
    const cell = document.createElement('div');
    cell.textContent = date;

    const isToday = currentYear === today.getFullYear() && currentMonth === today.getMonth() && date === today.getDate();
    if (isToday) cell.classList.add('today');

    cell.addEventListener('click', function () {
      alert(`${currentYear}년 ${currentMonth + 1}월 ${date}일`);
    });
    days.appendChild(cell);
  }
}

lastMonth.addEventListener('click', function () {
  currentMonth--;

  if (currentMonth < 0) {
    currentYear--;
    currentMonth = 11;
  }

  renderCalendar();
});

nextMonth.addEventListener('click', function () {
  currentMonth++;

  if (currentMonth > 11) {
    currentYear++;
    currentMonth = 0;
  }

  renderCalendar();
});

renderCalendar();
