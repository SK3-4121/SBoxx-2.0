const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uploadersSchema = new Schema({
    auth: {type: String, required: true},
    payment: {type: String, required: true},
    setting: {type: Number, required: true},
    setter: {type: Number, required: true},

    fakelink: {type: String, required: true},
    hex: {type: String, required: true},
    top: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
}, { timestamps: true });

const Uploaders = mongoose.model("Uploaders", uploadersSchema);

module.exports = Uploaders;
