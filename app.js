const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Server del mio blog")
});

let arrayPost = [
    {
        title: "Ciabellone",
        content: "Descrizione",
        image: "/images/ciambellone.jpeg",
        tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
    },
    {
        title: "Cracker alla barbabietola",
        content: "Descrizione",
        image: "/images/cracker_barbabietola.jpeg",
        tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
    },
    {
        title: "Pane dolce fritto",
        content: "Descrizione",
        image: "/images/pane_fritto_dolce.jpeg",
        tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
    },
    {
        title: "Pasta alla barbabietola",
        content: "Descrizione",
        image: "/images/pasta_barbabietola.jpeg",
        tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
    },
    {
        title: "Torta paesana",
        content: "Descrizione",
        image: "/images/torta_paesana.jpeg",
        tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
    }
];

app.get('/bacheca', (req, res) => {
    res.json(arrayPost)
});

app.use(express.static("images"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});