const {MongoClient} = require('mongodb');

const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

const main = async () => {
    // connect to database
    await client.connect();

    console.log("Connected successfully to server");

    // choose database to interact with
    const db = client.db("localdb");
    // if database doesn't exist it will create it

    // choose collection to interact with
    const collection = db.collection("courses");
    // if collection doesn't exist it will create it

    // collection.insertOne({
    //     title: "react course",
    //     price: 2000,
    // });

    //get query
    //get all courses
    const data = await collection.find().toArray();

    console.log("data", data);
};

main();