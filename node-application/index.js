const http = require("http");
const server = http.createServer((req, res) => {
    res.end("Hello World !!!")
})

server.listen(8000, (error) => {
    if (!error) {
        console.log("Press ctrl + c to exit")
    }
})

