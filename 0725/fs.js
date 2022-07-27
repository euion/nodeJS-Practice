const fs = require("node:fs");

const content = fs.readFileSync("readme.txt");

console.log(content);
