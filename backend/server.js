// //create express app
// const exp = require("express");
// const app = exp();
// const path = require("path");
// require("dotenv").config();
// //add body parser middleware
// app.use(exp.json());
// //place react build in http web server
// app.use(exp.static(path.join(__dirname, '../frontend/build')));
// var cors = require('cors')

// app.use(cors())// Use this after the variable declaration

// const mongoClient = require("mongodb").MongoClient;

// //connect tp mongodb server
// mongoClient
//   .connect(process.env.DB_URL)
//   .then((client) => {
//     //get database object
//     const blogDBobj = client.db("vnr");
//     //create collection objects
//     const usersCollection = blogDBobj.collection("users");
//     const usersBalance=blogDBobj.collection("usersbalance");
//     const usersTransfer=blogDBobj.collection("userstransfer");
//     //share collection objs with APIs
//     app.set("usersCollection", usersCollection);
//     app.set("usersBalance", usersBalance)
//     app.set("usersTransfer",usersTransfer)
//     console.log("DB connection success");
//   })
//   .catch((err) => {
//     console.log("Err in DB connect", err);
//   });

// //import apis
// const userApp = require("./APIs/user-api");

// //handover req to specific route based on starting of path
// app.use("/user-api", userApp);

// //deals with page refresh
// app.use((req,res,next)=>{
//   res.sendFile(path.join(__dirname,'../frontend/build/index.html'))
// })
// //error handling middeware
// app.use((err, req, res, next) => {
//   res.send({ status: "error", message: err.message });
// });

// //get port number from env
// const port = process.env.PORT || 4000;

// //assign port number to http server
// app.listen(port, () => console.log(`http server on port ${port}`));

const exp=require("express")
const app=exp()
const path = require("path")
 app.use(exp.json())
 app.use(exp.static(path.join(__dirname,'..ovt/build')));

 const mongoClient=require("mongodb").MongoClient;

 mongoClient.connect('mongodb://127.0.0.1:27017').
 then((client)=>{
    const DBobj=client.db("ovt")
    const usersCollection=DBobj.collection("users")

    app.set("usersCollection",usersCollection)
    console.log("DB connection success")
 })
 .catch((error)=>{
    console.log("Err in Db Connect",error)
 })

 const port = 4000;

 app.listen(port,()=>console.log("http server port on",port))