import "./main_posts.css";
import { useState, useEffect } from "react";

export default function Main_posts() {
  const [displayModal, setDisplayModal] = useState(false);
  const [displayModal1, setDisplayModal1] = useState(false);
  const [displayModal2, setDisplayModal2] = useState(false);
  const onClickOutside = (e) => {
    if (e.target.localName !== "img") {
      setDisplayModal(false);
      setDisplayModal1(false);
      setDisplayModal2(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", onClickOutside);
    return () => window.removeEventListener("click", onClickOutside);
  }, []);

  return (
    <div className="Main_posts">
      {displayModal && (
        <div
          style={{
            position: "absolute",
            left: "400px",
            top: "500px",
          }}
        >
          <img
            className="Main_post_content_img_extended"
            src="Pictures/1tYs0KF.jpg"
          />
          <p class="mod_win_close">X</p>
        </div>
      )}

      {displayModal1 && (
        <div
          style={{
            position: "absolute",
            left: "400px",
            top: "850px",
          }}
        >
          <img
            className="Main_post_content_img_extended"
            src="Pictures/brothers_primos.jpg"
          />
          <p class="mod_win_close">X</p>
        </div>
      )}

      {displayModal2 && (
        <div
          style={{
            position: "absolute",
            left: "400px",
            top: "1200px",
          }}
        >
          <img
            className="Main_post_content_img_extended"
            src="Pictures/women.jpg"
          />
          <p class="mod_win_close">X</p>
        </div>
      )}

      <div className="Main_post">
        <div className="Main_post_header">
          <img src="Pictures/kfc.jpg" />
          <div className="Main_post_un_loc">
            <p className="Main_post_username">KFC</p>
            <p className="Main_post_location">Colorado state</p>
          </div>
          <p className="Main_post_time">5 minutes ago...</p>
        </div>
        <div className="Main_post_content">
          <img
            className="Main_post_content_img"
            src="Pictures/1tYs0KF.jpg"
            onClick={() => setDisplayModal(true)}
          />

          <div className="Main_post_content_text">
            <p className="Main_post_content_text_title">We're back again!</p>
            <p className="Main_post_content_text_txt">
              And now we have a special offer for you! We present to you our new
              combo, tender chicken according to a special recipe, refreshing
              boxing master, as well as our incredibly crispy potatoes with
              sauce will amaze you. Quality depends on us, pleasure depends on
              you.
            </p>
          </div>
        </div>
      </div>
      <div className="Main_post">
        <div className="Main_post_header">
          <img src="Pictures/better_call_saul.png" />
          <div className="Main_post_un_loc">
            <p className="Main_post_username">Better Call Saul</p>
            <p className="Main_post_location">Albuquerque new Mexico</p>
            <p className="Main_post_location">AMC productions</p>
          </div>
          <p className="Main_post_time">An hour ago...</p>
        </div>
        <div className="Main_post_content">
          <img
            className="Main_post_content_img"
            src="Pictures/brothers_primos.png"
            onClick={() => setDisplayModal1(true)}
          />

          <div className="Main_post_content_text_bcc">
            <p className="Main_post_content_text_bcc_title">
              Speedy justice for you!!!
            </p>
            <p className="Main_post_content_text_bcc_txt">
              The latest episodes of the new season will be on your monitors
              soon! What will happen to Saul Goodman (or Jimmy McGill)? What are
              the seven Salamanders up to and what decision will Gustavo make?
              You can find out all this in the last days of this month. JMM.
            </p>
            <hr />
            <input
              className="leave_comment_ta"
              type="text"
              placeholder="Leave a comment..."
            />
            <div className="Main_post_content_comments">
              <div className="Main_post_content_comment">
                <div>
                  <img
                    class="Main_post_content_comment_ava"
                    src="Pictures/mike.png"
                  />
                </div>
                <div className="Main_post_content_comment_texts">
                  <p className="Main_post_content_comment_username">John</p>
                  <p className="Main_post_content_comment_text">
                    Oh man, thats Awesome! Better call Saul!
                  </p>
                  <p className="Main_post_content_comment_time">
                    10 min ago...
                  </p>
                </div>
              </div>
              <div className="Main_post_content_comment">
                <div>
                  <img
                    class="Main_post_content_comment_ava"
                    src="Pictures/cool_mate.png"
                  />
                </div>
                <div className="Main_post_content_comment_texts">
                  <p className="Main_post_content_comment_username">
                    Cool Mate
                  </p>
                  <p className="Main_post_content_comment_text">
                    I guess that would be the best season ever made.
                    <br />
                    ps. RIP Nachos
                  </p>
                  <p className="Main_post_content_comment_time">
                    55 min ago...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Main_post">
        <div className="Main_post_header">
          <img src="Pictures/rosie.jpg" />
          <div className="Main_post_un_loc">
            <p className="Main_post_username">Rosie</p>
            <p className="Main_post_location">Rome. Italy</p>
          </div>
          <p className="Main_post_time">25 october...</p>
        </div>
        <img
          className="Main_post_wom_img"
          src="Pictures/women.jpg"
          onClick={() => setDisplayModal2(true)}
        />
      </div>
    </div>
  );
}
