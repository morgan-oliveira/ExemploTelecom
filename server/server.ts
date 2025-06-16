import express from "express";
import cors from 'cors';
import routes from './routes/';

const server = express();
const PORT = process.env.PORT || 3000;
server.use(cors());
server.use(express.json());
server.use('/api', routes);

server.listen(PORT, () => {
    console.log('Servidor backend rodando na porta',PORT);
});