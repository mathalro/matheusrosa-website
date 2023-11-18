import { Get, Route } from "tsoa";
import { PingResponse } from "../models/ping"

@Route("ping")
export default class PingController {
    @Get("/")
    public async getMessage(): Promise<PingResponse> {
        return {
            message: "pong"
        };
    }
}