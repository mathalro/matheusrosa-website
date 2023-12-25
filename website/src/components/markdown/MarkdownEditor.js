import React from 'react';
import { useState } from 'react';
import Markdown from "react-markdown";

import "./MarkdownEditor.css";

const MarkdownEditor = () => {
    const initialTitle = "Article Title...";
    const initialText = "Write your content here...";

    const [title, setTitle] = useState(initialTitle);
    const [text, setText] = useState(initialText);
    const [showPreview, setShowPreview] = useState(true);

    const editText = (e) => {
        setText(e.target.value);
    }

    const editTitle = (e) => {
        setTitle(e.target.value);
    }

    const flipPreview = () => {
        setShowPreview(!showPreview);
    }

    return (
        <>
            <div className="editor-form">
                <input type="text" className="editor-title" placeholder={initialTitle} value={title} onChange={editTitle} />
                <div className="editor-markdown">
                    <div className="editor-markdown-widgets">
                    <a className="editor-markdown-preview" onClick={flipPreview}>preview</a>
                    </div>
                    <div className="editor-markdown-content">
                        <div className="editor-markdown-item">
                            <textarea className="editor-markdown-textarea" rows="10" type="text" placeholder={initialText} value={text} onChange={editText} />
                        </div>
                        { showPreview ? <Markdown className="editor-markdown-item">{text}</Markdown> : null }
                    </div>
                </div>
            </div>
        </>
    );
};

export default MarkdownEditor;