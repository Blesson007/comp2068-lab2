'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    let x = req.query.x
    let y = req.query.y
    let method = req.query.method;
    res.send(calculate(method, x, y));
});

function calculate(method, x, y) {

    let result = 0;
    let symbol = ""

    if (method == "add") {
        symbol = "+"
        result = Number(x) + Number(y);
    }

    if (method == "subtract") {
        symbol = "-"
        result = Number(x) - Number(y);
    }

    if (method == "multiply") {
        symbol = "*"
        result = Number(x) * Number(y);
    }

    if (method == "divide") {
        symbol = "/"
        result = Number(x) / Number(y);
    }
    console.log(`${x} ${symbol} ${y} = ${result}`);
    return `${x} ${symbol} ${y} = ${result}`
}

module.exports = router;
