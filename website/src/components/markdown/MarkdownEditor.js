import React from "react";
import MDEditor from '@uiw/react-md-editor';

const MarkdownEditor = () => {
    const [value, setValue] = React.useState("## Add your content");
    return (
        <div className="container">
            <MDEditor
                value={value}
                onChange={setValue}
            />
        </div>
    );
};

export default MarkdownEditor;