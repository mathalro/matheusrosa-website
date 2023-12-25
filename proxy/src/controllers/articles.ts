import { Body, Get, Post, Route } from "tsoa";
import { CreateArticleRequest, CreateArticleResponse, DescribeArticlesRequest, DescribeArticlesResponse } from "../models/article";
import crypto from "crypto";
import axios from "axios";

const APP_URL = "https://jq46gnahr6.execute-api.eu-west-1.amazonaws.com/prod/articles";

@Route("articles")
export default class ArticlesController {

    @Get()
    public async getArticles(): Promise<DescribeArticlesResponse> {
        const response = await axios.get(APP_URL);
        return {
            articles: response.data
        };
    }

    @Post()
    public async createArticle(@Body() request: CreateArticleRequest): Promise<void> {
        const response = await axios.post(APP_URL, request.article);
    }
}