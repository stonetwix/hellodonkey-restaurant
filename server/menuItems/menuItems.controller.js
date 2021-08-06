const { body, validationResult } = require('express-validator');
const fs = require('fs');

exports.getAllMenuItems = async (req, res) => {
    res.status(200).json(readMenuItems());
}

exports.getOneMenuItem = async (req, res) => {
    const menuItems = readMenuItems();
    const menuItem = menuItems.find(p => p.id === Number(req.params.id));
    if (!menuItem) {
        res.status(404).json({ error: 'Menu item not available' });
    }
    res.status(200).json(menuItem);
}


//Helper function, to read from json-file, not needed later...
function readMenuItems() {
    let rawdata = fs.readFileSync('foods.json');
    return JSON.parse(rawdata);
}