# 記帳本
利用node.js與mongoDB資料庫打造的記帳本，使用者可以註冊、登入，並新增記錄每筆花費，也可修改或刪除已記錄的資料。

## 網站頁面
![expense-tracker_users_login](https://user-images.githubusercontent.com/118960946/219851714-3c7a8cf1-e09f-41ca-8805-ab9d0d86f9a9.png)
![expense-tracker](https://user-images.githubusercontent.com/118960946/219851716-340fa468-37a8-4de7-b969-f614e0d940f7.png)

## 功能介紹
● 使用者登入：使用者可以透過Email、密碼登入，亦可使用第三方應用程式Facebook登入，若是密碼不正確，或是帳號不存在，會跳出提示訊息。

● 使用者註冊：使用者需輸入名字、帳號、密碼，並重複輸入密碼確認密碼正確，名字為非必填其他為必填，若Email已註冊、兩次輸入密碼不一致、必填欄位未填，皆會跳出提示訊息。

● 查看所有消費紀錄，包含名稱、日期、類別與金額

● 編輯消費紀錄 (一次只能編輯一筆)

● 刪除消費紀錄 (一次只能編輯一筆)

## 使用說明
1. 請先確認有安裝 node.js 與 npm

2. 將專案 clone 到本地

3. 在本地開啟之後，透過終端機進入資料夾，輸入：
```
npm install
```
安裝完畢後，將種子資料匯入mongodb中，輸入以下：
```
npm run seed
```
若終端機顯示 category seeds done! 與 record and user seeds done! 即代表成功匯入種子資料，

完成後，即可接著執行主程式，輸入以下：
```
npm run dev
```
若看見此二行訊息 Express is listening on http://localhost:3000 與 mongodb connected! 則代表順利運行，打開瀏覽器進入到以下網址：
```
http://localhost:3000
```
若欲暫停使用
```
ctrl + c
```

## 開發工具
● Node.js 14.16.0

● Express 4.16.4

● Express-Handlebars 3.1.0

● Bootstrap 5.2.3

● Font-awesome 6.3.0

● MongoDB

● mongoose 5.9.7

● bcryptjs 2.4.3

● connect-flash 0.1.1

● express-session 1.17.1

● passport 0.4.1

● passport-facebook 3.0.0

● passport-local 1.0.0

● dotenv 8.6.0
