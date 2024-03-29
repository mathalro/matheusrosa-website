import express, { Application, NextFunction } from 'express';
import morgan from 'morgan';
import Router from './routes/index';
import swaggerUi from "swagger-ui-express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import logger from './log4js';
import requestLogger from './middlewares/logger-middleware';

logger.info("Configuring application.");

const PORT = process.env.API_PORT || 8000

const app: Application = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = ['http://localhost:8000', 'http://localhost:8080', 'http://localhost:3000', 'http://matheusrosa.com', 'https://matheusrosa.com', 'https://www.matheusrosa.com', 'http://www.matheusrosa.com'];
logger.info(`Configuring cors for the allowed origins '${allowedOrigins}'`);

const options: cors.CorsOptions = {
    origin: allowedOrigins,
    credentials: true
};
app.use(cors(options));
app.use(cookieParser());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", 'true');
    next();
});

app.use(requestLogger);

app.use("/api", Router);
app.use("/", Router);
app.use(
    ["/openapi", "/docs", "/swagger"],
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        }
    })
);

logger.info(`App will be running in port '${PORT}'`)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
});