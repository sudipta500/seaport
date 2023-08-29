const mongoose = require("mongoose");

const receiverSchema = new mongoose.Schema({
    name:{ type: String, required: true, required: true },
    phoneNumber:{ type: Number, required: true, required: true },
    pin:{ type: Number, required: true, required: true },
    email:{ type: String, required: true, required: true },
})
const ReceiverModel = new mongoose.model("receiver", receiverSchema);
module.exports = {ReceiverModel};