require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const router = require('./router/index')

const app = express();

const PORT = process.env.PORT

app.use(express.json());
app.use("/api", router);

app.get('/', function (req, res) {
    console.log(req.body);
    res.send('hello world!');
  });

void (
    async () => {
        try {
            await mongoose.connect(process.env.DB_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
        } catch (e) {
            console.log(e);
        }
    }
)()



