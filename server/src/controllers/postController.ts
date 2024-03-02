import { ControllerType } from "../types.js";
import { getPosts, addNewPost } from "../models/postModel.js";
import { Post } from "../types.js";

const getAllPosts: ControllerType = async (_req, res, _next) => {
  try {
    const queryData = await getPosts();

    if (!queryData) {
      res.status(404).send("This entity does not exist");
    }
    res.status(200).json(queryData);
  } catch (error) {
    res.status(500).json({ message: "Something is wrong" });
    console.log(error);
  }
};

const addPost: ControllerType = async (req, res, _next) => {
  try {
    const { titulo, descripcion, url } = req.body;

    const modifiedReqBody: Post = {
      titulo: titulo,
      descripcion: descripcion,
      img: url,
    };
    if (!titulo || !url || !descripcion) {
      console.log("All fields must be filled in");
      res.status(400).json({ message: "You should enter all the fields" });
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
