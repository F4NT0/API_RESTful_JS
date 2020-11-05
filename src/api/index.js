const http = require("http");
const express = require("express");
const clientsRoute = require("./routes/clientsRoute");
const sequelize = require("./database/database");

const app = express();
app.set(express.json());

app.use("/api",clientsRoute);

app.use((request,response,next) => {
    response.status(404).send('404 - Request not Found!');
});

sequelize.sync({force: true}).then(() => {
    const port = process.env.PORT || 3000;

    app.set("port",port);
    
    const server = http.createServer(app);
    
    server.listen(port);
});