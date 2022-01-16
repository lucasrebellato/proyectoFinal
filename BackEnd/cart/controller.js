const Buy = require('./buy');
const User = require('../users/user')



async function createBuy(req, res) {
  const email = req.body.email;
  const user = await User.findOne(
    {  where: {
          email: email
        } } 
      );
  let buy = req.body;
  buy.email = "";
  buy.user_id = user.id;
  console.log("llegue");
  console.log(buy)
  res.status(200).send({ message: 'La compra fue creado con éxito.', buy:  await Buy.create(buy)});
  
  }

async function getBuy() {
    return (req, res) => {
      res.send(tasks);
    };
  }




  module.exports = {
    createBuy,
    getBuy
  }
  