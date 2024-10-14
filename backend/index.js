const express = require('express')
const app = express()
const port = 3001

const project_model = require('./projectModel')

app.use(express.json())

app.get('/api/', (req, res) => {
  project_model.getProjects()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})