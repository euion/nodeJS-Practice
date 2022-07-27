const path = require("node:path");

const fileName = __filename;

const fileInfo = {
  sep: path.sep,
  basename: path.basename(fileName),
  delimiter: path.delimiter,
  ext: path.extname(fileName),
  dir: path.dirname(fileName),
  paths: path.parse(fileName),
  normal_path: path.normalize(fileName),
  absolute: path.isAbsolute(fileName),
  relative: path.relative("/", process.cwd()),
};

console.log(fileInfo);

const newFileName = path.join("bin", "www");
console.log("newFileName", typeof newFileName, newFileName);

const newPathObject = path.parse(newFileName);
console.log("newPathObject", typeof newPathObject, newPathObject);

const absolute1 = path.resolve("bin", "www");
const absolute2 = path.resolve(__dirname, "bin", "www");
