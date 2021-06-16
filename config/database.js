const database = {
    client: 'mysql2',
    version:"^2.2.5",
    connection: {
        host: 'adminpanel--deploy.herokuapp.com',
        user: 'root',
        password: '1234',
        database: 'admin_panel'
    }
}

module.exports = database