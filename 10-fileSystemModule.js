//const fs = require(`fs`);
const { readFileSync, writeFileSync, read } = require(`fs`);

console.log(`start`);
//reading from a file
const firstFile = readFileSync("./content/first.txt", `utf8`);
const secondFile = readFileSync("./content/second.txt", `utf8`);

console.log(firstFile, ``, secondFile);

//write to a file
writeFileSync(
  `./content/newFileCreated.txt`,
  `New File Created From NodeJs , first txt file ${firstFile} , second txt file ${secondFile}`,
  { flag: `a` } // to append to file
);

const readCreatedFile = readFileSync(`./content/newFileCreated.txt`, "utf8");
//console.log(readCreatedFile);

console.log(`end`);
