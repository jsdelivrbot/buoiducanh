const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();

const template = fs.readFileSync("templates/fill_the_form.html", "utf-8");

router.get("/", (req, res) => {
		res.send(template);
});

module.exports = router;





