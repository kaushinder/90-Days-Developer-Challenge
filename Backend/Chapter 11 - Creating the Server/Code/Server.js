//http server 
const http = require("node:http");
const port = 7777; //port number to listen on
const server = http.createServer(function (req, res) {
    if (req.url === "/getSecretData") {
        res.end("You are a human and the the secret so chill")
    }
    res.end("server Created")
})

server.listen(port, () => {
    console.log("Server running on port " + port)
}) 