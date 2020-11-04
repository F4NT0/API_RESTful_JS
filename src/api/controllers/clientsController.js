const Clients = require("../models/clientsModel");

exports.findOne = (request,response,next) => {
    const id = request.params.id;

    Clients.findById(id).then(client => {
        if(client){
            response.send(client);
        }else{
            response.status(404).send(`Cliente with ID ${id} not Found!`);
        }
    }).catch(error => next(error));
};


