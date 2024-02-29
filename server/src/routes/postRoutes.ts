import { getAllPosts, addPost } from "../controllers/postController.js";
import express from "express";

const route = express.Router();

route.get("/", getAllPosts);
route.post("/", addPost);
export default route;
