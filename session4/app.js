const express = require('express');
const morgan = require('morgan');

const app = express();
// app.use(express.static('./views'));
app.use((req, res , next) => {
    console.log("Method:",req.method, "Url:",req.url);
    next();
})

app.use(morgan('dev'));

app.get('/', (req,res)=> {
    res.send("Hello Express")
})
app.get('/products', (req,res)=> {
    res.send([
        {id:1,name:'product1'},
        {id:2,name:'product2'},
    ])
})
app.listen(3001,()=> {
    console.log('Server is running on port 3001');
})