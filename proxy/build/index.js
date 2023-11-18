"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const PORT = process.env.API_PORT || 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const APP_URL = "https://jq46gnahr6.execute-api.eu-west-1.amazonaws.com/prod/articles";
app.get('/api', (req, res) => res.send('Hello World from Proxy!'));
app.get('/api/articles', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(APP_URL);
        console.log(response.data);
        if (response) {
            res.status(200).send(response.data);
        }
    }
    catch (error) {
        res.status(500).send('Error');
        console.log(error);
    }
}));
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`);
});
