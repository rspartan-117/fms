import {procedure, router} from "../trpc";
import {z} from "zod";
import { PrismaClient } from "@prisma/client";
const {prisma} = new PrismaClient();

export const userRouter = router({
    getUsers:procedure.query(()=>{
       return prisma.user.findMany();
    }),
    addUser:procedure.input(z.object({name:z.string(),race : z.string()}))
    .mutation((opts) =>{
        const {input} = opts;
    }),
});

