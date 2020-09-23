const express = require('express')
const bodyParser = require('body-parser')
const port = process.argv[2] || 3000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const itemStore = [
  {
    name: 'apple`',
  },
  {
    name: 'xiaomi',
  },
  {
    name: 'huawei',
  },
]

app.get('/item', (req, res) => {
  res.json(itemStore)
})

app.get('/item/:id', (req, res) => {
  res.json(itemStore[req.params.id])
})

app.post('/item', (req, res) => {
  itemStore.push(req.body)
  res.json(req.body)
})

app.put('/item/:id', (req, res) => {
  itemStore[req.params.id] = req.body
  res.json(req.body)
})

app.delete('/item/:id', (req, res) => {
  const item = itemStore.splice(req.params.id, 1)
  res.json(item)
})

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})
