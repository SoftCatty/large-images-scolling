const express = require('express')
const app = express();
const path = require('path');
const port = 3001;

//  static
app.use(express.static(path.join(__dirname, 'public')))

// view
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// const views = require('./routers/views');
app.get('/pics', (req, res) => {
  const pattern = req.query.pattern;
  const startNumber = req.query.startNumber;
  const padZeros = req.query.padZeros;
  const imgCount = req.query.imgCount;
  const useProxy = req.query.useProxy;
  const hor = req.query.hor;
  res.render('pics', {
    tPattern: pattern, tStartNumber: startNumber,
    tPadZeros: padZeros, tImgCount: imgCount, tUseProxy: useProxy,
    tHor: hor
  });
});


// const proxy = require('./routers/proxy');
// app.use('/proxy', proxy);

app.listen(port, () => {
  console.log(`large-images-scrolling app listening on port ${port}`)
})