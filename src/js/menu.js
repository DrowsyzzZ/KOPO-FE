const menu = [
  { name: '하얀고래커피', price: 4500, category: '커피' },
  { name: '아메리카노', price: 2500, category: '커피' },
  { name: '카페라떼', price: 3400, category: '커피' },
  { name: '바닐라라떼', price: 3600, category: '커피' },
  { name: '카페모카', price: 3600, category: '커피' },
  { name: '메론샌드', price: 6800, category: '디저트' },
  { name: '망고샌드', price: 6800, category: '디저트' },
  { name: '커피팥샌드', price: 4500, category: '디저트' },
];

const menuList = document.querySelector('#menu-list');

const categoryClass = {
  커피: 'coffee',
  디저트: 'dessert',
};

let html = '';
let totalPrice = 0;

for (let m of menu) {
  html += `
    <li>
        <span>${m.name}</span>
        <div>
            <span>${m.price}원</span>
            <span class="${categoryClass[m.category]}">(${m.category})</span>
        </div>
    </li>
    `;

  totalPrice += m.price;
}

html += `<li class="total"><span>총 합계: ${totalPrice}원</span></li>`;

menuList.innerHTML = html;
