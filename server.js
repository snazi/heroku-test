// this was taken from https://blog.logrocket.com/how-to-build-a-server-rendered-react-app-with-next-express-d5a389e7ab2f/
// once added, please replace dev and start with the ff in order to start the server
//  "dev": "node server.js",
// "start": "NODE_ENV=production node server.js"
const express = require('express')
const next = require('next')
// routes was taken from the next-routes readme on server.js section
const routes = require('./routes')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
//changed app into routes
const handle = routes.getRequestHandler(app)
    
app.prepare()
.then(() => {
  const server = express()

 
    // code below handles all the routes. so all other route handling should be done beforehand
  server.get('*', (req, res) => {

    // this console log should show up for all the requests done on the URL "*"

    return handle(req, res)
  })
    // added .use(handle) in order for routes to be attached to the server
  server.use(handle).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})