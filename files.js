const fs = require("fs");

// Reading a file text
const readText = fs.readFileSync("./texts/read.txt", "utf-8");
console.log(readText);

// Writing a text
const writtenText = fs.writeFileSync(
  "./texts/write.txt",
  readText + "This is my written Text"
);
console.log(writtenText);
