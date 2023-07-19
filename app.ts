import express from 'express'
import morgan from 'morgan';
import cors from 'cors';
import rutas from './rutas'

const app = express()

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api" , rutas);




export default app;
