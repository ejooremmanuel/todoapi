const router = require("express").Router();
const calendarAuth = require("../controllers/calendar.controller");

router.get("/calendar?", calendarAuth);

module.exports = router;
