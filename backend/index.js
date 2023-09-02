const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const dbConnect = require("./db");
dbConnect();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers","Access-Control-Allow-Credentials",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

app.use(express.json());
app.use('/api',require("./routes/createUser"));
app.use('/api',require("./routes/displayData"));
app.use('/api',require("./routes/orderData"));

app.get('/',(req,res) => {
    res.send("Hello World")
});

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
});