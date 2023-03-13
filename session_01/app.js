const http = require('http')
const fs = require('fs')
const home=fs.readFileSync('index.html')
const about=fs.readFileSync('about.html')

const server = http.createServer((req, res) => {
    url = req.url
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if(url=='/'){
        res.end(home)
    }
    else if(url=='/about'){
        res.end(about)
    }
})

server.listen(3000)

