const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
port = process.env.PORT || 3000;

app.get("/", (req,res) =>{
	res.status(200).json({message:"Hello from Note Fusion API"});
});


//DB Connection
mongoose.connect(process.env.DB_URI, {
	useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
})
.then(()=>{
	app.listen(port,()=>{
		console.log(`Running on http://127.0.0.1:${port}`);
	});
	console.log("Connected to DB");
})
.catch((err)=>{
	console.log(err);
})
