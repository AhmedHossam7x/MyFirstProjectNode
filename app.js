const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const allRoutes = require("./routes/allRoutes")

app.use(express.urlencoded({ extended: true }));

//
app.set("view engine", "ejs");
//
app.use(express.static("public"));
// auto reload
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));



const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
var methodOverride = require('method-override')
app.use(methodOverride('_method'))

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});



mongoose
    .connect(
        "mongodb+srv://ah1066270:l1mJLH0nMpb8FtIW@cluster0.988a9.mongodb.net/all_data?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
        app.listen(port, () => {
            console.log(`http://localhost:${port}/`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

app.use(allRoutes);