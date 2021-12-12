/*
Question1
Create a simple Node script that converts 'www.miu.edu' domain name to the equivalent IP address. 
(Search and learn 'dns' module, resolve4) - For this exercise, you need to look up Node.js API by yourself

*/

const dns = require('dns');

// resolve www.miu.edu
dns.resolve4('www.miu.edu', (err, addr) => {
    if (err) throw err;
    console.log(`www.miu.edu IP addr: ${addr}`);
});

// resolve sekayasin.me
dns.resolve4('sekayasin.me', (err, addr) => {
    if (err) throw err;
    console.log(`sekayasin.me IP addr: ${addr}`);
});

