const request = require('supertest')

const ENDPOINT_URL = "/todos/"
const APP = require('../../src/index')
const newTodo = require('../mock-data/new-todo.json')

describe("/todos/", () => {
  it(`POST ${ENDPOINT_URL}`, async () => {
    const response = await request(APP)
      .post(ENDPOINT_URL)
      .send(newTodo)

      expect(response.statusCode).toBe(201)
      expect(response.body.title).toBe(newTodo.title)
      expect(response.body.done).toBe(newTodo.done)
  })
})



