const database = {
    client: 'mysql2',
    ssl: { rejectUnauthorized: false },
    connection: {
        host: 'adminpanel--deploy.herokuapp.com',
        user: 'root',
        password: '1234',
        database: 'admin_panel',
        
    }
}

module.exports = database