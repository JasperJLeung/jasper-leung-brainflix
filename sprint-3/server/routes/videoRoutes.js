const express = require("express");
const route = express.Router();

const fs = require('fs');
const {v4:uuidv4} = require('uuid')

route.get("/", (req, res) => {
    const data = JSON.parse(fs.readFileSync('./data/database.json', "utf-8"));
    const response = data.map((item) => {
        return {
            id: item.id,
            channel: item.channel,
            title: item.title,
            image: item.image,
        };
    });
    res.status(200).json(response);
});

route.get("/:id", (req, res) => {
    const id = req.params.id
    const data = JSON.parse(fs.readFileSync('./data/database.json', "utf-8"));
    const response = data.find((item) => {
        return (item.id.toString() === id)
    });
    res.status(200).json(response);
});

route.post("/", (req, res) => {
    const data = JSON.parse(fs.readFileSync('./data/database.json', "utf-8"));
    console.log(req.body)
    const video = {
        id: uuidv4(),
        title: req.body.title,
        comments: req.body.comments,
        channel:req.body.channel,
        image: req.body.image,
        description: req.body.description,
        views: req.body.views,
        likes: req.body.likes,
        duration:req.body.duration,
        video: req.body.video,
        timestamp: req.body.timestamp
    }
    data.push(video);
    fs.writeFileSync('./data/database.json', JSON.stringify(data, null, 2));
    res.status(200).json(video);
})


module.exports = route;
