function addProduct() {
    return (req, res) => {
      console.log(req.body);
      let task = req.body;
      task.id = maxExistingId + 1;
      tasks.push(task);
      res.send({ message: 'La tarea se ha agregado con éxito', task: task });
    };
  }

function deleteTask() {
    return (req, res) => {
      tasks = tasks.filter(task => task.id != req.params.id);
      res.send({ message: 'Se ha eliminado exitosamente', tasks: tasks });
    };
  }

function getTask() {
    return (req, res) => {
      res.send(tasks);
    };
  }

function getTaskById() {
    return (req, res) => {
      res.send(getById(req));
    };
  }

  let cart = [ ]
