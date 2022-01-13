const Product = require('./product');


/* OBTENCION DE DATOS */

async function getCoffee(req, res) {
    res.send(await Product.findAll(
    {  where: {
        category_id:1
      } } 
    ));
  }

async function getDessert(req,res) {
    res.send(await Product.findAll({  where: {
      category_id:2
    } } ));
  }  



/* ADICION DE DATOS */

// async function addCoffee() {
//     return (req, res) => {
//       console.log(req.body);
//       let coffee = req.body;
//       coffee.id = maxExistingIdCoffee + 1;
//       Coffees.push(coffee);
//       res.send({ message: 'La tarea se ha agregado con éxito', coffee: coffee });
//     };
// }

// async function addDessert() {
//     return (req, res) => {
//       console.log(req.body);
//       let dessert = req.body;
//       dessert.id = maxExistingIdDessert + 1;
//       Desserts.push(dessert);
//       res.send({ message: 'La tarea se ha agregado con éxito', dessert: dessert });
//     };
// }

/* BORRADO DE DATOS */

// function deleteCoffee() {
//     return (req, res) => {
//       Coffees = Coffees.filter(coffee => coffee.id != req.params.id);
//       res.send({ message: 'Se ha eliminado exitosamente', Coffees: Coffees });
//     };
//   }

//   function deleteDessert() {
//     return (req, res) => {
//       Desserts = Desserts.filter(dessert => dessert.id != req.params.id);
//       res.send({ message: 'Se ha eliminado exitosamente', Desserts: Desserts });
//     };
//   }

module.exports = {
    // addCoffee,
    // addDessert,
    // deleteCoffee,
    // deleteDessert,
    getCoffee,
    getDessert
}
    