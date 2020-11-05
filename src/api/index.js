const http = require("http");
const express = require("express");
const clientsRoute = require("./routes/clientsRoute");

const hostname = "127.0.0.1";
const port = 3000;

const app = express();
app.set("port",port);
app.set(express.json());

app.use("/api",clientsRoute);

app.use((request,response,next) => {
    response.status(404).send('404 - Request not Found!');
});

const server = http.createServer(app);

server.listen(port,hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}/`);
});