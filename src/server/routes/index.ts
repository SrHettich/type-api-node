import { Router, Request, response} from "express";
import {CidadesController} from './../controllers'
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { StatusCodes } from "http-status-codes";

const router = Router()

const prisma = new PrismaClient()

router.get('/', (req, res) =>
{
    return res.send('Tá respondendo')
})



router.get("/cidades", CidadesController.getAllValidation,CidadesController.getAll)
router.get("/cidades/:id", CidadesController.getByIdValidation,CidadesController.getById)
router.put("/cidades/:id", CidadesController.updateIdValidation,CidadesController.updateById)
router.delete("/cidades/:id", CidadesController.deleteByIdValidation,CidadesController.deleteById)
router.post("/cidades", CidadesController.createValidation,CidadesController.create)

router.get('/users', async(req,res) =>
{
    const users = await prisma.user.findMany()

    return res.send({users})
})

router.post('/users', async (req, res) =>
{
    const createUserSchema = z.object({
        nome: z.string(),
        email: z.string().email(),
    })

    const {nome, email} = createUserSchema.parse(req.body)

    await prisma.user.create({
    data: {
        nome,
        email
    }
})

return res.status(StatusCodes.CREATED).send()

})

router.delete('/users/:id',async (req, res) => {

    await prisma.user.delete({
        where:{id: req.params.id}
    })

    return res.status(StatusCodes.OK).json("apagou")
} )

export { router }