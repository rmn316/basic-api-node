import dotenv from "dotenv";
import express from "express";

// initialize configuration
dotenv.config();

const port = process.env.SERVER_PORT;
const app = express();

app.get("/", (request, response) => {
    response.send("Hello World!");
});

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
});
