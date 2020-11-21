const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

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



app.listen(8080, () => {
    console.log("anything");
});