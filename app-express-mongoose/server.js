const express =  require('express');
const mongoose = require('mongoose'); //t5alik tconnecti al bd 
require('dotenv').config();
const UserRoutes = require('./routes/user.routes')
const AuthRoutes = require('./routes/auth.routes')
const app = express();

app.use(express.json())

app.use('/users',UserRoutes)
app.use('/auth',AuthRoutes)







const PORT = process.env.PORT || 3000
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connecting to Database')
}).catch(err=>{
    console.log('error connecting  to Dtatbase',err)
})



app.listen(5000,()=>{
    console.log('listening on port 5000')
})

