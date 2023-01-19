const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/') { // '/' -> Home page
    res.end('HELLO WORLD')
  }
  else if (req.url === '/about') {
    res.end('HERE IS ABOUT PAGE')
  }
  else {
    res.end(`
      <h1>OOPS!</h1>
      <p>Page wasn't found :(</p>
      <a href="/">Return home</a>
    `)
  }
})

server.listen(5000)