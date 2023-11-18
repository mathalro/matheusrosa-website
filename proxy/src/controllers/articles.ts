import { Body, Get, Post, Route } from "tsoa";
import { CreateArticleRequest, CreateArticleResponse, DescribeArticlesRequest, DescribeArticlesResponse } from "../models/article";
import crypto from "crypto";

@Route("articles")
export default class ArticlesController {

    @Get()
    public async getArticles(): Promise<DescribeArticlesResponse> {
        return {
            articles: [
                {
                    userId: "mathalro",
                    title: "testing",
                    body: "### Testing",
                    createdAt: Math.floor(Date.now() / 1000),
                    id: crypto.randomUUID()
                }
            ]
        };
    }

    @Post()
    public async createArticle(@Body() requestBody: CreateArticleRequest): Promise<CreateArticleResponse> {
        return {
            article: {
                userId: "mathalro",
                title: "testing",
                body: "### Testing",
                createdAt: Math.floor(Date.now() / 1000),
                id: crypto.randomUUID()
            }
        }
    }
}