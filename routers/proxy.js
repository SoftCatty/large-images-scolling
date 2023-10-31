const express = require('express')
const URL = require('url');
const router = express.Router()
const axios = require('axios');


router.get('/image', async (req, res) => {
    const imageUrl = req.query.url;

    if (!imageUrl) {
        res.status(400).send('缺少 url 参数');
        return;
    }

    try {
        const originRes = await axios({
            method: 'get',
            url: imageUrl,
            responseType: 'stream',
            headers: {
                Referer: URL.parse(imageUrl).hostname,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36'
            },
        });

        res.setHeader('Content-Type', originRes.headers['content-type']);
        res.setHeader('Content-Length', originRes.headers['content-length']);
        let cacheControl = originRes.headers.get('cache-control');
        if(!cacheControl)
        {
            cacheControl = "public, max-age=1000";
        }
        res.setHeader("Cache-Control", cacheControl);
       
        originRes.data.pipe(res);
    } catch (error) {
        console.error(`[proxy image] error fetching image: ${error.message}`);
        res.status(500).send('图片获取失败');
    }
});


module.exports = router