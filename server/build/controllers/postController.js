import { getPosts, addNewPost } from "../models/postModel.js";
const getAllPosts = async (req, res, next) => {
    try {
        const posts = await getPosts();
        res.status(200).json(posts);
    }
    catch (error) {
        res.status(500).json({ message: "Something is wrong" });
        console.log(error);
    }
};
const addPost = async (req, res, next) => {
    try {
        const newPostData = req.body;
        const modifiedReqBody = {
            titulo: newPostData.titulo,
            descripcion: newPostData.descripcion,
            img: newPostData.url,
        };
        const newPost = await addNewPost(modifiedReqBody);
        res.status(200).send("New post added successfully");
        console.log("Added");
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
export { getAllPosts, addPost };
