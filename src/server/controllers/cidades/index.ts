import * as create  from "./Create";
import * as getAll  from "./GetAll";
import * as getById from "./GetById"
import * as updateById from "./UpdateByID"
import * as deleteById from "./DeleteByID"

export const CidadesController = 
{
    ...create,
    ...getAll,
    ...getById,
    ...updateById,
    ...deleteById,
    
}