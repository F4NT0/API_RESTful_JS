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
    const bodyName = request.body.name;
    const bodyPassword = request.body.password;
    const bodyAccess = request.body.access;
    const bodyCreatedAt = request.body.createdAt;
    const bodyUpdateAt = request.body.updateAt;
    
    Clients.create({
        name: bodyName,
        password: bodyPassword,
        access: bodyAccess,
        createdAt: bodyCreatedAt,
        updateAt: bodyUpdateAt
    }).then(() => {
        response.status(201).send();
    }).catch(error => next(error))
};

exports.update = (request,response,next) => {
    const id = request.params.id;
    
    const bodyName = request.body.name;
    const bodyPassword = request.body.password;
    const bodyAccess = request.body.access;
    const bodyCreatedAt = request.body.createdAt;
    const bodyUpdateAt = request.body.updateAt;

    Clients.findById(id).then(client => {
        if(client){
            Clients.update(
                {
                    name: bodyName,
                    password: bodyPassword,
                    access: bodyAccess,
                    createdAt: bodyCreatedAt,
                    updateAt: bodyUpdateAt
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
