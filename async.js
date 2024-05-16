const { error } = require("console");
const fs = require("fs");

// Reading text asynchronously

fs.readFile("texts/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error Reading Text");
  }
  console.log(data);

  // Writing text asynchronously
  fs.writeFile("./texts/read2.txt", data, "utf-8", (err) => {
    if (err) {
      throw Error("Error Writing Data");
    }
  });
});
