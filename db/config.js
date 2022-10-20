module.exports = {
    mariaDB: {
       client: 'mysql',
       connection: {
        host : '127.0.0.1',
        port : 3307,
        user : 'root',
        database : 'ecommerce'
       }
    },
    sqlite: {
        client: 'sqlite3',
        connection: {
            filename: './db/sqlite/chat.sqlite'
        },
        useNullAsDefault: true
    }   
}