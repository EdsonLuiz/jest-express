const TodoModel = require('../model/todo.model')

exports.createTodo = (request, response, next ) => {
  const createdModel = TodoModel.create(request.body)
  return response.status(201).json(createdModel)
}