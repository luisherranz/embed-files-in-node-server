const code = require("./build/server");
const http = require("http");
const server = http.createServer(code);
server.listen(3000);
console.log("Listening on port 3000");
