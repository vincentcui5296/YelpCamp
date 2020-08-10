const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    const campgrounds = [
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
        {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
        {name: "Mountain Goad's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"}
    ]

    res.render("campgrounds", {campgrounds});
})

app.listen(3000, () => {
    console.log("The YelpCamp Server Has Started!");
})