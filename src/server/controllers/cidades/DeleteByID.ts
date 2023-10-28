import { Request, RequestHandler, Response } from "express"
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/validation"
import { StatusCodes } from "http-status-codes"

interface IParamProps
{
    id?: number

}

const paramValidation: yup.Schema<IParamProps> = yup.object().shape({
    id: yup.number().required().integer().moreThan(0)
})


export const deleteByIdValidation = validation({
    params: paramValidation
})

export const deleteById = async (req: Request<IParamProps>, res: Response) =>
{
    if(Number(req.params.id) === 111111)

       return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
            default: 'Registro não encontrado'
        }
    })

    return res.status(StatusCodes.NO_CONTENT).send()
}