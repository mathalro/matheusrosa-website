import TitleContent from "../components/common/TitleContent";
import ArticleList from "../components/articles/ArticleList";
import axios from "axios";

const Home = () => {
    const addItem = async () => {
        await axios.post("http://localhost:8000/api/articles", {
          "article": {
            "userId": "mathalro",
            "createdAt": Math.floor(Date.now() / 1000),
            "id": crypto.randomUUID,
            "title": "Generated Test",
            "body": "### Generated test"
          }});
      };
    
      return (
        <>
            <TitleContent name="Articles" menuAction={addItem}/>
            <ArticleList />
        </>
      );
}

export default Home;