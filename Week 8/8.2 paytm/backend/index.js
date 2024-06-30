// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");
const dotenv = require("dotenv")

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(process.env.PORT,() => {
    console.log(`app is running on Port : ${process.env.PORT}`)
});