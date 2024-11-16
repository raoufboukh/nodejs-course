const http = require('node:http');

const server = http.createServer((req,res) => {
    console.log(req.url);
    if(req.url === '/'){
        res.end("Home Page");
    }else if(req.url === '/about'){
        res.end("About Page");
    }else{
        res.end("Not Found");
    }
});


server.listen(3001,()=>{
    console.log('Server is running on port 3001');
});