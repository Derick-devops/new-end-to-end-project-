import {Router} from "express";
import {createTask, deleteTask, getAllUserTasks, updateTask} from "../controllers/taskController.js";
import isAuthenticated from "../configs/authenticationFilter.js";

const taskRouter = Router();

taskRouter.post("/tasks",isAuthenticated, createTask);
taskRouter.get("/tasks",isAuthenticated, getAllUserTasks);
taskRouter.put("/tasks/:id",isAuthenticated, updateTask);
taskRouter.delete("/tasks/:id",isAuthenticated, deleteTask);

export default taskRouter;

