const express = require('express')
const router = express.Router()


router.get('/', (req, res)=>
{
    const pattern = req.query.pattern;
    const startNumber = req.query.startNumber;
    const padZeros = req.query.padZeros;
    const imgCount = req.query.imgCount;
    const useProxy = req.query.useProxy;
    res.render('pics', { tPattern: pattern, tStartNumber: startNumber,
    tPadZeros: padZeros, tImgCount: imgCount, tUseProxy:useProxy});
});




module.exports = router