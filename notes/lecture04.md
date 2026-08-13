# 04. CSS 인터랙션

> 호버 상태와 전환 효과를 사용해 사용자의 동작에 반응하는 UI를 만들고, 이미지 중심의 카드와 갤러리를 구성하는 강의입니다.

## 학습 내용

### 1. 드롭다운 메뉴

- 중첩 목록을 이용한 주 메뉴와 하위 메뉴 구성
- `position: relative`와 `absolute`를 이용한 하위 메뉴 배치
- `:hover`를 이용한 메뉴 상태 변경
- `opacity`와 `visibility`를 함께 사용한 표시 전환
- 그림자와 배경색을 이용한 메뉴 영역 구분

### 2. 아이콘 라이브러리

- Font Awesome을 불러와 브랜드 아이콘 사용
- 클래스 선택자로 아이콘별 크기와 색상 설정
- 버튼에 테두리, 둥근 모서리, 그림자 적용
- 호버 시 버튼의 배경색과 위치 변경

### 3. 이미지 오버레이

- 이미지와 오버레이를 하나의 카드 안에 배치
- 부모 요소에 `position: relative`와 `overflow: hidden` 적용
- 오버레이를 `position: absolute`와 `inset`으로 이미지 위에 배치
- 호버 시 이미지 확대와 오버레이 텍스트 표시
- `transition`, `transform`, `opacity`를 이용한 자연스러운 전환

### 4. 미니 갤러리

- CSS Grid를 이용한 이미지 카드 배치
- 서로 다른 이미지 비율과 `object-fit` 처리
- 그라데이션 오버레이 위에 작품 제목과 작가 정보 배치
- 화면 크기에 따른 카드 열 개수와 간격 조절

## 실습 내용

### 드롭다운 메뉴

- 제품 메뉴에 마우스를 올리면 하위 항목이 나타나는 내비게이션 제작

### Font Awesome 버튼

- YouTube, GitHub, Google, Apple, Steam 아이콘 버튼 구성
- 아이콘 브랜드 색상과 버튼 호버 이동 효과 적용

### 이미지 오버레이와 미니 갤러리

- 이미지에 마우스를 올리면 확대되고 텍스트가 나타나는 카드 제작
- 명화 다섯 작품을 반응형 갤러리 형태로 구성

## 주요 사용 속성

```css
position: absolute;
inset: 0;
opacity: 0;
visibility: hidden;
transition: opacity 0.3s;
transform: scale(1.05);
overflow: hidden;
```

## 실습 파일

- `src/html/dropdown.html`
- `src/css/dropdown.css`
- `src/html/fontawesome.html`
- `src/css/fontawesome.css`
- `src/html/overlay.html`
- `src/css/overlay.css`
- `src/html/minigallery.html`
- `src/css/minigallery.css`

## 정리

호버 상태는 사용자가 조작할 수 있는 요소를 분명하게 보여준다. 이미지 확대와 오버레이처럼 여러 효과를 함께 사용할 때는 각 속성에 전환 시간을 설정하고, 카드에 `overflow: hidden`을 적용해 확대된 이미지가 영역 밖으로 나오지 않도록 해야 한다.
