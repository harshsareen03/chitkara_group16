const http = require('http')
const server = http.createServer()

// server.on('request', (req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify({
//         data: 'hello world,'
//     }))
//     // if(req.url=='/'){
//     //     res.end()
//     // }

// })

server.on('request', (request, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'Hello World!',
    }));
});
server.listen(3000)