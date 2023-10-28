import { StatusCodes } from "http-status-codes"
import { testServer } from "../jest.setup"

describe('Cidades - UpdateById', () =>{

    it('Atualiza registro por ID', async () =>
    {
        const res = await testServer.post('/cidades').
        send({ 
            nome: 'Belford Roxo',
            estado: 'Rio de Janeiro'
        })

        expect(res.statusCode).toEqual(StatusCodes.CREATED)

        const resUpdate = await testServer.put(`/cidades/${res.body}`).send({
            nome: 'Realengo'
        })

        expect(resUpdate.statusCode).toEqual(StatusCodes.NO_CONTENT)
        
    })
    
    it('Tenta atualizar um registro que não existe', async () =>
    {
        const res = await testServer.put('/cidades/111111')
        .send({ nome: 'ioala'})

        expect(res.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR)
        expect(res.body).toHaveProperty('errors.default')
    })

})

