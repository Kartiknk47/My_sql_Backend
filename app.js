const express = require("express")
const cors = require('cors')
require("dotenv").config()
require('./config/db')



const brandRoute = require('./route/brandRoute')
const productRoute = require('./route/productRoute')
const categoryRoute = require("./route/categoryRoute")


const app = express()

app.use(express.json());
app.use(cors())



const port = process.env.PORT || 8000


app.get('/', (req,res)=> res.send("Hello World"))
app.use('/api/brand', brandRoute)
app.use('/api/product', productRoute)
app.use("/api/category", categoryRoute)

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
