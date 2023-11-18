export interface DescribeArticlesRequest { };

export interface DescribeArticlesResponse {
    articles: Article[]
};

export interface CreateArticleRequest {
    article: Article
}

export interface CreateArticleResponse {
    article: Article
}

interface Article {
    userId: string,
    createdAt: number,
    id: string,
    title: string,
    body: string
};