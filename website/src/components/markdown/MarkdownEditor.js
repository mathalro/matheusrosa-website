import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Markdown from "react-markdown";
import axios from "axios";
import Button from 'react-bootstrap/Button';

import "./MarkdownEditor.css";

const MarkdownEditor = () => {
    const initialTitle = "Article Title...";
    const initialText = "Write your content here...";

    const [title, setTitle] = useState(initialTitle);
    const [text, setText] = useState(initialText);
    const [showPreview, setShowPreview] = useState(true);

    const navigate = useNavigate();

    const editText = (e) => {
        setText(e.target.value);
    }

    const editTitle = (e) => {
        setTitle(e.target.value);
    }

    const flipPreview = () => {
        setShowPreview(!showPreview);
    }

    const publishArticle = async () => {
        if (title == "" || text == "") {
            alert("Article title or article text is empty.");
            return;
        }

        try {
            await axios.post("http://localhost:8000/api/articles", {
                "article": {
                    "userId": "mathalro",
                    "createdAt": Math.floor(Date.now() / 1000),
                    "id": crypto.randomUUID,
                    "title": title,
                    "body": text
                }
            });

            navigate("/");
        } catch (e) {
            alert("Something went wrong. Try again later.");
        }
    };

    return (
        <>
            <div className="editor-form">
                <Button variant="btn btn-secondary" className="editor-publish" onClick={publishArticle}>PUBLISH</Button>
                <input type="text" className="editor-title" placeholder={initialTitle} value={title} onChange={editTitle} />
                <div className="editor-markdown">
                    <div className="editor-markdown-widgets">
                        <a className="editor-markdown-preview" onClick={flipPreview}>preview</a>
                    </div>
                    <div className="editor-markdown-content">
                        <div className="editor-markdown-item">
                            <textarea className="editor-markdown-textarea" rows="10" type="text" placeholder={initialText} value={text} onChange={editText} />
                        </div>
                        {showPreview ? <Markdown className="editor-markdown-item">{text}</Markdown> : null}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MarkdownEditor;