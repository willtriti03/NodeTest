
const express = require("express");
//express 사용
const app = express(); 

/**
 * @path http://localhost:3000/ 경로
 */
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/test", (req, res) => {
    res.send("Hello World2");
});
  
// http listen port 생성 서버 실행
app.listen(8080, () => console.log("개발이 취미인 남자 :)"));
