const express = require('express');
const fs = require('fs');
const router = express.Router();

const template = fs.readFileSync('templates/ranking.html', 'utf-8');

// Let's implement a listener that returns the rankings of girls.
router.get("/", (req, res) => {
	// We load the "add girl" site.
	res.send(template);
});


module.exports = router;

// Fill-me
// 1.
// data += '<tr><td>' + (i + 1).toString() + '</td><td><img src="' + girls[i].image + '" width="30%" height="30%"/></td><td>' + girls[i].score.toString() + '</td></tr>\n';
// ... or
// data += `<tr><td>${i + 1}</td><td><img src="${girls[i].image}" width="30%" height="30%"/></td><td>${girls[i].score}</td></tr>` + '\n';
