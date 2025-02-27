// const express = require('express')
import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/accounts', function (req, res) {
  res.send('Aquí se listarán las cuentas')
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
