import { Router} from "express";
import { UserController } from "../controllers/Users/userController";

const router = Router();
const userController = new UserController();

router.post('/users',userController.register);
router.post('/login',userController.login);

export default router;