"use strict";

// USE FULL GLOBALS
//__dirname
//__filename
// require
// module
// process

console.log(`Dir Name :`, __dirname);
console.log(`File Name :`, __filename);

const functionEx = () => {
  console.log(`Hello World!`);
};

console.log(require);
setInterval(functionEx, 1000);
