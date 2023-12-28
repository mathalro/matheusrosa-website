import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "./Article";
import config from "../../config";

const MarkdownEditor = () => {
    const [articles, setArticles] = useState();

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(`https://${config.baseUrl}/api/articles`);
            setArticles(response.data.articles);
        };

        getData();
    }, []);

    return (
        <>
            {
                articles && articles.map(a => 
                    <Article title={a.title} date={1700349500} text={a.body} />
                )
            }
        </>
    );
};

export default MarkdownEditor;