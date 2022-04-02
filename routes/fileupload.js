const router = require('express').Router();;
const multer = require('multer');
const upImage = require('../models/upimage');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploadedImages');
    },
    filename: (req, file, cb) => {
        let uniqueSuffix = file.fieldname + '-' + Date.now() + '-' + Math.round(Math.random() * 1E9) + "." 
        + file.originalname.split(".").pop();
        cb(null, uniqueSuffix);
        // let img = new upImage({});
        // console.log(img);
        let img = new upImage({filePath: "uploadedImages/" + uniqueSuffix});
        // img.filePath = "./imageuploads/" + uniqueSuffix;
        // console.log("this is the image path", img);
        img.save(function (err) {
            if (err) return err;
            console.log("Image was saved")
        });
        // cb(null, file.originalname + '-' + Date.now());
        // cb(null, file.originalname);
        // img.filePath = "./imageuploads/" + img._id + "." + file.originalname.split(".").pop();
        // img.save().then(() => {
        //     console.log("saved!")
        //     cb(null, img._id + "." + file.originalname.split(".").pop());
        // }).catch(err => console.log(err));
    }
})
// const upload = multer({dest: './imageuploads/'});
const upload = multer({storage: storage});
module.exports = router;
router.post('/', upload.single('picture'), (req, res) => {
    console.log("Retrieving post request");
    res.status(201).send({
        fileName: req.file.filename
    }).end();
    
});


