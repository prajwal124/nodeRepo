const http = require(`http`);

const server = http.createServer((req, res) => {
  if (req.url === `/`) {
    res.end(`Welcome to our Home Page!`);
  }

  if (req.url === `/about`) {
    res.end(`Welcome to our About Page!`);
  }
  res.end(`<h1>Oops Page not found!</h1>
  <a href="/">back to home page</a>`);
});

server.listen(5000);
