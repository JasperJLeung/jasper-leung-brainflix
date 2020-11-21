const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const {v4:uuidv4} = require('uuid')

app.use(cors());
app.use(express.json());
app.use(express.static('static'));

app.get("/videos", (req, res) => {
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

app.get("/videos/:id", (req, res) => {
    const id = req.params.id
    const data = JSON.parse(fs.readFileSync('./data/database.json', "utf-8"));
    const response = data.find((item) => {
        return (item.id.toString() === id)
    });
    res.status(200).json(response);
});

app.post("/videos", (req, res) => {
    const data = JSON.parse(fs.readFileSync('./data/database.json', "utf-8"));
    console.log(req.body)
    const video = {
        id: uuidv4(),
        title: req.body.title,
        comments: [],
        channel: "BrainStation",
        image: "http://localhost:8080/Upload-video-preview.jpg",
        description: req.body.description,
        views: "0",
        likes: "0",
        duration: "0:42",
        video: "http://localhost:8080/BrainStationSampleVideo.mp4",
        timestamp: new Date().getTime(),
    }
    data.push(video);
    fs.writeFileSync('./data/database.json', JSON.stringify(data, null, 2));
    res.status(200).json(video);
})



app.listen(8080, () => {
    console.log("anything");
});