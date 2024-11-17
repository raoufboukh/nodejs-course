const http = require('node:http');
const fs = require("node:fs");

const html = fs.readFileSync("./views/index.html",'utf8');
const css = fs.readFileSync("./views/style.css",'utf8');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write(html);
    }else if(req.url === '/about'){
        res.write("About Page");
    }else if (req.url === '/style.css') {
        res.write(css);
    }else{
        res.statusCode = 404;
        res.write("Not Found");
    }
    res.end();
});


server.listen(3001,()=>{
    console.log('Server is running on port 3001');
})