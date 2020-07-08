const fs = require("fs");
const path = require("path");

module.exports = app => {
    app.post("/recipe/get-recipe", (req, res) => {
        if(req.body.recipeID == null) return res.sendStatus(401);

        fs.readFile(path.resolve(__dirname, `../../../data/${req.body.recipeID}.json`), (err, data) => {
            if (err) return res.sendStatus(500);

            return res.send(JSON.parse(data));
        });
    });
};