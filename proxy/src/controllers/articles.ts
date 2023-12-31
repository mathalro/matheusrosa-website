import { Body, Get, Post, Route } from "tsoa";
import { CreateArticleRequest, DescribeArticlesResponse } from "../models/article";

import axios from "axios";
import settings from "../settings";

const apiUrl = `${settings.APP_BASE_URL}/articles`;

@Route("articles")
export default class ArticlesController {

    @Get()
    public async getArticles(): Promise<DescribeArticlesResponse> {
        const response = await axios.get(apiUrl);
        return {
            articles: response.data
        };
    }

    @Post()
    public async createArticle(@Body() request: CreateArticleRequest): Promise<void> {
        await axios.post(apiUrl, request.article);
    }
}