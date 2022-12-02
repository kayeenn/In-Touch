import "./recent.css";
import Slider from "../Slider/Slider";
import Reactions from "../../components/reactions/Reactions";

export default function Recent() {
  return (
    <div className="Recent">
      <div className="Recent_post">
        <div className="Recent_post_header"></div>
        <div className="Recent_post_content">
          <Slider />
          <Reactions />
        </div>
      </div>
    </div>
  );
}
