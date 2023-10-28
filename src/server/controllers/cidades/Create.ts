import { Request, RequestHandler, Response } from "express"
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/validation"
import { StatusCodes } from "http-status-codes"

interface ICidade
{
    nome: string,
    estado?: string
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().min(3)
})


export const createValidation = validation({
    body: bodyValidation
})

export const create = async (req: Request<{},{}, ICidade>, res: Response) =>
{
    console.log(req.body)

    return res.status(StatusCodes.CREATED).json(2)
}