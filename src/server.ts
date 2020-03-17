import express, {Request, Response} from "express";
import {getCustomRepository} from "typeorm";
import {UserRepository} from "./repository/UserRepository";

const server = express();

server.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
});

server.get('/users', async (req: Request, res: Response) => {
    const userRepository = getCustomRepository(UserRepository);
    const users = await userRepository.find();
    res.json(users);
});

export default server;
