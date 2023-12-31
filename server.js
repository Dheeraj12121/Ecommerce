import express from 'express';
import colors from 'colors'
import dotenv from 'dotenv'

// configure env
dotenv.config()

//rest object
const app = express();

// rest api
app.get("/", (req ,res) => {
  res.send("<h1>Welcome to ecom</h1>");
});

// Port
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
  console.log(`server Running ${process.env.DEV_MODE} on MODE ON PORT     ${PORT}`.bgCyan.white);
});
