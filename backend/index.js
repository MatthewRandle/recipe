const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = parseInt(process.env.PORT, 10) || 3000;

app.prepare()
	.then(() => {
		const server = express();

        const parserRoutes = [
            "/recipe/*",
        ];

        server.use(parserRoutes, bodyParser.urlencoded({ extended: true }));
        server.use(parserRoutes, bodyParser.json());        
       
        require("./routes")(server);
        
        server.get("/verification/account/:code", (req, res) => {
            const actualPage = "/verification/account";
            const queryParams = { code: req.params.code };
            app.render(req, res, actualPage, queryParams);
        });

		server.get("*", (req, res) => {
			return handle(req, res); // for all the react stuff
		});

		server.listen(PORT, err => {
			if (err) throw err;
			console.log(`ready at http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err);
	}); 