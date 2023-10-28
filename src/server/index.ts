import { server } from './server'

import 'dotenv/config'

server.listen(process.env.PORT || 3000, () =>
{
    console.log(`Rodando na porta ${process.env.PORT || 3000}`)
})