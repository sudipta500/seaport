const { CharterModel } = require("../Model/CharterModel");


exports.addCharter = async (req, res) => {
    console.log();
    try {
        const port = await CharterModel.findOne({
            email: req.body.email
        })
        if (port) {
            return res.status(400).send("This Charter name already exist!")
        }
        const { name, email, phoneNumber, } = req.body;
        const data = CharterModel.create({
            name,
            email,
            phoneNumber,
        })
        res.status(200).send(data)
    } catch (err) {
        res.status(400).send("error")
    }
}

exports.AllCharter = async (req, res) => {
    try {
        const Charter = await CharterModel.find()
        res.status(200).send(Charter)
    } catch (err) {
        res.status(400).send("error")
    }
}
exports.deleteCharter = async (req, res) => {
    try {
        const vessel = await CharterModel.findByIdAndRemove({ _id: req.params.id })
        res.status(200).send(vessel)
    } catch (err) {
        res.status(400).send("error")
    }
}
exports.viewCharter = async (req, res) => {
    try {
        const charter = await CharterModel.findOne({ _id: req.params.id })
        res.status(200).send(charter)
    } catch (err) {
        res.status(400).send("error")
    }
}
exports.viewOneUpdate = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email, phoneNumber, } = req.body;
        const onCharter = await CharterModel.findByIdAndUpdate(id, {
            name,
            email,
            phoneNumber,
        })
        res.status(200).send(onCharter)
    } catch (err) {
        res.status(400).send("error")
    }
}


