const app = require("./server");
const mongoose = require('mongoose')


//** @Database Connection */
mongoose.connect("mongodb://localhost:27017/user-db")
    .then((_result) => {
        console.log("Database connected")
    }).catch((err) => {
        console.log(err);
    })


const PORT = 3000;

app.listen(PORT, async () => {
    console.log(`listening on port ${PORT}`);
})