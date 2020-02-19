var express = require('express');
var router = express.Router();
var QRCode = require('qrcode');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/:qrcode', function(req, res, next) {
    // console.log(req.params.qrcode)
    QRCode.toDataURL(req.params.qrcode)
        .then(url => {
            res.render('index', { img: url });
        })
        .catch(err => {
            console.error(err)
        })
  
});

module.exports = router;
