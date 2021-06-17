try{
const database = {
    client: 'mysql2',
    connection: {
        host: 'adminpanel--deploy.herokuapp.com',
        user: 'root',
        password: '1234',
        database: 'admin_panel'
    }
}
}
catch(e){
    console.log(e)
}
module.exports = database