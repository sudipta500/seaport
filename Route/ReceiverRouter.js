const express = require("express");
const { addReceiver, AllReceiver, deleteReceiver, viewReceiver, viewOneUpdateReceiver } = require("../controller/ReceiverController");
const router=express.Router();




router.post("/receiver-create",addReceiver)
router.get("/receiver",AllReceiver)
router.delete("/:id",deleteReceiver)
router.get("/receiver/:id",viewReceiver)
router.put("/update-receiver/:id",viewOneUpdateReceiver)



module.exports = router;