require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');


//setup express app
const app = express();

//middleware invoke
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

//connect to database
mongoose.connect(process.env.MONGO_URI)
.then(() => {

//listen for request  
app.listen(process.env.PORT, () => {
    console.log('now connected to the database and is listening to port', process.env.PORT);
})
})

.catch((error) => {
    console.log(error)
    console.log('connection unsuccessful')
})



