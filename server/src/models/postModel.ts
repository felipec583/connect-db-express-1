import pool from "../db/connectDB.js";
import { Post } from "../types.js";
const getPosts = async () => {
  try {
    const query = {
      text: "SELECT * FROM posts",
    };
    const res = await pool.query(query);
    return res.rows;
  } catch (error) {
    console.log(error);
  }
};
const addNewPost = async ({ titulo, img, descripcion }: Post) => {
  try {
    const query = {
      text: "INSERT INTO posts(titulo, img, descripcion) VALUES($1, $2, $3)",
      values: [titulo, img, descripcion],
    };

    const res = await pool.query(query);
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};

export { getPosts, addNewPost };
