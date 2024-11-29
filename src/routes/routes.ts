import { Router} from "express";
import { UserController } from "../controllers/Users/userController";
import { authMiddleware } from "../middlewares/authMiddlewares/authMiddleware";

const router = Router();
const userController = new UserController();

router.post('/users',authMiddleware,userController.register);
router.post('/login',userController.login);
router.get('/profile');

export default router;