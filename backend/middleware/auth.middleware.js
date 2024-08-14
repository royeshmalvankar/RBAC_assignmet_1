import jwt from "jsonwebtoken";
import BlacklistModel from "../model/blacklist.js";

export const verifyToken = async(req, res, next) => {
    const authHeader = req.headers.authorization?.split(" ")[1]
    const blacklist_Token = await BlacklistModel.findOne({ token: authHeader })
    if (blacklist_Token) {
        return res.status(403).json({ message: "Invalid Token" });
    }

    if (authHeader) {
        jwt.verify(authHeader, process.env.key, (err, user) => {
            if (err) return res.status(403).json({ message: "something went wrong" });
            req.user = user;
            console.log(req.user.role);
            next();
        });
    } else {
        res.status(401).json({ message: "Unauthorized" });
    }
}