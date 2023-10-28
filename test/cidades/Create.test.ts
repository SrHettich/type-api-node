import { StatusCodes } from "http-status-codes"
import { testServer } from "../jest.setup"

describe('Cidades - Create', () =>{

    it('Cria registro', async () =>
    {
        const res = await testServer.post('/cidades').
        send({ 
            nome: 'Belford Roxo',
            estado: 'Rio de Janeiro'
        })

        expect(res.statusCode).toEqual(StatusCodes.CREATED)

        expect(typeof res.body).toEqual('number')
    })
    
    it('Cria registro com nome pequeno', async () =>
    {
        const res = await testServer.post('/cidades').
        send({ 
            nome: 'Be',
            estado: 'Rio'
        })

        expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST)

        expect(res.body).toHaveProperty('errors.body')
    })

    it('Cria registro com nome pequeno', async () =>
    {
        const res = await testServer.post('/cidades').
        send({ 
            nome: 'Belford',
            estado: ''
        })

        expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST)

        expect(res.body).toHaveProperty('errors.body.estado')
    })
})

