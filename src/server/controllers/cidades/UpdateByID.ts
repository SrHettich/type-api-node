import { Request, RequestHandler, Response } from "express"
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/validation"
import { StatusCodes } from "http-status-codes"

interface IParamProps
{
    id?: number
}

interface IBodyProps
{
    nome:string
}

const paramValidation: yup.Schema<IParamProps> = yup.object().shape({
    id: yup.number().required().integer().moreThan(0)
})

const bodyValidation: yup.Schema<IBodyProps> = yup.object().shape({
    nome: yup.string().required().min(3)
})


export const updateIdValidation = validation({
    params: paramValidation, body:bodyValidation
})

export const updateById = async (req: Request<IParamProps>, res: Response) =>
{
    if(Number(req.params.id) === 111111)

   return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
            default: 'Registro não encontrado'
        }
    })

    return res.status(StatusCodes.NO_CONTENT).send()
}