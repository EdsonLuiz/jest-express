const TodoModel = require('../model/todo.model')

exports.createTodo = async (request, response, next ) => {
  const createdModel = await TodoModel.create(request.body)
  return response.status(201).json(createdModel)
}