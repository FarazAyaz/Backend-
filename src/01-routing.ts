import http, { IncomingMessage, ServerResponse } from "node:http";
const express = require("express");
const app = express();
app.get("/", (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});


