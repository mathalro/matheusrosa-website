import express, { Application, NextFunction } from 'express';
import morgan from 'morgan';
import Router from './routes/index';
import swaggerUi from "swagger-ui-express";
import cors from 'cors';

const PORT = process.env.API_PORT || 8000

const app: Application = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = ['http://localhost:8080', 'http://localhost:3000', 'http://matheusrosa.com', 'https://matheusrosa.com'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));

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

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
});