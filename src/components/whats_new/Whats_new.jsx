import "./whats_new.css";

export default function Whats_new() {
  return (
    <div className="Whats_new">
      <div className="Whats_new_wrapper">
        <img className="WN_profile_ava" src="Pictures/shaq_ava.jpg" />
        <input placeholder="What's new?" className="Whats_new_input" />
        <img className="icons" src="Pictures/camera.png" />
        <img className="icons" src="Pictures/text.png" />
        <hr className="Whats_new_hr" />
        <img className="icons" src="Pictures/thumbtacks.png" />
        <img className="icons" src="Pictures/padlock.png" />
      </div>
    </div>
  );
}
