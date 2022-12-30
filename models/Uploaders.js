const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uploadersSchema = new Schema({
    auth: {type: String, required: true},
    payment: {type: String, required: true},
    setting: {type: Number, required: true},
    setter: {type: Number, required: true},

    author_name: {type: String, required: true},
    author_link: {type: String, required: true},
    provider_name: {type: String, required: true},
    provider_link: {type: String, required: true},

    fakelink: {type: String, required: true},
    hex: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
}, { timestamps: true });

const Uploaders = mongoose.model("Uploaders", uploadersSchema);

module.exports = Uploaders;
