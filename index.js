// Local Module
const { a, add } = require("./local-1");
const { a: a2, add: add2 } = require("./local-2");

console.log(add2(2, 3, 3));

// Build-in module
const path = require("path");
console.log(
  path.parse(
    "G:Programming Hero(Lavel-2)Mission-2Module-3learning-nodeindex.js"
  )
);
