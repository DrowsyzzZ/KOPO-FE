console.log('연결확인');

const products = [
  { id: 1, name: '노트북', price: 1200000, inStock: true },
  { id: 2, name: '마우스', price: 30000, inStock: false },
  { id: 3, name: '키보드', price: 50000, inStock: true },
];

const names = products.map(product => product.name);
console.log(names);

const prices = products.map(product => product.price);
console.log(prices);

const available = products.filter(p => p.inStock);
console.log(available);

const mouse = products.find(p => p.name === '마우스');
console.log(mouse);

const availableNames = products.filter(p => p.inStock).map(p => p.name);
console.log(availableNames);

console.log(products);
