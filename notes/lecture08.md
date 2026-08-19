# 08. 비동기 통신과 브라우저 API

> 브라우저 저장소와 Fetch API를 사용하고, CRUD 게시판·정규식 검증·모달·Swiper를 구현하는 강의입니다.

## 학습 내용

### 1. Web Storage

- `localStorage`와 `sessionStorage`에 값 저장
- `setItem()`과 `getItem()`으로 데이터 쓰기와 읽기
- 로컬 스토리지와 세션 스토리지의 유지 범위 비교
- `window.onload` 이후 저장된 값을 화면에 출력

```js
localStorage.setItem('test', 1);
const value = localStorage.getItem('test');
```

### 2. 비동기 처리와 Fetch API

- `async` 함수와 `await`으로 서버 응답 대기
- `fetch()`로 JSON Server에 HTTP 요청 전송
- `response.ok`로 HTTP 요청 성공 여부 확인
- `response.json()`으로 JSON 응답 변환
- `try...catch`로 요청 중 발생한 오류 처리

```js
async function getPosts() {
  const response = await fetch('http://localhost:3000/posts');

  if (!response.ok) {
    throw new Error(`GET 실패: ${response.status}`);
  }

  return response.json();
}
```

### 3. CRUD 게시판

- `GET`으로 게시글 목록 조회
- `POST`로 제목과 내용 등록
- `PATCH`로 선택한 게시글 수정
- `DELETE`로 선택한 게시글 삭제
- 응답을 받은 뒤 목록을 다시 조회해 화면 갱신
- 게시글 카드의 `data-id`로 요청 대상 식별
- 이벤트 위임으로 동적으로 생성된 버튼 처리
- 게시글이 없을 때 빈 목록 안내 표시

```text
조회   GET    /posts
등록   POST   /posts
수정   PATCH  /posts/:id
삭제   DELETE /posts/:id
```

### 4. 정규식과 입력값 검증

- `^`, `$`, `\d`, 수량 표현식을 이용한 전화번호 정규식 작성
- 빈 값, 문자 포함, 길이, 시작 번호를 순서대로 검사
- `replaceAll()`로 입력된 하이픈 제거
- 폼의 `submit` 이벤트로 버튼 클릭과 Enter 입력을 함께 처리
- 검사 결과에 따라 성공과 오류 스타일 구분

```js
const phoneRegex = /^010\d{8}$/;
const phone = input.value.trim().replaceAll('-', '');
```

### 5. 모달

- 버튼을 클릭해 모달 오버레이 표시
- 확인 버튼으로 모달 닫기
- `target`과 `currentTarget`을 비교해 바깥 영역 클릭 감지
- 모달 배경과 콘텐츠 영역의 이벤트 구분

```js
backdrop.addEventListener('click', event => {
  if (event.target === event.currentTarget) {
    backdrop.style.display = 'none';
  }
});
```

### 6. Swiper 라이브러리

- CDN으로 Swiper CSS와 JavaScript 연결
- Swiper 기본 HTML 구조 구성
- `loop`로 슬라이드 무한 반복
- `pagination`으로 페이지 표시와 클릭 이동 설정
- `autoplay.delay`로 자동 전환 간격 설정
- `disableOnInteraction`으로 사용자 조작 이후 자동 재생 유지

```js
const swiper = new Swiper('.mySwiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});
```

## 실습 내용

### Storage 실습

- 로컬 스토리지와 세션 스토리지 값 출력
- 새로고침과 새 탭에서 저장 데이터 유지 범위 확인

### CRUD 게시판 실습

- JSON Server의 `/posts` 엔드포인트 사용
- 게시글 등록 후 폼 초기화와 목록 갱신
- 게시글 카드 내부에서 인라인 수정
- 삭제 확인 후 게시글 제거
- 게시글 개수와 빈 목록 상태 표시

### 유효성 검사 실습

- 휴대전화 번호 형식을 세부 조건으로 검사
- 하이픈을 제거한 뒤 11자리 `010` 번호 확인
- 버튼 또는 Enter로 검사 실행

### 모달 실습

- 모달 열기와 닫기
- 오버레이 바깥 영역 클릭으로 닫기
- 반투명 배경과 등장 애니메이션 적용

### Swiper 실습

- 다섯 개 슬라이드 구성
- 페이지네이션과 2초 간격 자동 재생
- 사용자 조작 후에도 자동 재생 유지

## 실습 파일

- `src/html/storage.html`
- `src/js/storage.js`
- `src/html/crud.html`
- `src/css/crud.css`
- `src/js/crud.js`
- `src/html/validate.html`
- `src/css/validate.css`
- `src/js/validate.js`
- `src/html/modal.html`
- `src/css/modal.css`
- `src/js/modal.js`
- `src/html/swiper.html`
- `src/css/swiper.css`
- `src/js/swiper.js`
- `db.json`

## 정리

비동기 요청은 응답을 기다린 뒤 결과에 맞춰 화면을 직접 갱신해야 한다. Fetch API와 JSON Server를 이용하면 순수 JavaScript 환경에서도 CRUD 흐름을 연습할 수 있다. 브라우저 저장소, 정규식, 모달 이벤트, 외부 라이브러리까지 활용하면서 데이터와 사용자 인터페이스를 연결하는 방법을 익혔다.
