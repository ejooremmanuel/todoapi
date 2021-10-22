const createUser = require("../../controllers/auth/register.controller");
const login = require("../../controllers/auth/login.controller");

const router = require("express").Router();

router.post("/register", createUser);
router.post("/login", login);

module.exports = router;
