const express = require('express');
const fs = require('fs');

const router = express.Router();


const template = fs.readFileSync("templates/q4.html", "utf-8");

router.get("/", (req, res) => {
		res.send(template);
});

module.exports = router;


