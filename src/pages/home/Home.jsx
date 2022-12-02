import Header from "../../components/header/Header";
import Recent from "../../components/recent/Recent";
import Recom_channel from "../../components/recommended_channels/Recom_channel";
import Main_posts from "../../components/main_posts/Main_posts";
import Might_know from "../../components/might_know/Might_know";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Recent />

      <div className="Main">
        <Recom_channel />
        <Main_posts />
        <Might_know />
      </div>
    </>
  );
};

export default Home;
