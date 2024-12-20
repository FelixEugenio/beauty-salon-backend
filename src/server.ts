import express , { Request, Response ,NextFunction} from 'express';
import 'express-async-errors';
import router from './routes/routes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);
app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
    if(err instanceof Error){
        return res.status(400).json({
            error:err.message
        })
    }
    return res.status(500).json({
        status:"error",
        message:"Internal server error"
    })
})


app.listen(3000, () => {
    console.log('Server is running on ');
});
