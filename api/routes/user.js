import { Router } from "express";

const user = Router();

user.get("/user", (req, res) => {
    res.status(200).json({Message: "hi"})
})
export default  user 