const express = require('express');
const router = express.Router();
const { Help } = require("../models/help");

router.post('/', (req, res)=>{


    (async () => {

        Help.create({
            name: req.body.name,
            email: req.body.email,
            data: new Date(),
            massage: req.body.massage
        });
        res.send(req.body)

    })();

});

module.exports = router;
