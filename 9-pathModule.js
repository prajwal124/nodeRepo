const path = require(`path`);

// System paths
const filePath = path.join(`content`, "subFolder", `test.txt`);
console.log(filePath);

//prints test.txt
const base = path.basename(filePath);
console.log(base);

//absolute path
const absolute = path.resolve(__dirname, `content`, "subFolder", `test.txt`);
console.log(absolute);

console.log(__dirname);
