import path from "path";
import fs from "path";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.static("./build"));

app.get("/*", (req, res) => {
    const app = ReactDOMServer.renderToString(
        <Menu recipes={data} title="Delicious Recipes" />
    );

    const indexFile = path.resolve("./build-server/index.html");

    fs.readFile(indexFile, "utf8", (err, data) => {
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${renderedHtml}</div>`
            )
        );
    });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
