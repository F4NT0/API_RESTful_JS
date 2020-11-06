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

exports.findAll = (request,response,next) => {
    let limit = parseInt(request.query.limit || 0);
    let page = parseInt(request.query.page || 0);
    
    if(!Number.isInteger(limit) || !Number.isInteger(page)){
        response.status(400).send("limit or page are not Numbers!");
    }

    const MAX_PAGE_ITENS = 10;

    limit = limit > MAX_PAGE_ITENS || limit <= 0 ? MAX_PAGE_ITENS : limit;
    page = page <= 0 ? 0 : page * limit;

    Clients.findAll({limit: limit, offset: page}).then(clients => {
        response.send(clients);
    }).catch(error => next(error));
    
};

exports.create = (request,response,next) => {
    const id = request.body.id;
    const name = request.body.name;
    const password = request.body.password;
    const access = request.body.access;

    Clients.create({
        id: id,
        name: name,
        password: password,
        access: access,
    }).then(() => {
        response.status(201).send();
    }).catch(error => next(error));
};

exports.update = (request,response,next) => {
    const id = request.params.id;
    
    const name = request.body.name;
    const password = request.body.password;
    const access = request.body.access;

    Clients.findById(id).then(client => {
        if(client){
            Clients.update(
                {
                    name: name,
                    password: password,
                    access: access,
                },
                {
                    where: {id: id}
                }
            ).then(() => {
                response.status(200).send(`Client with ID ${id} Updated!`);
            }).catch(error => next(error));
        }else{
            response.status(404).send(`Client with ID ${id} not Found!`);
        }
    }).catch(error => next(error));
};

exports.delete = (request,response,next) => {
    const id = request.params.id;
    
    Clients.findById(id).then(client => {
        if(client){
            Clients.destroy({
                where: {id: id}
            }).then(() => {
                response.status(200).send(`Client with ID ${id} Deleted!`);
            }).catch(error => next(error));
        }else{
            response.status(404).send(`Client with ID ${id} not Found!`);
        }
    }).catch(error => next(error));
};