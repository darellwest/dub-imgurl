const upimage = require('../models/upimage');

const router = module.exports = require('express').Router();
router.get('/', (req, res) => {
    let { imagfile } = req.params;
    let id = imagfile.split('.').shift();
    upimage.findById()
    .then(v => {
        console.log(v.filePath);
        res.render('image', {
            imgSingle: '/' + v.filePath
        })
    })
    .catch(err => {
        console.log(err);
    })
})