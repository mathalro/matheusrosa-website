import logger from '../log4js';

const requestLogger = (req: any, res: any, next: any) => {
    const method = req.method;
    const url = req.url;
    
    logger.info(`Received '${method}' on url '${url}'`);

    if (method === "POST") {
        logger.info(`Body ${req.body}`);
    }

    next();

    logger.info(`Returning response with status ${res.statusCode}`);
}

export default requestLogger;