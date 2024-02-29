interface Post {
  id?: number;
  titulo: string;
  [key: string]: string;
  descripcion: string;
  likes?: number;
}

export { Post };
