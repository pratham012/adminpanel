const database = {
    client: 'mysql2',
    connection: {
        host: 'adminpanel--deploy.herokuapp.com',
        user: 'root',
        password: '1234',
        database: 'admin_panel',
        port : 3306,
        min : 0
    }
}

module.exports = database