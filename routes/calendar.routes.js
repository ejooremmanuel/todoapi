const router = require("express").Router();
const calendarAuth = require("../controllers/calendar.controller");

router.get("/", function (req, res) {
  return res.status(200).json({ message: "Welcome to the homepage" });
});
router.get("/calendar?", calendarAuth);

module.exports = router;
