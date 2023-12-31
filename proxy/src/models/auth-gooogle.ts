import User from "./user";

export interface AuthGoogleRequest {
    token: string;
};

export interface AuthGoogleResponse {
    message: string;
    signedIn: boolean;
}

export interface AuthorizedGoogleResponse extends AuthGoogleResponse {
    user: User;
    jwt: string
}