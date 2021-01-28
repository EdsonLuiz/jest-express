const mongoose = require('mongoose')

async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zbret.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
      
    )
  } catch (error) {
    console.log(`Erro when try to connect to mongo`)
    console.log(err)
  }
}

module.exports = {connect}