const express = require("express");
const app=express();
const db = require("./DB/Db")
const cors = require("cors")
require('dotenv').config();
db();
const user = require("./Route/userRouter")
const vessel=require("./Route/VesselRouter");
const customer=require("./Route/NewCustomerRouter");
const portMember = require("./Route/Addnewportmember")
const bl = require("./Route/blRouter");
const { authToken } = require("./Middleware/Auth");
const owner = require("./Route/OwnerRouter") 
const broker = require("./Route/BrokerRouter") 
const consignment = require("./Route/ConsignmentRouter") 
const cargo = require("./Route/Cargoroute") 
const account = require("./Route/AccountRouter") 
const allconsignment = require("./Route/AllconsignmentRoute") 
const charter = require("./Route/CharterRoute") 
const receiver = require("./Route/ReceiverRouter") 


app.use(cors());
app.use(express.json());
app.use("/user",user);
app.use("/vessel",vessel);
app.use("/cutomer",customer);
app.use("/portmember",portMember);
app.use("/bl",bl);
app.use("/owner",owner)
app.use("/broker",broker)
app.use("/consignment",consignment)
app.use("/cargo",cargo)
app.use("/account",account)
app.use("/allconsignment",allconsignment)
app.use("/charter",charter)
app.use("/receiver",receiver)



app.listen(process.env.PORT||5000,console.log(`server start in ${process.env.PORT}`))

