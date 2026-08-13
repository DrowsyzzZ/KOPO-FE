# 05. JavaScript 기초

> 변수, 배열, 객체, 조건문과 반복문을 사용하고 DOM 요소와 이벤트를 연결해 동작하는 웹 페이지를 만드는 강의입니다.

## 학습 내용

### 1. 변수와 자료형

- `const`와 `let`을 이용한 값 저장
- 문자열과 숫자 자료형 사용
- `Number()`와 `String()`을 이용한 자료형 변환
- 템플릿 리터럴을 이용한 문자열 조합

### 2. 배열과 객체

- 배열에 여러 메뉴 데이터 저장
- 객체의 속성으로 이름, 가격, 카테고리 관리
- `for...of` 반복문으로 배열 항목 순회
- 반복 과정에서 가격 합계 계산

### 3. DOM 조작과 이벤트

- `querySelector()`와 `querySelectorAll()`로 요소 선택
- `innerHTML`과 `textContent`로 화면 내용 변경
- `addEventListener()`로 버튼 클릭 이벤트 등록
- 입력 요소의 `value` 읽기

### 4. 함수와 조건문

- 매개변수와 반환값을 사용하는 계산 함수 작성
- 연산자에 따른 조건 분기
- 0으로 나누는 상황에 대한 예외 처리
- 반복되는 화면 출력 코드를 함수로 분리

### 5. 계산기 상태 관리

- 현재 입력값, 첫 번째 값, 연산자를 변수로 관리
- 다음 숫자 입력을 기다리는 상태 구분
- 연속 연산과 등호 버튼 처리
- 초기화 버튼으로 계산 상태 복원
- 결과 위에 현재 계산식을 별도로 표시

## 실습 내용

### 메뉴 목록

- 메뉴 데이터를 객체 배열로 작성
- 반복문으로 메뉴 이름, 가격, 카테고리 출력
- 전체 메뉴 가격의 합계 계산
- 카테고리별 CSS 클래스 적용

### 기본 계산기

- 두 입력값과 선택한 연산자를 이용한 사칙연산
- 계산 버튼을 클릭하면 결과를 화면에 표시

### 버튼 계산기

- 숫자 버튼과 연산 버튼을 구분해 이벤트 연결
- 입력값과 계산식을 각각 화면에 표시
- 연속 계산, 등호, 초기화, 0 나누기 처리

## 주요 사용 코드

```js
const element = document.querySelector('#result');

for (const item of items) {
  // 배열 항목 처리
}

button.addEventListener('click', function () {
  // 클릭 이벤트 처리
});
```

## 실습 파일

- `src/html/menu.html`
- `src/css/menu.css`
- `src/js/menu.js`
- `src/html/calculator.html`
- `src/css/calculator.css`
- `src/js/calculator.js`
- `src/html/window-calculator.html`
- `src/css/window-calculator.css`
- `src/js/window-calculator.js`

## 정리

JavaScript는 HTML 요소를 선택하고 이벤트를 연결해 화면을 동적으로 변경한다. 배열과 객체를 이용하면 반복되는 데이터를 효율적으로 관리할 수 있고, 계산기처럼 입력 순서가 중요한 기능은 현재 값과 연산 상태를 각각 변수로 구분해 관리해야 한다.
