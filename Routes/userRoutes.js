import { Router } from "express";
import UserController from "../Controller/userController.js";
const router = Router();

const userController = new UserController;

router.post("/register", (req,res) =>userController.addUser(req,res));
router.post("/login", (req,res)=>userController.loginUser(req,res));

export default router;