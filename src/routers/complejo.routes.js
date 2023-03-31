const { Router } = require("express");
const {
  filter,
  getByCve,
  getAll,
  registerCom,
  updateCom,
  deleteComplejo
} = require("../controllers/complejo.controller");

const router = Router();
router.post('/register',registerCom)
router.get("/:filter", filter);
router.get("/cve/:cve", getByCve);
router.get("/", getAll);
router.put('/modify',updateCom)
router.delete('/:cve',deleteComplejo)

module.exports = router;
