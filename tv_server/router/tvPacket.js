const express = require('express');
const router = express.Router();
const { TV } = require("../models/tvPacket");
const { ZakazTv } = require("../models/zakazTv");

router.get('/', (req, res)=>{


    (async () => {

        // TV.create({
        //     name: '«Prime+»',
        //     id: 1,
        //     prise: 197,
        //     films: [
        //         {name: 'Онлайн IPTV (HLS)', canalls: 196, hd: 107},
        //         {name: 'Цифровое DVB-C', canalls: 158, hd: 49},
        //         {name: 'Аналоговое PAL', canalls: 72}
        //     ]
        // });
        // TV.create({
        //     name: '«Baza+»',
        //     id: 2,
        //     prise: 147,
        //     films: [
        //         {name: 'Онлайн IPTV (HLS)', canalls: 189, hd: 100},
        //         {name: 'Цифровое DVB-C', canalls: 132, hd: 23},
        //         {name: 'Аналоговое PAL', canalls: 72}
        //     ]
        // });
        // TV.create({
        //     name: '«Prime+»',
        //     id: 3,
        //     prise: 97,
        //     films: [
        //         {name: 'Онлайн IPTV (HLS)', canalls: 137, hd: 58},
        //         {name: 'Цифровое DVB-C', canalls: 61, hd: 1},
        //         {name: 'Аналоговое PAL', canalls: 41}
        //     ]
        // });


        const tvs = await TV.find({});

        res.send(tvs)

    })();

});

router.get('/:id', (req, res)=>{


    (async () => {




        const tvs = await TV.findOne({id: req.params.id});
        console.log(req.params.id);
        res.send(tvs)

    })();

});

router.post('/', (req, res)=>{


    (async () => {

        ZakazTv.create({
            name: req.body.name,
            email:  req.body.email,
            idTv:  req.body.idTv,
            prise:  req.body.prise
        });
        res.send(req.body)

    })();

});

module.exports = router;
