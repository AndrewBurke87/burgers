const express = require('express');

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require('../models/burger.js');

// get route -> index
router.get("/", function (req, res) {
    res.redirect("/burgers");
});
router.get("/burgers", function (req, res) {
    // express callback response by calling burger.selectAllBurger
    burger.all(function (burgerData) {
        // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
        res.render("index", { burger_data: burgerData });
    });
});
// Create all our routes and set up logic within those routes where required.
// router.get('/', (req, res) => {
//     burger.all((burger_data) => {
//         const hbsObject = {
//             burgers: burger_data,
//         };
//         // console.log(burger_data.id);
//         console.log(hbsObject, "I am hbsObject");
//         res.render('index', hbsObject);
//     });
// });

router.post('/api/burgers', (req, res) => {
    burger.create(req.body.burger_name, function (result) {
        console.log(result);
        // Send back the ID of the new quote
        res.redirect("/");
    });
});

router.put('/burgers/:id', (req, res) => {
    // const condition = `id = ${req.params.id}`;

    // console.log('condition', condition);
    console.log(Object)
    burger.update(

        req.params.id,

        // condition,
        function () {
            res.sendStatus(200);
        }
    );
});

router.delete('/burgers/:id', (req, res) => {
    // const condition = `id = ${req.params.id}`;

    burger.delete = (result) => {
        if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200);
    };
});

// Export routes for server.js to use.
module.exports = router;
