const express = require("express");
const app = express();
app.set("view engine", "ejs");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

const Campground = require("./models/campground");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", {
    'useNewUrlParser': true,
    'useUnifiedTopology': true
})
.then(() => console.log("Connected to DB!"))
.catch(err => console.log(err.message));

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    Campground.find({}, (err, campgrounds) => {
        if (err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds});
        }
    });
});

app.post("/campgrounds", (req, res) => {
    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;
    Campground.create({name, image, description}, (err, campground) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new");
});

app.get("/campgrounds/:id", (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if (err) {
            console.log(err);
        } else {
            res.render("show", {campground});
        }
    });
});

app.listen(3000, () => {
    console.log("The YelpCamp Server Has Started!");
});