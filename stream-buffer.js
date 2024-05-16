const http = require("http");
const fs = require("fs");

// creating a server using row node.js
// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on("request", (req, res) => {
  console.log(req.url === "/read-file" && req.method === "GET");

  // Streaming file reading
  const readableStream = fs.createReadStream(__dirname + "/texts/read.txt");

  readableStream.on("data", (buffer) => {
    res.statusCode = 200;
    res.write(buffer);
  });

  readableStream.on("end", () => {
    res.statusCode = 200;
    res.end("The streming is over!");
  });

  readableStream.on("error", (error) => {
    console.log(error);
    res.statusCode = 500;
    res.end("Something went Wrong!");
  });
});

server.listen(5000, () => {
  console.log(`Server is listening on port 5000`);
});
