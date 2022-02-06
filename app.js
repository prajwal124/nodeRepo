//npm is package manager

//npm -i local dependency = only to use in a particular project

//npm -g global dependency  = to use in all project

//npm install -g <packageName> = to install a package

//package.json = manifest file stores important info about project

//npm init = step by step process
//npm init -y = everything set to default

const _ = require(`lodash`);

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
