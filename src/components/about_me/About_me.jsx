import "./about_me.css";

export default function About_me() {
  return (
    <div className="About_me">
      <div className="About_me_block">
        <p className="About_me_block_title">About me</p>
        <hr className="hr_sep" />
        <div className="About_me_block_separate">
          <div className="About_me_block_info">
            <div className="About_me_block_info_text">
              <img src="Pictures/at.png" />
              <p className="About_me_block_info_text_highl">shaq</p>
            </div>
            <div className="About_me_block_info_text">
              <img src="Pictures/speech-bubble-with-text-lines.png" />
              <p>Shaq Donalds</p>
            </div>
            <div className="About_me_block_info_text">
              <img src="Pictures/birthday-cake.png" />
              <p>March 6, 1972</p>
            </div>
            <div className="About_me_block_info_text">
              <img src="Pictures/home.png" />
              <p className="About_me_block_info_text_highl">Newark, USA</p>
            </div>
          </div>
          <hr className="hr_sep2" />
          <div className="About_me_block_statistics">
            <div className="stat_cols">
              <p>20</p>
              <p>Friends</p>
              <div className="stat_cols_images">
                <img className="stat_cols_images1" src="Pictures/ramzi.jpg" />
                <img className="stat_cols_images2" src="Pictures/kianu.jpg" />
                <img
                  className="stat_cols_images3"
                  src="Pictures/megan-fox.jpg"
                />
              </div>
            </div>
            <div className="stat_cols">
              <p>27.6M</p>
              <p>Followers</p>
              <div className="stat_cols_images">
                <img className="stat_cols_images1" src="Pictures/bale.jpeg" />
                <img className="stat_cols_images2" src="Pictures/albeni.jpg" />
                <img className="stat_cols_images3" src="Pictures/3ba.jpg" />
              </div>
            </div>
            <div className="stat_cols">
              <p>5</p>
              <p>Following</p>
              <div className="stat_cols_images">
                <img className="stat_cols_images1" src="Pictures/flag.png" />
                <img className="stat_cols_images2" src="Pictures/bb_logo.png" />
                <img className="stat_cols_images3" src="Pictures/joseph.jfif" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
