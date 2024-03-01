import { Response, Request, NextFunction } from "express";
import { getPosts, addNewPost } from "../models/postModel.js";
import { Post } from "../types.js";
type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | Promise<string>;

const getAllPosts: ControllerType = async (req, res, next) => {
  try {
    const posts = await getPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Something is wrong" });
    console.log(error);
  }
};

const addPost: ControllerType = async (req, res, next) => {
  try {
    const newPostData = req.body;
    const { titulo, descripcion, url } = req.body;

    const modifiedReqBody: Post = {
      titulo: titulo,
      descripcion: descripcion,
      img: url,
    };
    if (!titulo || !url || !descripcion) {
      console.log("All fields must be filled in");
      res.status(400).send("You should enter all the fields");
      return;
    } else {
      const newPost = await addNewPost(modifiedReqBody);
      res.status(200).send(`New post added successfully: ${newPost}`);
      console.log("Added");
    }
  } catch (error) {
    if (error instanceof Error) console.log(error.message);

    res.status(500).json({ message: "Something went wrong" });
  }
};

export { getAllPosts, addPost };
