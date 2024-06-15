const express = require("express");
const app = express();
const request = require("request");
const cors = require("cors");

app.use(cors());
app.get("/pokemon/detail", (req, res) => {
  const { nameZh } = req.query;
  console.log(nameZh);
  const url = `
  https://pokemon.fantasticmao.cn/pokemon/detail?nameZh=${encodeURIComponent(
    nameZh
  )}`;
  request(url).pipe(res);
});
app.listen(5000, () => console.log("server in run "));
