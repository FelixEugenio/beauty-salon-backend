import express , { Request, Response ,NextFunction} from 'express';
import router from './routes/routes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(router);


app.listen(3000, () => {
    console.log('Server is running on ');
});
