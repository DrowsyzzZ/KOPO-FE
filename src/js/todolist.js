const text = document.querySelector('#text');
const list = document.querySelector('#list');
const completedCount = document.querySelector('#completed-count');
const totalCount = document.querySelector('#total-count');
const emptyMessage = document.querySelector('#empty-message');

function updateListInfo() {
  const todoItems = list.querySelectorAll('li');
  const completedItems = list.querySelectorAll('li.done');

  completedCount.textContent = `완료 ${completedItems.length} /`;
  totalCount.textContent = `전체 ${todoItems.length}`;

  if (todoItems.length === 0) {
    emptyMessage.classList.add('is-visible');
    completedCount.textContent = '';
    totalCount.textContent = '';
  } else {
    emptyMessage.classList.remove('is-visible');
  }
}

function createLi(value) {
  const li = document.createElement('li');
  const label = document.createElement('span');
  label.className = 'label';
  label.textContent = value;

  const del = document.createElement('button');
  del.className = 'del';
  del.textContent = '삭제';

  li.append(label, del);
  return li;
}

function addList() {
  const value = text.value.trim();

  if (value === '') return;

  list.appendChild(createLi(value));
  text.value = '';
  updateListInfo();
}

document.querySelector('#add').addEventListener('click', () => addList());

text.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addList();
  }
});

list.addEventListener('click', function (e) {
  const li = e.target.closest('li');

  if (!li) return;
  if (e.target.classList.contains('del')) {
    li.remove();
  } else {
    li.classList.toggle('done');
  }

  updateListInfo();
});

const deleteActions = document.querySelector('#delete-actions');

deleteActions.addEventListener('click', function (e) {
  const button = e.target.closest('button');

  if (!button) return;

  if (button.classList.contains('delete-completed')) {
    const completedItems = list.querySelectorAll('li.done');
    completedItems.forEach(completedItem => completedItem.remove());
  } else if (button.classList.contains('delete-all')) {
    const todoItems = list.querySelectorAll('li');
    todoItems.forEach(todoItem => todoItem.remove());
  }

  updateListInfo();
});

updateListInfo();
