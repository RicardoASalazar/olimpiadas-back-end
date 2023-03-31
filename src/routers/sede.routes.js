const { Router } = require("express");
const { getSedes } = require("../controllers/sede.controller");

const router = Router();

///api/v1/sede
router.get('/',getSedes)
//router.get("/",getUsers);
// router.get("/" );

module.exports = router;
