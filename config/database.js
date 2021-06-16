const database = {
    client: 'mysql2',
    connection: {
        host: 'adminpanel--deploy.herokuapp.com',
        user: 'root',
        password: '1234',
        database: 'admin_panel',
        "connectTimeout": 20000
    }
}

module.exports = database