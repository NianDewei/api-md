import jsonServer from 'json-server';

// server.js
const server = jsonServer.create()
const router = jsonServer.router('./db/db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000

server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log('Mi-Despensa API is running')
})