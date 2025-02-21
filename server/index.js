require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const App = express();
const PORT = process.env.PORT || 5000;
const url = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.knd6a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

require('./models/user');

console.log(url)

mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("error connecting to mongodb: ", error.message);
})

// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

mongoose.connection.on('connected', () => {
    console.log("Database connected successfully")
})

mongoose.connection.on('error', (err) => {
    console.log("err in connecting:", err)
})

const middleWare = (req, res, next) => {
    console.log("middleWare is executed!!")
    next()
}

App.use(express.json())
App.use(express.urlencoded({ extended: true }))
App.use(require('./routes/signup'))
App.use(require('./routes/login'))
App.use(require('./routes/myprofile'))

App.get('/', middleWare, (req, res) => {
    res.send("hello world")
})

App.get('/about', (req, res) => {
    res.send("This is about page")
})

App.use((req, res, err) => {
    console.log("A request was received, but an error occurred.", err);
});

App.listen(PORT, () => {
    console.log("server is running on the port:", PORT)
})

