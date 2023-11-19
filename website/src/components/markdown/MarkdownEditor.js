import React, { useEffect, useState } from "react";
import axios from "axios";

const MarkdownEditor = () => {
    const [articles, setArticles] = useState();

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get("http://matheusrosa.com/api/articles");
            setArticles(response.data.articles);
        };

        getData();
    }, []);

    return (
        <>
            <h1>Articles</h1>
            {
                articles && articles.map(a => 
                    <>
                        <h2>{a.title}</h2>
                        <span>{ (new Date(1700349500)).toLocaleDateString() }</span>
                        <p>{a.body}</p>
                    </>
                )
            }
        </>
    );
};

export default MarkdownEditor;