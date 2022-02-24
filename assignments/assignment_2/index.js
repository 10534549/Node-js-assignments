const fs = require('fs');
const http = require('http');

const content=`<h1>Hello world</h1>
<p>I am Sravya Lavu</p>`;
fs.writeFileSync('index.html',content,err => {
    console.log(err);
});

const server = http.createServer((req,res) => {
    fs.readFile('index.html',  (err,data) => {
        res.end(data);
    });
});
server.listen(3000, () => console.log("Server is running on port 3000")); 