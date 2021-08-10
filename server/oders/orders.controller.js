const { body, validationResult } = require('express-validator');
const fs = require('fs');

exports.getAllOrders = async (req, res) => {
    res.status(200).json(readOrders());
}

//Helper function, to read from json-file, not needed later...
function readOrders() {
    let rawdata = fs.readFileSync('orders.json');
    return JSON.parse(rawdata);
}