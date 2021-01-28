const TodoController = require('../../src/controllers/todo.controller')
const TodoModel = require('../../src/model/todo.model')
const httpmocks = require('node-mocks-http')

const newTodo = require('../mock-data/new-todo.json')

TodoModel.create = jest.fn();
let request, response, next;


beforeEach(() => {
  
  request = httpmocks.createRequest()
  response = httpmocks.createResponse()
  next = null
})

describe('TodoController', () => {
    beforeEach(() => {
      request.body = newTodo
    })

    it('should have a createTodo function', () => {
      expect(typeof TodoController.createTodo).toBe('function')
    })
    it('should call TodoModel.create', () => {
      TodoController.createTodo(request, response, next);
      expect(TodoModel.create).toBeCalledWith(newTodo)
    })
    it('should return 201 response code', async () => {
      await TodoController.createTodo(request, response, next)
      expect(response.statusCode).toBe(201)
      expect(response._isEndCalled()).toBeTruthy()
    })
    it('should return json body in response', async () => {
      TodoModel.create.mockReturnValue(newTodo)
      await TodoController.createTodo(request, response, next)
      expect(response._getJSONData()).toStrictEqual(newTodo)
    })
})
