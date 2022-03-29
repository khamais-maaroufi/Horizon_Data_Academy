import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import mongoose from "mongoose";

const morgan = require("morgan");
require('dotenv').config();

//create express App
const app = express();

//Data Base
mongoose.connect(process.env.DATABASE, {
   //useCreateIndex: true,
   useNewUrlParser: true,
   useUnifiedTopology: true,
   //useFindAndModify: false,
})
.then(() => console.log("DB CONNECTED SUCCESFULLY."))
.catch((err) => console.log("DB CONNECTION ERR!", err));

//apply middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
/* app.use((req, res, next) =>  { 
    console.log("this is my own middleware");
    next();
});
*/

//route
readdirSync("./routes").map((r) => app.use("/api", require('./routes/'+r)));

//port 
const port = process.env.PORT || 8000;
app.listen(port, () => console.log('server is running on port: '+port));



