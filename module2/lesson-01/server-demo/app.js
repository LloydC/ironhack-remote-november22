const port = 3000; // gateway for incoming requests
const http = require('http'); // loading the http package (native to Node)

const server = http.createServer((request, response) => {
    console.log(`Someone has requested ${request.url}`);
   
    if (request.url === '/') {
      response.write('Welcome to the Homepage');
      response.end();
    }
    else if (request.url === '/about') {
        response.write('Welcome to the About page');
        response.end();
      }
    else if (request.url === '/contact') {
        response.write('Welcome to the Contact page');
        response.end();
    }
    else {
        response.statusCode = 404;
        response.write('404 Page');
        response.end();
      }
  });// creating a server

server.listen(port, ()=> console.log(`My server is running on port ${port}`)); // allow incoming requests to reach my server from port 3000