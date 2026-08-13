# 03. CSS 심화

> Flexbox와 Grid를 이용해 레이아웃을 구성하고, 요소의 위치와 화면 크기에 따른 반응형 스타일을 설정하는 강의입니다.

## 학습 내용

### 1. Flexbox

- `display: flex`를 이용한 Flexbox 레이아웃 생성
- `flex-direction`을 이용한 주축 방향 설정
- `justify-content`를 이용한 주축 정렬
- `align-items`와 `align-content`를 이용한 교차축 정렬
- `flex-wrap`을 이용한 줄바꿈 설정
- `flex-grow`, `flex-shrink`, `flex-basis`를 이용한 항목 크기 조절

### 2. CSS Grid

- `display: grid`를 이용한 Grid 레이아웃 생성
- `grid-template-columns`와 `grid-template-rows`를 이용한 행과 열 설정
- `fr` 단위를 이용한 공간 비율 배분
- `gap`을 이용한 행과 열 사이의 간격 설정
- `grid-column`과 `grid-row`를 이용한 항목 배치
- `repeat()`과 `minmax()`를 이용한 반복 및 크기 범위 설정

### 3. 요소 위치 지정

- `position` 속성의 `static`, `relative`, `absolute`, `fixed`, `sticky`
- `top`, `right`, `bottom`, `left`를 이용한 위치 조절
- 부모 요소를 기준으로 한 절대 위치 지정
- `z-index`를 이용한 요소의 쌓임 순서 설정

### 4. 반응형 디자인

- 반응형 웹 디자인과 뷰포트의 개념
- 미디어 쿼리를 이용한 화면 크기별 스타일 적용
- `min-width`와 `max-width`를 이용한 분기점 설정
- 모바일 우선 방식과 데스크톱 우선 방식
- 유동적인 크기와 레이아웃을 이용한 화면 대응
- 이미지와 표의 반응형 처리

## 실습 내용

### 개인 포트폴리오 레이아웃 개선

- 헤더를 화면 상단에 고정하고 본문이 가려지지 않도록 여백 설정
- Flexbox를 이용해 로고 영역과 내비게이션 메뉴 배치
- 기술 목록을 개별 카드로 구성하고 CSS Grid로 정렬
- 카드에 그림자와 호버 이동 효과 적용
- 미디어 쿼리를 이용해 화면 크기에 따라 여백과 열 개수 조정
- 내비게이션 링크로 페이지 내부의 소개, 기술, 연락처 영역 연결

## 주요 사용 속성

```css
display: flex;
display: grid;
grid-template-columns: repeat(3, 1fr);
position: fixed;
transition: transform 0.2s;
transform: translateY(-4px);
```

## 실습 파일

- `src/html/portfolio.html`
- `src/css/portfolio.css`

## 정리

Flexbox는 한 방향의 요소 배치와 정렬에 적합하고, Grid는 행과 열을 함께 사용하는 카드 레이아웃에 적합하다. 고정 헤더를 사용할 때는 헤더 높이만큼 본문에 여백을 주어 콘텐츠가 가려지지 않게 해야 한다. 미디어 쿼리를 사용하면 동일한 HTML 구조를 유지하면서 화면 크기에 따라 레이아웃을 변경할 수 있다.
