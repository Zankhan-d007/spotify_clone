import {Router} from "express";
import * as userController from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const userRouter = Router();

// TODO : generate doc comments

// get all users to show in right panel
// user should be authenticated to see all the users
userRouter.get("/", authMiddleware, userController.getAllUsers);

export default userRouter;