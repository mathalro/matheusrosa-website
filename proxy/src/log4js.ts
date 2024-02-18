import log4js from 'log4js';

console.log("Configuring log4j");

log4js.configure({
    appenders: {
        console: { type: 'console', "layout": { "type": "pattern", "pattern": "%d - %c:[%p]: %m" } },
        fileLog: { type: 'file', filename: '/var/log/application/application-api.log' }
    },
    categories: {
        default: { appenders: ['console', 'fileLog'], level: 'info' },
    }
});

const logger = log4js.getLogger('application-api');

export default logger;