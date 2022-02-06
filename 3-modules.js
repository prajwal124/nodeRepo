"use strict";

const importedNames = require(`./4-names`);
const sayHi = require("./5-functionUtils");
const sayHiFunc = require(`./5-functionUtils`);
const objectsExport = require("./6-exportingObjects");
require(`./7-addNumbers`);

// console.log(importedNames);

// sayHiFunc(importedNames.name1);
// sayHiFunc(importedNames.name2);

// console.log(objectsExport.items[0]);
// console.log(objectsExport.singlePerson.name);

sayHi(`Prajwal`);
importedNames.helloWorld();
