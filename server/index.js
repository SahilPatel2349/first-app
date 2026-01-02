const path = require('path')
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

// Mock data
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
]

const products = [
  { id: 101, name: 'Red T-Shirt', price: 19.99 },
  { id: 102, name: 'Blue Jeans', price: 49.99 }
]

const stats = { visitors: 1234, uptime: '48h' }

app.get('/api/users', (req, res) => {
  res.json({ ok: true, data: users })
})

app.get('/api/products', (req, res) => {
  res.json({ ok: true, data: products })
})

app.get('/api/stats', (req, res) => {
  res.json({ ok: true, data: stats })
})

app.get('/api/echo', (req, res) => {
  res.json({ ok: true, query: req.query })
})

// Serve static files from dist in production / start
app.use(express.static(path.join(__dirname, '..', 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
})

app.listen(PORT, () => console.log(`BFF listening http://localhost:${PORT}`))
