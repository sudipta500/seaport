const mongoose = require("mongoose");

const charterSchema = new mongoose.Schema({
    name:{ type: String, required: true, required: true },
    phoneNumber:{ type: String, required: true, required: true },
    email:{ type: String, required: true, required: true },
})
const CharterModel = new mongoose.model("charter", charterSchema);
module.exports = {CharterModel};