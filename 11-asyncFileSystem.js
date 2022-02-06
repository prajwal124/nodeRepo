//const fs = require(`fs`);
const { readFile, writeFile } = require(`fs`);

console.log(`start`);
//reading from a file and writing, async function must have a callback function as parameter
readFile(`./content/first.txt`, `utf8`, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  const first = result;
  readFile(`./content/second.txt`, `utf8`, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
    const second = result;
    writeFile(
      `content/restultOnAsync.txt`,
      `New File Created From NodeJs , first txt file ${first} , second txt file ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        console.log(`Done with function`);
      }
    );
  });
});

console.log(`End`);
