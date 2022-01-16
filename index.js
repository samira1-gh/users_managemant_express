

const express = require('express')
const path = require('path')
const app = express()

const {sequelize} = require('./src/config/db');

const UserModel = require('./src/models/user');
const DepartementModel = require('./src/models/dep');

const Departements = require('./src/controllers/Departements');
const PORT = 3000





app.set('views' , path.join(__dirname,'src', 'views'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({extend: true }))
app.use(express.json())





app.get('/', Departements.getAllDepartement);



DepartementModel.hasMany(UserModel);
UserModel.belongsTo(DepartementModel);


sequelize.sync().then(result => {
    app.listen(
        PORT,
        () => {
            console.log(`server listening at http://localhost:${PORT}`);
        }
    );

    // // adding an instance to the database
    // const user = UserModel.create({user_name: 'youssef' , user_email: 'lkdankznd@gmail.com' , user_age: 32, DepartementId: '0150d9f8-2a32-457d-b3e9-ee28d8bd1f20'});
}).catch(err => {
    console.log(err);
})

// async function main() {
//     await sequelize.sync({force:false})
// }
// async function main() {
//     await sequilize
// }