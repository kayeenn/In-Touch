import "./profile_header.css";
import Header from "../header/Header";
export default function Profile_header() {
  return (
    <>
      <div className="Profileh">
        <div className="Profile_imgs">
          <p className="Profile_name">shaq</p>
          <img className="Profile_ava" src="Pictures/shaq_ava.jpg" />
          <img
            className="Profile_background"
            src="Pictures/background_prof.png"
          />
        </div>
      </div>
    </>
  );
}
