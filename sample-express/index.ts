import { routeHello, routeAPINames, routeWeather } from './routes.js'
import express, { Request, Response } from 'express'

const server = express()
const port = 3000

server.get('/hello', function (_req: Request, res: Response): void {
    const response = routeHello()
    res.send(response)
})

server.get('/api/names', async function (_req: Request, res: Response): void {
    let response: string
    try {
        response = await routeAPINames()
        res.send(response)
    } catch (e) {
        console.log(e)
    }
})

server.get('/api/weather/:zipcode', )

server.listen(port, function (): void {
    console.log('Listening on ' + port)
})