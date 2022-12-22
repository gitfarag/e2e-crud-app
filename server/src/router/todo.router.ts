import { Router } from "express";
import { getAll, createItem, updateItem, deleteItem } from "../controllers/todos.controller";

const todoRouter = Router();

todoRouter.get("/", getAll);
todoRouter.post("/create",createItem);
todoRouter.put("/update", updateItem);
todoRouter.delete("/delete", deleteItem);

export default todoRouter;
