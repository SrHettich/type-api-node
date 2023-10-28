import { Request, RequestHandler, Response } from "express"
import * as yup from 'yup'
import { validation } from "../../shared/middlewares/validation"
import { StatusCodes } from "http-status-codes"

interface IQueryProps
{
    page?: number,
    limit?: number,
    filter?: string,
}

const queryValidation: yup.Schema<IQueryProps> = yup.object().shape({
    page: yup.number().moreThan(0),
    limit: yup.number().moreThan(0),
    filter: yup.string(),
})


export const getAllValidation = validation({
    query: queryValidation
})

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    res.setHeader('access-control-expose-headers', 'x-total-count');
    res.setHeader('x-total-count', 1);
  
    return res.status(StatusCodes.OK).json([
      {
        id: 1,
        nome: 'Caxias do Sul',
      }
    ]);
  };