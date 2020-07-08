const fs = require("fs");
const path = require("path");

module.exports = app => {
    app.get("/recipe/get-all", (req, res) => {
        let data = [];

        fs.readdirSync(path.resolve(__dirname, "../../../data/")).forEach(file => {
            data.push(require("../../../data/" + file));
        })

        return res.send(data);
    });
};