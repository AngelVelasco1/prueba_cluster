import express from "express";
import user from "./routes/user.js"
import cors from "cors"

const app = express();
app.use(cors())
app.use("/", user)
const config = {
    hostname: "127.1.1.2",
    port: 5081
}

app.listen(config, () => {
    console.log( `listening on http://${config.hostname}:${config.port}`);
})