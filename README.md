# React Card Maker

### ๐ท๐ป **structure**

# src

## ๐จ root

```
index.js
```

- srcํด๋์ ํฌํจ๋ ๋ฉ์ธ ํ๋ก๊ทธ๋จ
- #root์ ๋ ๋๋  jsx ์ปดํฌ๋ํธ๋ฅผ ์กฐํฉํ์ฌ ๋ ๋๋งํ๊ณ  ํ๊ธฐ
- dependency injection์ ์ํด service ๋จ์ผ๋ก ๋ถ๋ฆฌํ ๊ธฐ๋ฅ๋ค์ instance ์์ฑ ๋ฐ App ์ปดํฌ๋ํธ์ ์ ๋ฌ
  <br>

```
app.jsx
```

- ์ปดํฌ๋ํธ๋ฅผ ์ ์ํ๋ ํ๋ก๊ทธ๋จ
- react-router ๊ฐ ํฌํจ๋์ด ์๋ ์ปดํฌ๋ํธ
  <br>
  <br>

## ๐จ service

๐ index.js ์์ import ํ๊ฒ ๋๋ ๋ณ๋ ๊ธฐ๋ฅ ๋ถ๋ฆฌ
<br>
<br>

```
auth_service.js
```

- firebase auth๋ก ๋ก๊ทธ์ธ ๊ธฐ๋ฅ ๊ตฌํ

```
card_repository.js
```

- firebase realtime database ํตํด object data upload, delete ๊ธฐ๋ฅ ๊ตฌํ

```
firebase.js
```

- firebase library ์ฌ์ฉ์ ์ํ config ์ค์ , instance ์์ฑ (์ธํ)

```
image_uploader.js
```

- image ์๋ก๋ ์ cloudinary ์ ์ ์ฅ
  <br>
  <br>

## ๐จ components

๐ ๊ธฐ๋ฅ๋ณ ์ปดํฌ๋ํธ ๋ถ๋ฆฌ
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

## ๐จ common

๐ Post CSS๋ฅผ ํ์ฉ, ๊ณตํต style ์์ฑ

`colors.css`<br>
`size.css`<br>

<br>

# public

`images`<br>
`index.html`<br>
