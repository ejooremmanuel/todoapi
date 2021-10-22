const open = require("open");
const dotenv = require("dotenv").config();

const getConsent = async (req, res) => {
  open(process.env.url);
};

module.exports = getConsent;
