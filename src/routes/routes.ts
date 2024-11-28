import { Router,Request,Response } from "express";

const router = Router();

router.get("/test",(req:Request,res:Response)=>{            
   throw new Error("erro ao fazer a requisição");
});

export default router;