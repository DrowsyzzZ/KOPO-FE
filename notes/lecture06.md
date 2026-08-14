# 06. JavaScript 심화

> DOM 요소 생성과 삽입, 이벤트 처리, 이벤트 위임, Custom Elements를 이용한 컴포넌트 구성을 학습하는 강의입니다.

## 학습 내용

### 1. DOM 요소 생성과 삽입

- `createElement()`를 이용한 새로운 HTML 요소 생성
- `textContent`를 이용한 안전한 텍스트 삽입
- `append()`와 `appendChild()`를 이용한 자식 요소 추가
- `insertAdjacentHTML()`의 네 가지 삽입 위치 이해
- `cloneNode(true)`를 이용한 요소 복제
- 생성한 요소는 DOM에 추가해야 화면에 나타난다는 점 이해

### 2. 이벤트 처리

- `addEventListener()`를 이용한 이벤트 등록
- `click`, `input`, `change`, `submit`, `keydown` 이벤트의 차이
- `event.target`과 `event.currentTarget`의 차이
- `closest()`를 이용해 클릭한 요소에서 가장 가까운 부모 요소 찾기
- 이벤트 버블링과 부모 요소를 이용한 이벤트 위임
- 가드 절을 사용해 유효하지 않은 이벤트 대상 처리

### 3. HTML 삽입과 보안

- `innerHTML`이 문자열을 HTML로 해석하는 원리
- 사용자 입력을 `innerHTML`에 직접 넣을 때 발생할 수 있는 XSS 위험
- 일반 텍스트는 `textContent`로 처리하는 방법
- HTML 서식이 필요한 경우 DOMPurify로 정제할 수 있다는 점
- 개발자가 정의한 고정 데이터와 외부 입력 데이터의 차이

### 4. Custom Elements

- `HTMLElement`를 상속해 사용자 정의 HTML 요소 만들기
- `connectedCallback()` 생명주기 메서드 사용
- `customElements.define()`으로 Custom Element 등록
- 사용자 정의 태그 이름에 하이픈이 필요한 이유
- `getAttribute()`로 컴포넌트 속성 읽기
- 각 컴포넌트가 독립적인 상태와 이벤트를 갖도록 구성
- 공통 헤더, 푸터, 카드 컴포넌트 재사용

## 실습 내용

### DOM 삽입 실습

- 입력값으로 카드를 만들고 목록의 위와 아래에 삽입
- 마지막 카드를 복제해 목록에 추가

### 이벤트 드롭다운

- 버튼 클릭으로 메뉴의 `open` 클래스 전환
- 드롭다운 바깥을 클릭하면 메뉴 닫기

### 투두리스트

- 버튼 클릭과 엔터 입력으로 할 일 추가
- `createElement()`와 `textContent`로 안전하게 항목 생성
- 이벤트 위임으로 개별 완료 처리와 삭제
- 완료 항목 삭제와 전체 항목 삭제
- 완료 개수와 전체 개수 표시
- 항목이 없을 때 빈 목록 안내 표시

### 공통 컴포넌트

- `<my-header>`와 `<my-footer>`를 포트폴리오와 투두리스트에서 재사용
- `<my-card>`의 `title`, `desc` 속성으로 서로 다른 카드 출력
- 카드별 좋아요 상태와 버튼 이벤트를 독립적으로 관리

## 주요 사용 코드

```js
const element = document.createElement('div');
element.textContent = value;
parent.appendChild(element);

parent.addEventListener('click', function (event) {
  const item = event.target.closest('li');
  if (!item) return;
});

class MyComponent extends HTMLElement {
  connectedCallback() {
    // 컴포넌트가 DOM에 연결될 때 실행
  }
}
```

## 실습 파일

- `src/html/insert.html`
- `src/css/insert.css`
- `src/js/insert.js`
- `src/html/dropdown-event.html`
- `src/css/dropdown-event.css`
- `src/js/dropdown-event.js`
- `src/html/todolist.html`
- `src/css/todolist.css`
- `src/js/todolist.js`
- `src/html/MyCard.html`
- `src/css/MyCard.css`
- `src/css/mycardpage.css`
- `src/js/MyCard.js`
- `src/css/MyHeader.css`
- `src/js/MyHeader.js`
- `src/css/MyFooter.css`
- `src/js/MyFooter.js`

## 정리

DOM 요소는 `createElement()`로 생성한 뒤 부모 요소에 추가해야 화면에 나타난다. 사용자 입력이 일반 텍스트라면 `innerHTML`보다 `textContent`가 단순하고 안전하다. 이벤트 위임을 사용하면 동적으로 추가된 항목도 부모의 이벤트 하나로 처리할 수 있다. Custom Elements는 브라우저 표준 기능으로 공통 UI를 재사용할 수 있으며, 각 인스턴스 내부에서 상태와 이벤트를 관리해야 여러 컴포넌트가 독립적으로 동작한다.
