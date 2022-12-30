const fs = require("fs");
const path = require('path');
const express = require("express");
const expressfileupload = require("express-fileupload");
const crypto = require('crypto')
const Uploaders = require("./models/Uploaders");
const libhookz = require("./models/libhookz");
const AdminIP = ""

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoDB = "";

mongoose.set('strictQuery', true);
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

const app = express();
var router = express.Router();
app.use(expressfileupload());
app.use(express.urlencoded({ extended: true }));

const DEBUG = false;
const Ip = "example.com";
port = 80;

function uploads() {
    fs.readdir("./uploads", (err, files) => {
        files.forEach(file => {
            app.get(`/${file}`, (req, res) => {
                const split = file.split("-");
                const id = split[0];

                Uploaders.findById(id)
                    .then((data) => {
                        const hex = data.hex;
                        const top = data.top;
                        const title = data.title;
                        const description = data.description;
                        const setting = data.setting;
                        let hook = null;

                        if (DEBUG == true) {
                            hook = new libhookz( `http://${Ip}:${port}/raw/${file}`, hex, top, title, description, setting );
                        } else {
                            hook = new libhookz( `http://${Ip}/raw/${file}`, hex, top, title, description, setting );
                        }

                        if (data.setting == 1) {
                            res.send( hook.one() )
                        } else if (data.setting == 2) {
                            res.send( hook.two() )
                        } else if (data.setting == 3) {
                            res.send( hook.three() )
                        } else if (data.setting == 4) {
                            res.send( hook.four() )
                        } else if (data.setting == 5) {
                            res.send( hook.five() )
                        } else {
                            res.json({ error: "Something hit a wrong turn in the API contact support." });
                        }
                    });
            });
        });
    });
};

app.get("/raw/:file", (req, res) => {
    const file = req.params.file;
    res.sendFile(path.join(__dirname, `./uploads/${file}`));
});

app.get("/admin", (req, res) => {
    Uploaders.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        })
});

function extensionAllowed(ext) {
    let is = false;
    allowed = ["gif", "png", "jpg", "jpeg"];

    allowed.forEach(obj => {
        if (obj == ext) {
            is = true;
        }
    });

    return is;
}

app.post("/api/upload", (req, res) => {
    const auth = req.headers.authorization;

    Uploaders.findById(auth)
        .then((data) => {
            if (!req.files) {
                res.json({ error: "No file was sent." });
            } else {
                try {
                    const file = req.files.file;
                    const ext = file.name.split(".").pop();
                    const filename = auth + "-" + crypto.randomBytes(16).toString("hex") + "." + ext;

                    if (extensionAllowed(ext)) {
                        file.mv(`./uploads/${filename}`, (err) => {
                            if (err) {
                                console.log(err);
                                res.json({ error: "An error occured." });
                            } else {
                                setting = data.setting;
                                setter = data.setter;

                                fakelink = data.fakelink;
                                hex = data.hex;
                                top = data.top;
                                title = data.title;
                                description = data.description;

                                if (DEBUG == true) {
                                    if (setter == 1) {
                                        res.send(`http://${Ip}:${port}/${filename}`);
                                    } else if (setter == 2) {
                                        res.send(`<${fakelink}> ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||||||||||http://${Ip}:${port}/${filename}`);
                                    }
                                } else {
                                    if (setter == 1) {
                                        res.send(`http://${Ip}/${filename}`);
                                    } else if (setter == 2) {
                                        res.send(`<${fakelink}> ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||||||||||http://${Ip}/${filename}`);
                                    };
                                };
                            };
                        });
                    } else {
                        res.json({ error: "Extension not allowed." });
                    }
                } catch (err) {
                    console.log(err);
                    res.json({ error: "Your auth was incorrect." });
                };
            };
        })
        .catch((err) => {
            console.log(err);
            res.json({ error: "Authorization wasen't correct." });
        })
});

app.get("/api/admin/gen-account", (req, res) => {
    const ip = req.headers['x-forwarded-for'];
    const hash = crypto.createHash('md5').update(ip).digest("hex");

    if (hash == AdminIP) {
        const newUploader = new Uploaders({
            auth: crypto.randomBytes(16).toString("hex"),
            payment: "0",
            setting: 1,
            setter: 1,

            fakelink: "https://sk3ishellacute.gg/",
            hex: "#FFFFFF",
            top: "Top",
            title: "Untitled",
            description: "No description",
        });

        newUploader.save()
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                console.log(err);
            })
    } else {
        res.json({ auth: false, "ip": ip, "hash": hash });
    }
});

app.listen(port, () => {
    if (DEBUG == true) {
        console.log(`Upload API : http://${Ip}:${port}`);
    } else {
        console.log(`Upload API : http://${Ip}`);
    }
});

setInterval(() => {
    uploads();
}, 1500);
