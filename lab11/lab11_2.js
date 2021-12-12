/*
Question2
Create a web server that's going to send a response of big image (bigger then 3MB) 
to any client that sends a request to your specified server:port. 
Use the best way for performance. 
(Try to solve this in many different ways and inspect the loading time in the browser and send many requests to see the performance differences)
*/

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'image/jpeg');
    let image = fs.readFileSync('./FIFAWorldCup.jpg')
    res.end(image);
});

server.listen(3000);


// # solution 1
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer();

// server.on('request', function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'image/jpeg' });
//     let image = fs.readFileSync('./FIFAWorldCup.jpg');
//     res.end(image, 'binary');
// });

// server.listen(3000);

// // # solution 2
// const fs = require('fs');
// const server = require('http').createServer();

// server.on('request', (request, response) => {
//     fs.readFile('./FIFAWorldCup.jpg', (err, data) => {
//     if (err) throw err;
//     response.end(data);
//     });
// });

// server.listen(8000);

// # solution 3
// const fs = require('fs');
// const server = require('http').createServer();

// server.on('request', (req, res) => {
//     fs.createReadStream("./FIFAWorldCup.jpg").pipe(res);
// });

// server.listen(9000);

// # solution 4
// require('http').createServer((req, res) => {
//     const img = require('fs').createReadStream('./FIFAWorldCup.jpg');
//     img.pipe(res);
// }).listen(9090, () => console.log("listening to 9090"));
