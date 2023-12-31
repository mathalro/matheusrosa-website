import { Body, Post, Route } from "tsoa";
import { AuthGoogleRequest, AuthGoogleResponse, AuthorizedGoogleResponse } from "../models/auth-gooogle";
import settings from "../settings";
import { OAuth2Client } from "google-auth-library";
import axios from "axios";
import User from "../models/user";

const clientId = "880835565817-8u67og63ln6q7pqtds4au3hfvij7jioc.apps.googleusercontent.com";
const client = new OAuth2Client();

const apiUrl = `${settings.APP_BASE_URL}/users`;

const unauthorizedResponse = {
    message: "It was not possible to authenticate user.",
    signedIn: false
};

@Route("auth/google")
export default class AuthGoogleController {

    @Post("")
    public async login(@Body() request: AuthGoogleRequest): Promise<AuthGoogleResponse> {
        const token = request.token;

        try {
            console.log(token);

            const ticket = await client.verifyIdToken({
                idToken: token,
                audience: clientId
            });

            const payload = ticket.getPayload();

            if (payload === undefined) {
                return unauthorizedResponse;
            }

            const user: User = {
                userId: payload.email || "",
                name: payload.name || "",
                picture: payload.picture || ""
            };

            console.log(`Saving user: ${user}`)

            await axios.post(apiUrl, user);

            const response: AuthorizedGoogleResponse = {
                message: "User is authorized.",
                user: user,
                signedIn: true,
                jwt: ""
            };

            return response;
        } catch (e) {
            console.log(e)
            return unauthorizedResponse
        }
    }
}