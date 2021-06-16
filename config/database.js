const database = {
    client: 'mysql2',
    connection: {
        host: 'adminpanel--deploy.herokuapp.com',
        user: 'root',
        password: '1234',
        database: 'admin_panel',
        min: 2,
        max: 10,
    }
}

module.exports = database