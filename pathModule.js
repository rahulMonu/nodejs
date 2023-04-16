const path = require("path")

const strPath = './Users/Refsnes/demo_path.js';
const basePath = "/usr/home/"
const file = path.basename(strPath);

console.log("file name :",file);
console.log("file path :",path.dirname(strPath));
console.log("file extension :",path.extname(strPath));
console.log("file isAbsolute path :",path.isAbsolute(strPath));
console.log("file path after join path :",path.isAbsolute(path.join(basePath,strPath)));