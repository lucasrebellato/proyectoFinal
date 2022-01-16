const md5 = require('md5');
const User = require('./user');
const nodemailer = require('nodemailer');


async function addUser(req, res) {
  const email = req.body.email;
  const exist_user = await User.findOne(
    {  where: {
          email: email
        } } 
      );
  if(exist_user.length == 0){
  let user = req.body;
  user.password = md5(req.body.password);
  res.status(200).send({ message: 'El usuario fue creado con éxito.', user:  await User.create(user)});
  }else{
  res.status(410).send({ message: 'Email en uso.' })
  }
}
  

async function deleteUser(req, res) {
  await User.destroy({where: {id:req.params.id}})
  res.status(200).send({ message: 'Se ha eliminado exitosamente', user: await User.findAll() });
};

async function getUsers(req, res) {
  res.send(await User.findAll());
}


async function Mail(req, res) {
    console.log("llegue hasta back");
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      post: 587,
      secure: false,
      auth:{
        user:"letha.macejkovic96@ethereal.email",
        pass:"DJ1ZhprG4as3MaUdcB"
      }
    })

const mailOptions = {
  from: req.body.email,
  to : "origenEcoAlmacen@gmail.com",
  subject: req.body.name +" ha hecho un comentario",
  text: req.body.message
}

transporter.sendMail(mailOptions, (error, info) => {
  if(error){
    res.status(500).send(error.message);
  }else{
    console.log("mail enviado");
    res.status(200).jsonp(req.body);
  }
})

}

async function logUser(req, res) {
  const email = req.body.email;
  const password = md5(req.body.password);
  const exist_user = await User.findOne(
  {  where: {
        email: email
      } } 
    );
  if (exist_user != null) {
    if (password == exist_user.password) {
        res.status(200).send({ message: "Logeado correctamente." });
      } else {
        res.status(410).send({ message: "Usuario o contraseña erroneos." });
      }   
    } else {
      res.status(415).send({ message: "El usuario no existe." });
    }
}
 



module.exports = {
  addUser,
  deleteUser,
  getUsers,
  logUser,
  Mail
}
