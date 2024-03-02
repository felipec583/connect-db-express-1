import { Response, Request, NextFunction } from "express";

interface Post {
  id?: number;
  titulo: string;
  [key: string]: string;
  descripcion: string;
  likes?: number;
}

type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | Promise<string>;

export { Post, ControllerType };
