const database = {
    client: 'mysql2',
    "connectTimeout": 20000,
    "acquireTimeout": 20000,
    connection: {
        host: 'adminpanel--deploy.herokuapp.com',
        user: 'root',
        password: '1234',
        database: 'admin_panel',
       
    }
}

module.exports = database