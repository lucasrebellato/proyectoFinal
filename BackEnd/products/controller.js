
/* OBTENCION DE DATOS */

function getCoffee(req, res) {
      console.log(req);
      res.send(Coffees);
  }

function getDessert(req,res) {
      res.send(Desserts);
  }

/* ADICION DE DATOS */

function addCoffee() {
    return (req, res) => {
      console.log(req.body);
      let coffee = req.body;
      coffee.id = maxExistingIdCoffee + 1;
      Coffees.push(coffee);
      res.send({ message: 'La tarea se ha agregado con éxito', coffee: coffee });
    };
}


//ADASDAD

function addDessert() {
    return (req, res) => {
      console.log(req.body);
      let dessert = req.body;
      dessert.id = maxExistingIdDessert + 1;
      Desserts.push(dessert);
      res.send({ message: 'La tarea se ha agregado con éxito', dessert: dessert });
    };
}

/* BORRADO DE DATOS */

function deleteCoffee() {
    return (req, res) => {
      Coffees = Coffees.filter(coffee => coffee.id != req.params.id);
      res.send({ message: 'Se ha eliminado exitosamente', Coffees: Coffees });
    };
  }

  function deleteDessert() {
    return (req, res) => {
      Desserts = Desserts.filter(dessert => dessert.id != req.params.id);
      res.send({ message: 'Se ha eliminado exitosamente', Desserts: Desserts });
    };
  }

/* DATOS */

let Coffees = [
    {
      "id": "c1",
      "name": "Mocha",
      "price": 120,
      "stock": 1,
      "category": "Cafe", 
      "quantity": 1			
    },
  {
      "id": "c2",
      "name": "Caramel",
      "price": 150,
      "stock": 1,
      "category": "Cafe", 
      "quantity": 1					
    },
  {
      "id": "c3",
      "name": "Latte Vanilla",
      "price": 130,
      "stock": 1,
      "category": "Cafe", 
      "quantity": 1			 			
    },
  {
      "id": "c4",
      "name": "Mocha Blanco",
      "price": 135,
      "stock": 1,
      "category": "Cafe", 
      "quantity": 1			 			
    },
  {
      "id": "c5",
      "name": "Latte",
      "price": 125,
      "stock": 1,
      "category": "Cafe", 
      "quantity": 1			 			
    },
  {
      "id": "c6",
      "name": "Latte Cinamon",
      "price": 155,
      "stock": 1,
      "category": "Cafe", 
      "quantity": 1			 			
    }
   ]

let Desserts = [
    {
        "id": "d1",
        "name": "Budin",
        "price": 100,
        "stock": 1,
        "category": "Postre", 
        "quantity": 1			 			
      },
    {
        "id": "d2",
        "name": "Medialuna",
        "price": 150,
        "stock": 1,
        "category": "Postre", 
        "quantity": 1			 			
      },
    {
        "id": "d3",
        "name": "Muffin de pasas",
        "price": 160,
        "stock": 1,
        "category": "Postre", 
        "quantity": 1			 			
      },
    {
        "id": "d4",
        "name": "Muffin de choco",
        "price": 160,
        "stock": 1,
        "category": "Postre", 
        "quantity": 1			 			
      },
    {
        "id": "d5",
        "name": "Muffin ddl",
        "price": 160,
        "stock": 1,
        "category": "Postre", 
        "quantity": 1			 			
      },
    {
        "id": "d6",
        "name": "Roll de canela",
        "price": 200,
        "stock": 1,
        "category": "Postre", 
        "quantity": 1			 			
      }
    ]


const maxExistingIdCoffee = Coffees.sort((a, b) => b.id - a.id)[0].id;
const maxExistingIdDessert = Desserts.sort((a, b) => b.id - a.id)[0].id;

module.exports = {
    addCoffee,
    addDessert,
    deleteCoffee,
    deleteDessert,
    getCoffee,
    getDessert
}
    