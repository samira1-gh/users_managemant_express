const userModel = require('../models/user')

 getUsersByDepartementId
const getUsersByDepId = (req,res,departement) => {
   userModel.findAll({
        where: {
            'DepartementId' : departement.id
        }
    }).then(users => {
        res.render('users',{departement,users})
    })
}

const updateUsers = (req,res,callback) => {
    (async () => {
        await userModel.update({ DepartementId: 'e93f78e1-7213-4d46-be66-c4de8c216a5a' }, {
            where: {
                DepartementId: req.params.id
            }
        });
        callback()
    })();
};
// addUserToDepartement
const addUserToDepar = (req,res) => {
    (async () => {
        await userModel.create({ user_name: req.body.username , user_email: req.body.email, user_age: req.body.age,});
        res.redirect('/departement/'+ req.params.id +'/users');
    })();
};

const getUserToUpdate = (req,res) => {
   userModel.findByPk(req.params.userId).then(user => {
        res.render('update-user', {user, DepartementId: req.params.id});
    })
};

const updateUser = (req,res) => {
    (async () => {
        await userModel.update({ user_name: req.body.username, user_email: req.body.email, user_age: req.body.age }, {
            where: {
              id: req.params.userId
            }
          });
        res.redirect('/departement/' + req.params.id + '/users');
    })();
};

const getUserToDelete = (req,res) => {
    UserModel.findByPk(req.params.userId).then(user => {
        res.render('delete-user', {UserId: req.params.userId, DepartementId: req.params.id});
    })
};

const deleteUser = (req,res) => {
    (async () => {
        await userModel.destroy({
            where: {
            id: req.params.userId
            }
        });
        res.redirect('/departement/' + req.params.id + '/users');
    })();
};

module.exports = {
    getUsersByDepId,
    updateUsers,
    getUserToUpdate,
    getUserToDelete,
    addUserToDepar,
    updateUser,
    deleteUser
}