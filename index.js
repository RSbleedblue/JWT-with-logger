import express, { json } from 'express';
import router from './Routes/userRoutes.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import customLogger from './middleware/Logger.js';
const app = express();

app.use(morgan("dev"));
app.use(customLogger);
dotenv.config();

app.use(json());
app.use("/api",router);

export default app;