const PORT = process.env.PORT || 8000;
const express = require('express'); 
const app = express();
const {mongoClient, MongoClient} = require('mongodb');
const {v4: uuidv4} = require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.URI
app.use(express.json());
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect(url,connectionParams)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


app.use(cors());


app.get('/',(req,res)=>{
    res.json('hello this is raj');
})

//register

app.post('/register',async(req,res)=>{
    const client = new MongoClient(url);
    const  {email,password} = req.body;

    const generatedId = uuidv4();
    const hashedPassword = await bcrypt.hash(password,10);

    try{
          await client.connect();
          const database = client.db('appData');
          const users = database.collection('registeredUsers');

          const existingUser = await users.findOne({email});

          if(existingUser){
              return res.status(409).send('User already exists');
          }
          const sanitizedEmail = email.toLowerCase();

          const data = {
              user_id : generatedId,
              email:sanitizedEmail,
              hashedPassword:hashedPassword
          }
          const insertedUser = await users.insertOne(data);

          const token = jwt.sign(insertedUser,sanitizedEmail,{
            expiresIn:60*24
          })

          res.status(201).json({token,userId:generatedId});
    }catch(err){
        console.log(err);
    }finally{
        await client.close();
    }

})


app.listen(PORT,()=> {
    console.log('server is running on port '  + PORT);
})