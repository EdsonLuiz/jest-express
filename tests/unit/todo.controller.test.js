const TodoController = require('../../src/controllers/todo.controller')

describe('TodoController', () => {
    it('should have a createTodo function', () => {
      console.log(typeof TodoController.createTodo)
      expect(typeof TodoController.createTodo).toBe('function')
    })
})
