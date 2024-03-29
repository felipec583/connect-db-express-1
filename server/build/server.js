import express from "express";
import cors from "cors";
import "dotenv/config";
import postRoute from "./routes/postRoutes.js";
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use("/posts", postRoute);
app.get("*", (_req, res) => {
    res.status(404).json({
        message: "This endpoint does not exist",
        "Available URL": "http://localhost:3000/posts",
    });
});
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
