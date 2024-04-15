const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');


const userRoute = require('./routes/user/userRoutes');


dotenv.config();
const app = express();  
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const url = "mongodb+srv://abrardar988651:Abrardar123@cluster0.v7o1wev.mongodb.net/"

app.use("/api/user", userRoute);

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(8800, () => {
        console.log('Backend server is running on port 8800');
    });
}).catch((error) => {
    console.error(`${error} did not connect`);
});