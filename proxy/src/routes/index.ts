import express from 'express';
import PingController from '../controllers/ping';
import ArticlesController from '../controllers/articles';

const router = express.Router();
const articlesController = new ArticlesController();

router.get("/ping", async (_req, res) => {
    const controller = new PingController();
    const response = await controller.getMessage();

    return res.send(response);
})

router.get("/articles", async (_req, res) => {
    const response = await articlesController.getArticles();

    return res.send(response);
})

router.post("/articles", async (_req, res) => {
    const response = await articlesController.createArticle(_req.body);

    return res.send(response);
})

export default router; 