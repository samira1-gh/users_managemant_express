const DepModel = require('../models/dep')

const getDepartements = (req,res) => {
    DepModel.findAll().then(departements => {
        res.render('departement',{departements});
    })
};
// getUsersByDepartementId
const getUserDeparID = (req,res) => {
   DepModel.findByPk(req.params.id).then(departement => {
        Users.getUserDeparID(req,res,departement);
    })
};
// getDepartementForUpdate
const updatDepartment = (req,res) => {
   DepModel.findByPk(req.params.id).then(departement => {
        res.render('update-dep', {departement});
    })
};
//  getDepartementForDelete
const DeleteDepart = (req,res) => {
    DepModel.findByPk(req.params.id).then(departement => {
        res.render('delete-dep', {departement});
    })
};


const createDepartement = async(req, res) => {
//       const department = await new DepModel(req.body);
//   department.save().then((result) => {
//     res.redirect("/").catch((err) => {
//       console.log(err);
//       res.status(404).render("404")
//     });
//   });
    console.log('samira mo3a9a')
   
};


const updateDepartement = (req,res) => {
    (async () => {
        await DepModel.update({ name: req.body.name }, {
            where: {
              id: req.params.id
            }
          });
        res.redirect('/');
    })();
};

const deleteDepartement = (req,res) => {
    (async () => {
        await Users.updateUsersToPending(req,res,() => {
            (async () => {
                await DepModel.destroy({
                    where: {
                    id: req.params.id
                    }
                });
                res.redirect('/');
            })();
        })
    })();
};


module.exports = {
    getDepartements,
    getUserDeparID,
    updatDepartment,
    DeleteDepart,
    createDepartement,
    updateDepartement,
    deleteDepartement
}
