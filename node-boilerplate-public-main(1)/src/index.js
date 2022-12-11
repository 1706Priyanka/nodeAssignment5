const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1> DOMINOS</h1>");
    res.end();
  } else if (req.url == "/welcome") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1> Welcome to Dominos!</h1>");
    res.end();
  } else if (req.url == "/contact") {
    res.end(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com",
      })
    );
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1> PAGE NOT FOUND</h1>");
    res.end();
  }
});

server.listen(8081, () => console.log("the server is up at, port 8081"));
