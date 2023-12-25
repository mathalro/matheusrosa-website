import "./Article.css";

const Article = ({ title, timestamp, text }) => {
    return (
        <div className="app-article">
            <h3>{title}</h3>
            <span>{ (new Date(timestamp)).toLocaleDateString() }</span>
            <p>{text}</p>
        </div>
    )
}

export default Article;