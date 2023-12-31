import express from 'express';
import PingController from '../controllers/ping';
import ArticlesController from '../controllers/articles';
import AuthGoogleController from '../controllers/auth-google';

import { AuthorizedGoogleResponse } from '../models/auth-gooogle';
import { createAccessToken } from '../helpers/jwt-helper';
import { authenticateToken } from '../middlewares/token-verifier';
import { request } from 'http';

const router = express.Router();
const articlesController = new ArticlesController();

router.get("/ping", async (_req, res) => {
    const controller = new PingController();
    const response = await controller.getMessage();

    return res.send(response);
})

router.post("/auth/google", async (_req, res) => {
    const controller = new AuthGoogleController();
    const response = await controller.login(_req.body);

    if (!response.signedIn) {
        res.status(401);

        return res.send(response);
    }

    const signedInResponse = response as AuthorizedGoogleResponse;
    const userJwt = createAccessToken(signedInResponse.user);

    signedInResponse.jwt = userJwt;
    res.cookie("user_token", userJwt, {
        maxAge: 60 * 60 * 2 * 1 * 1000, // 2 hours
        secure: true,
        httpOnly: false,
        sameSite: 'none',
        path: "/"
    });

    return res.send(signedInResponse);
})

router.get("/auth/verify", authenticateToken, async (_req, res) => {
    return res.send(true);
})

router.get("/articles", async (_req, res) => {
    const response = await articlesController.getArticles();

    return res.send(response);
})

router.post("/articles", authenticateToken, async (_req, res) => {
    const response = await articlesController.createArticle(_req.body);

    return res.send(response);
})

export default router;