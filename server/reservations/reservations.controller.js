const { body, validationResult } = require('express-validator');
const fs = require('fs');

exports.getAllReservations = async (req, res) => {
    res.status(200).json(readReservations());
}

//Helper function, to read from json-file, not needed later...
function readReservations() {
    let rawdata = fs.readFileSync('reservations.json');
    return JSON.parse(rawdata);
}