import pool from "../db/connectDB.js";
const getPosts = async () => {
    try {
        const query = {
            text: "SELECT * FROM posts",
        };
        const res = await pool.query(query);
        return res.rows;
    }
    catch (error) {
        console.log(error);
    }
};
const addNewPost = async ({ titulo, img, descripcion }) => {
    try {
        const query = {
            text: "INSERT INTO posts(titulo, img, descripcion) VALUES($1, $2, $3)",
            values: [titulo, img, descripcion],
        };
        const res = await pool.query(query);
    }
    catch (error) {
        console.log(error);
    }
};
export { getPosts, addNewPost };
