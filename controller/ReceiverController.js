const { ReceiverModel } = require("../Model/ReceiverModel");


exports.addReceiver = async (req, res) => {
    console.log();
    try {
        const port = await ReceiverModel.findOne({
            email: req.body.email
        })
        if (port) {
            return res.status(400).send("This receiver name already exist!")
        }
        const { name, email, phoneNumber,pin } = req.body;
        const data = ReceiverModel.create({
            name,
            email,
            phoneNumber,
            pin
        })
        res.status(200).send(data)
    } catch (err) {
        res.status(400).send("error")
    }
}

exports.AllReceiver = async (req, res) => {
    try {
        const Charter = await ReceiverModel.find()
        res.status(200).send(Charter)
    } catch (err) {
        res.status(400).send("error")
    }
}
exports.deleteReceiver = async (req, res) => {
    try {
        const vessel = await ReceiverModel.findByIdAndRemove({ _id: req.params.id })
        res.status(200).send(vessel)
    } catch (err) {
        res.status(400).send("error")
    }
}
exports.viewReceiver = async (req, res) => {
    try {
        const charter = await ReceiverModel.findOne({ _id: req.params.id })
        res.status(200).send(charter)
    } catch (err) {
        res.status(400).send("error")
    }
}
exports.viewOneUpdateReceiver = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email, phoneNumber,pin } = req.body;
        const onCharter = await ReceiverModel.findByIdAndUpdate(id, {
            name,
            email,
            phoneNumber,
            pin
        })
        res.status(200).send(onCharter)
    } catch (err) {
        res.status(400).send("error")
    }
}


