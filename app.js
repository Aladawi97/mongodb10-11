
const mongodb = require("mongodb");

const mongoClink = mongodb.MongoClient;

// const connectionURL = "mongodb//:127.0.0.1:27017"
const connectionURL =
  "mongodb+srv://yiheaaladawi1001:0796035942a@nodetest.rm5wgil.mongodb.net/?retryWrites=true&w=majority&appName=nodeTest";

const dbName = "pro-11";

mongoClink.connect(connectionURL, (error, res) => {
  if (error) {
    return console.log("error");
  }

  console.log("Successfully");
  const db = res.db(dbName);

  // //////////////////////////////////////////////////////////////////
  // insertone

  db.collection('user').insertOne({
    name : "ahmad",
    age : 26
  },(error , data)=>{
    if(error){
      console.log("error")
    }
    console.log(data.insertedId)
  })

  db.collection('user').insertOne({
    name : "yihea",
    age : 25
  },(error , data)=>{
    if(error){
      console.log("error")
    }
    console.log(data.insertedId)
  })




  // /////////////////////////////////////////////////////////////////
// insertmany
db.collection("user").insertMany(
  [
    {
      name : "yihea",
      age : 20
    },
    {
      name : "ahmad",
      age : 21
    },
    {
      name : "adel",
      age : 22
    },
    {
      name : "amer",
      age : 23
    },
    {
      name : "yara",
      age : 24
    },
    {
      name : "yihea",
      age : 27
    },
    {
      name : "ahmad",
      age : 27
    },
    {
      name : "adel",
      age : 27
    },
    {
      name : "amer",
      age : 27
    },
    {
      name : "yara",
      age : 27
    }
  ]
 ,(error, data) => {
  if(error){
    console.log("error")
  }
  console.log(data.insertedCount)
 });



  //  ////////////////////////////////////////////////////////////////
// findone

  db.collection('user').findOne({age:27} 
,(error , data) =>{
  if(error){
    console.log("error")
  }
  console.log(data)
}).



// ////////////////////////////////////////////////////////////////////
// data find


db.collection('user').find({age:27}).limit(3).toArray((error , data)=>{
  if(error){
    console.log("error")

  }
  console.log(data)
})




// ////////////////////////////////////////////////////////////////////
//  UpdateOne data


db.collection('user').updateOne({_id:mongodb.ObjectId('66b158f6c94e9b02dc44226a')} ,{
  $set: {name : "mohammed"},
  $inc :{age : 4}
})
.then((data1) => {console.log(data1.modifiedCount)})
.catch((error) =>{console.log(error)})


// ////////////////////////////////////////////////////////////////////
//  updateMany

db.collection('user').updateMany({age:24},{
  $inc : {age : 10}
})
.then((data1) => {console.log(data1.modifiedCount)})
.catch((error) =>{console.log(error)})


// ////////////////////////////////////////////////////////////////////
// deleteOne

// db.collection('user').deleteOne({_id:mongodb.ObjectId('66b158f6c94e9b02dc44226a')})
// .then((data1) =>{console.log(data1.deletedCount)})
// .catch((error) => {console.log(error)})


// ///////////////////////////////////////////////////////////////////////
//  deleteMany

db.collection('user').deleteMany({age:41})
.then((data1) =>{console.log(data1.deletedCount)})
.catch((error) => {console.log(error)})






});
