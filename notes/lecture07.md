# 07. 배열, 객체, 달력, JSON Server

> 배열과 객체 형태의 데이터를 다루고, `Date` 객체로 달력을 만든 뒤 JSON Server로 간단한 REST API를 실행하는 강의입니다.

## 학습 내용

### 1. 배열 안의 객체

- 여러 객체를 배열에 담아 목록 형태의 데이터 구성
- 점 표기법으로 객체의 속성에 접근
- 상품명, 가격, 재고 여부처럼 하나의 항목에 관련된 여러 값 관리

```js
const products = [
  { id: 1, name: '노트북', price: 1200000, inStock: true },
  { id: 2, name: '마우스', price: 30000, inStock: false },
];

console.log(products[0].name);
```

### 2. 배열 메서드

- `map()`으로 각 객체에서 필요한 값만 뽑아 새로운 배열 생성
- `filter()`로 조건을 만족하는 객체만 선택
- `find()`로 조건을 처음 만족하는 객체 하나 검색
- `filter()`와 `map()`을 연결하는 메서드 체이닝
- 콜백 함수의 반환값이 각 배열 메서드에서 어떤 역할을 하는지 이해

```js
const availableNames = products
  .filter(product => product.inStock)
  .map(product => product.name);
```

`filter()`의 콜백이 반환한 Boolean 값은 결과 배열에 직접 들어가지 않는다. `true`이면 현재 항목을 남기고, `false`이면 제외한다.

### 3. Date 객체와 달력

- `new Date()`로 현재 날짜 생성
- `getFullYear()`, `getMonth()`, `getDate()`, `getDay()` 사용
- 해당 월의 첫 번째 요일과 마지막 날짜 계산
- 빈 칸과 날짜 칸을 생성해 7열 달력 구성
- 현재 날짜에 `today` 클래스 적용
- 날짜를 클릭하면 `alert()`로 선택한 날짜 표시

```js
const firstDay = new Date(currentYear, currentMonth, 1).getDay();
const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
```

### 4. 달력 화면 갱신

- 표시 중인 연도와 월을 `currentYear`, `currentMonth`로 관리
- `renderCalendar()`로 제목과 날짜 영역을 다시 렌더링
- `replaceChildren()`으로 이전 달의 날짜 요소 제거
- 이전 달과 다음 달 버튼에 클릭 이벤트 등록
- 1월 이전과 12월 이후로 이동할 때 연도 함께 변경

### 5. JSON Server

- `package.json`에 JSON Server 의존성과 실행 명령 등록
- `db.json`에 사용자 데이터 작성
- Yarn으로 JSON Server 실행
- 실행 중 `db.json` 변경 사항을 자동으로 감시하는 방식 이해

```bash
yarn start
```

```text
http://localhost:3000/users
http://localhost:3000/users/1
```

`Watching...`이 표시되면 JSON Server가 요청과 데이터 변경을 기다리는 상태다. 서버는 `Ctrl + C`로 종료한다.

## 실습 내용

### 객체 배열 콘솔 실습

- 상품 객체 배열 생성
- 상품명과 가격 배열 출력
- 재고가 있는 상품 필터링
- 이름으로 특정 상품 검색
- 재고가 있는 상품명만 체이닝으로 추출

### 달력 실습

- 현재 연·월의 달력 출력
- 일요일과 토요일 색상 구분
- 오늘 날짜 강조
- 이전 달과 다음 달 이동
- 날짜 클릭 시 선택 날짜 알림

### JSON Server 실습

- 사용자 목록을 `db.json`에 구성
- `/users`와 `/users/:id` 주소로 데이터 확인
- `yarn start` 명령으로 로컬 API 서버 실행

## 실습 파일

- `src/html/console.html`
- `src/js/console.js`
- `src/html/calendar.html`
- `src/css/calendar.css`
- `src/js/calendar.js`
- `db.json`
- `package.json`
- `yarn.lock`

## 정리

배열 메서드를 사용하면 객체 목록에서 필요한 데이터를 선택하고 변환할 수 있다. 달력은 표시할 연도와 월을 상태로 관리하고 화면을 다시 그리는 방식으로 구현한다. JSON Server를 사용하면 별도의 백엔드를 작성하지 않아도 `db.json`을 기반으로 REST API 형태의 데이터를 실습할 수 있다.
