const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url == ("/")){
        res.write("I Am Happy To Learn Full Stack Web Development From PW Skills!");
    } 
    res.end()
})
server.listen(5003)

console.log("The http server is running!");