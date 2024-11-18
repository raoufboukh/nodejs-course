const express = require('express');

const app = express();

const router = require('./Routes/courses.routers');

const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/localdb";

mongoose.connect(url).then(() => console.log('Connected to database'));

app.use(express.json());

app.use('/api/courses',router);



app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
