# React Card Maker

### 👷🏻 **structure**

# src

## 🔨 root

```
index.js
```

- src폴더에 포함된 메인 프로그램
- #root에 렌더될 jsx 컴포넌트를 조합하여 렌더링하고 표기
- dependency injection을 위해 service 단으로 분리한 기능들의 instance 생성 및 App 컴포넌트에 전달
  <br>

```
app.jsx
```

- 컴포넌트를 정의하는 프로그램
- react-router 가 포함되어 있는 컴포넌트
  <br>
  <br>

## 🔨 service

🔍 index.js 에서 import 하게 되는 별도 기능 분리
<br>
<br>

```
auth_service.js
```

- firebase auth로 로그인 기능 구현

```
card_repository.js
```

- firebase realtime database 통해 object data upload, delete 기능 구현

```
firebase.js
```

- firebase library 사용을 위한 config 설정, instance 생성 (세팅)

```
image_uploader.js
```

- image 업로드 시 cloudinary 에 저장
  <br>
  <br>

## 🔨 components

🔍 기능별 컴포넌트 분리
<br>

`Button.jsx`<br>
`Login.jsx`<br>
`Header.jsx`<br>
`Footer.jsx`<br>
`Maker.jsx`<br>
`CardEditForm.jsx`<br>
`CardAddForm.jsx`<br>
`Preview.jsx`<br>
`Card.jsx`<br>
`ImageFileInput.jsx`<br>
<br>

## 🔨 common

🔍 Post CSS를 활용, 공통 style 작성

`colors.css`<br>
`size.css`<br>

<br>

# public

`images`<br>
`index.html`<br>
