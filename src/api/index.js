const http = require("http");
const express = require("express");
const clientsRoute = require("./routes/clientsRoute");
const sequelize = require("./database/database");
const bodyParser = require("body-parser");

const app = express();
app.set(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api",clientsRoute);

app.use((request,response,next) => {
    response.status(404).send('404 - Request not Found!');
});

sequelize.sync({force: true}).then(() => {
    const port = process.env.PORT || 3000;

    app.set("port",port);
    
    const server = http.createServer(app);
    
    server.listen(port, () => {
        console.log(`Server Running at http://localhost:${port}/`);
    });
});