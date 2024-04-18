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


const url = "mongodb+srv://abrardar988651:Abrardar123@freeserver.wc1ytkf.mongodb.net/SkillGap"

app.use("/api/user", userRoute);


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    
    app.listen(4000, () => {
        console.log('Backend server is running on port 4000');
    });
}).catch((error) => {
    console.error(`${error} did not connect`);
});