//Course NodeJs In Arabic | 5 Request object In NodeJs
import http from"http"

const server = http.createServer((req, res) => {
    if (req.url =="/home"){
        res.statusCode = 200
        res.write("Welcome Home")
    }
    else if (req.url == "/contact"){
        res.statusCode = 200
        res.write("Welcome Contact")
    }
    else if (req.url == "/about"){
        res.statusCode = 200
        res.write("Welcome About")
    }
    else{
        res.statusCode = 404
        res.write("Eror Not Found")
    }
    res.end()
})
server.listen(5000, ()=>{
    console.log("server runnig")
})
