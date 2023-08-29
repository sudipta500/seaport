const express = require("express");
const { addCharter, AllCharter, deleteCharter, viewCharter, viewOneUpdate } = require("../controller/CharterController");
const router=express.Router();



router.post("/charter-create",addCharter)
router.get("/charter",AllCharter)
router.delete("/:id",deleteCharter)
router.get("/charter/:id",viewCharter)
router.put("/update-charter/:id",viewOneUpdate)



module.exports = router;