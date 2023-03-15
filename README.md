# 🐱고냥이타운 생성기🐱

### 주소
[generator.catmc.kr](https://generator.catmc.kr)


### 프로젝트 실행
```
npm i
npm run dev
```

### 프로젝트 빌드
```
npm run build
```

### 스택
 - React18
 - Vite4
 - Redux toolkit
 - Typescript
 - Styled components
 
 ### 설명
 #### 칭호
 `커스텀 칭호` : 원하는 글자와 색상으로 꾸민 칭호.
 
 `칭호 생성 규칙` : 한글 1 ~ 5자, 영어 1 ~ 6자, 특수문자 비허용, 영어 한글 혼합 사용 불가, 플레이트 색상(대괄호)은 통일해야함.
 
 
 ### 기능
 #### 칭호
 - 칭호 생성 규칙에 맞는지 검사
 - 색상 선택 기능
 - 선택한 색상의 개수보다 글자의 수가 더 많으면 그라데이션 적용
 #### 색깔 닉네임
 - 닉네임을 query string으로 받는다.
 - 닉네임 글자수에 맞게 16진수 color code 생성
 - 선택한 색상의 개수보다 글자의 수가 더 많으면 그라데이션 적용
