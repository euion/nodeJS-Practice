const fs = require("fs").promises;

function cb(err, result) {}
const callback = function (err, result) {};
// fs.readFile("readme.txt", { encoding: "utf-8" }, () => {
//   if (err) return new Error("파일을 읽는 도중에 에러가 발생했습니다.");
//   console.log(result);
// });
fs.readFile("./readme.txt", { encoding: "utf-8" })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.error("reject", reject); // new Error('파일을 읽는 중 에러가 발생했습니다') in English
  });
