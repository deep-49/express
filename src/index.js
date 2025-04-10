// const express = require('express');
// const User = require('./models/user.model.js');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const connectDB = async() => {
//   try{
//     const connectionDB = await mongoose.connect('mongodb+srv://deepika:deepika123@cluster0.a8uif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/deepika')
//     console.log("DB connected")
// }catch{
//   console.log('MongoDB connection failed');
// }
// }
// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// app.post('/user', async(req, res) => {
//   const { name, email, password } = req.body;
//   try{
//     const user = await User.create({name, email, password});
//     console.log(user)
//     return res.status(201).json({
//      "success":true,
//       "data": user,
//    "message": 'User created successfully'});
//   }catch(err){
//     res.status(400).send(err.message);
//   }
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

const http =  require('http');

const server = http.createServer((req, res) => {
  //console.log(req.url , req.method , req.headers);
  if(req.url === '/motto') {//routing based on url
    res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<head><title>Hey Tried </title></head>');
  res.write('<body><h1>hello motto</h1></body>')
  res.write('</html>')
    return res.end();
  }
  else if(req.url === '/home'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>Hey Tried </title></head>');
    res.write('<body><h1>hello we are at home</h1></body>')
    res.write('<form action="/submit" method="POST">')
    res.write('<input type="text" name="motto">') 
    res.write('<label for="gender">Male</label>')
    res.write('<input type="radio" name="gender">')
    res.write('<label for= "female" >Female</label>')
     res.write('<input type="radio" name="gender">')
    res.write('<button type="submit">Submit</button>')
    res.write('</form>')
    res.write('</html>')
    return res.end();
  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>')
  res.write('<head><title>Hey Tried </title></head>');
  res.write('<body><h1>hello</h1></body>')
  res.write('</html>')
  res.end();
 // process.exit();//stops the server
});

const PORT =3000;
server.listen(PORT ,()=>{
  console.log("Seerver running on port 3000")
})