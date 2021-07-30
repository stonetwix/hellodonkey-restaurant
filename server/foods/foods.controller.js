const { body, validationResult } = require('express-validator');
const fs = require('fs');

exports.getAllFoods = async (req, res) => {
    res.status(200).json(readFoods());
}


//Helper function, to read from json-file, not needed later...
function readFoods() {
    let rawdata = fs.readFileSync('foods.json');
    return JSON.parse(rawdata);
}