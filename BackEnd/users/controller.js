const md5 = require('md5');
const User = require('./user');


async function addUser(req, res) {
  const email = req.body.email;
  const exist_user = await User.findAll(
    {  where: {
          email: email
        } } 
      );
  if(exist_user.length == 0){
  let user = req.body;
  user.password = md5(req.body.password);
  res.send({ message: 'El usuario fue creado con éxito.', user:  await User.create(user)});
  }else{
  res.send({ message: 'Email en uso.' })
  }
}
  

async function deleteUser(req, res) {
  await User.destroy({where: {id:req.params.id}})
  res.send({ message: 'Se ha eliminado exitosamente', user: await User.findAll() });
};

async function getUsers(req, res) {
  res.send(await User.findAll());
}


async function logUser(req, res) {
  const email = req.body.email;
  const password = md5(req.body.password);

  const exist_user = await User.findAll(
  {  where: {
        email: email
      } } 
    );
  if (exist_user.length > 0) {
    if (password == exist_user[0].password) {
        req.session.user = true;
        res.send({ message: "Logeado correctamente." });
      } else {
        res.send({ message: "Usuario o contraseña erroneos." });
      }   
    } else {
      res.send({ message: "El usuario no existe." });
    }
}
 


async function checkUser(req, res) {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
}




module.exports = {
  addUser,
  deleteUser,
  getUsers,
  logUser,
  checkUser
}
