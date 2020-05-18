const express = require('express');
const router = express.Router();
const { Order } = require("../models/order");


router.post('/', (req, res)=>{


    (async () => {
        console.log(req.body);
        let add = req.body.add.join(',')

        Order.create({
            name: req.body.name,
            packName: req.body.packName,
            massage: req.body.massage,
            email: req.body.email,
            prise: req.body.prise,
            add: add
        });
        res.send(req.body)

    })();

});

module.exports = router;
