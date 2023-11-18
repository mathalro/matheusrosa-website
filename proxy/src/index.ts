import express, { Application, NextFunction } from 'express';
import morgan from 'morgan';
import Router from './routes/index';
import swaggerUi from "swagger-ui-express";

const PORT = process.env.API_PORT || 8000

const app: Application = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const APP_URL = "https://jq46gnahr6.execute-api.eu-west-1.amazonaws.com/prod/articles";

app.use(Router);
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