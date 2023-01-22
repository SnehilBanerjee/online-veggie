var express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

var app = express(); app.listen(3000, () => {
    console.log("Server running on port 3000");
});
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let items = ["tomato", "potato", "broccoli", "Ginger", "apple"]
app.post("/items", (req, res, next) => {
    items.push(req.body.item)
    res.json({ status: 200, message: `Added items ${req.body.item}` });
});
app.get("/items", (req, res, next) => {
    res.json({ status: 200, items: items });
});
app.put("/items", (req, res, next) => {
    items = req.body.items;
    res.json({ status: 200, items: items });
});