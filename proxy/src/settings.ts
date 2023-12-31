interface Settings {
    APP_BASE_URL: string;
    JWT_SECRET: string;
};

const settings: Settings = {
    APP_BASE_URL: "https://jq46gnahr6.execute-api.eu-west-1.amazonaws.com/prod",
    JWT_SECRET: "secret"
}

export default settings;
