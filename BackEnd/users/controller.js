const md5 = require('md5');
const User = require('./user');


async function addUser(req, res) {
  console.log('LLEGUE HASTA ACA')
  let user = req.body;
  user.password = md5(req.body.password);
  res.send({ message: 'El usuario fue creado con éxito', user:  await User.create(user)});
  }
  

async function deleteUser(req, res) {
  await User.destroy({where: {id:req.params.id}})
  res.send({ message: 'Se ha eliminado exitosamente', user: await User.findAll() });
};

async function getUsers(req, res) {
  res.send(await User.findAll());
}


async function logUsers(req, res) {
  res.send(await User.findAll());
}



module.exports = {
  addUser,
  deleteUser,
  getUsers,
  logUsers
}
