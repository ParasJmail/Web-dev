const express = require("express");
const dotenv = require("dotenv");
const mainRouter = require("./routes/index");
const cors = require("cors")

dotenv.config()

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use("api/v1",mainRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });


