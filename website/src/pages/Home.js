import TitleContent from "../components/common/TitleContent";
import ArticleList from "../components/articles/ArticleList";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const addItem = async () => {
        navigate("/write");
    };

    return (
        <>
            <TitleContent name="Articles" menuAction={addItem} />
            <ArticleList />
        </>
    );
}

export default Home;