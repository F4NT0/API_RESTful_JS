module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'api',
            dialect: 'mysql',
            user: 'root',
            password: 'senha',            
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        }
    }
}