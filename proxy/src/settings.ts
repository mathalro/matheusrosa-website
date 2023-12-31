interface Settings {
    APP_BASE_URL: string;
    JWT_SECRET: string;
    ALLOW_ORIGIN: string;
};

const settings: Settings = {
    APP_BASE_URL: "https://jq46gnahr6.execute-api.eu-west-1.amazonaws.com/prod",
    JWT_SECRET: "secret",
    ALLOW_ORIGIN: process.env.DEV ? "http://localhost:3000" : "https://matheusrosa.com"
}

export default settings;
