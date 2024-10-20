const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3001

const project_model = require('./projectModel')
const frontendLink = process.env.FRONTEND_LINK || 'http://localhost:8000'

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', frontendLink);
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

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