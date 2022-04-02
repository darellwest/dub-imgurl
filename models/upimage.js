const mongoose = require('mongoose');

// const imageSchema = new mongoose.Schema({
//     filePath: { type: String, required: false }
// });

const imageSchema = new mongoose.Schema({
    name: String,
    filePath: { type: String, required: false },
    img: {
        data: Buffer
    }
});

const upImage = module.exports = mongoose.model('upimages', imageSchema);