import "./profile_posts.css";
import { useState, useEffect } from "react";

export default function Profile_posts() {
  const [displayModal, setDisplayModal] = useState(false);
  const [displayModal1, setDisplayModal1] = useState(false);

  const onClickOutside = (e) => {
    if (e.target.localName !== "img") {
      setDisplayModal(false);
      setDisplayModal1(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", onClickOutside);
    return () => window.removeEventListener("click", onClickOutside);
  }, []);

  return (
    <div className="Profile_posts">
      {displayModal && (
        <div
          style={{
            position: "absolute",
            left: "400px",
            top: "900px",
          }}
        >
          <img
            className="Main_post_content_img_extended"
            src="Pictures/shaq-dwight-usats-scaled.jpg"
          />
          <p class="mod_win_close">X</p>
        </div>
      )}

      {displayModal1 && (
        <div
          style={{
            position: "absolute",
            left: "400px",
            top: "1300px",
            backgroundColor: "black",
          }}
        >
          <img
            className="Main_post_content_img_extended"
            src="Pictures/brothers_primos.jpg"
          />
          <p class="mod_win_close">X</p>
        </div>
      )}
      <div className="Profile_post">
        <div className="Profile_post_header">
          <img src="Pictures/shaq_ava.jpg" />
          <div className="Profile_post_un_loc">
            <p className="Profile_post_username">Shaq</p>
            <p className="Profile_post_location">USA</p>
          </div>
          <p className="Profile_post_time">20 minutes ago...</p>
        </div>
        <div className="Profile_post_content">
          <img
            className="Profile_post_content_img"
            src="Pictures/shaq-dwight-usats-scaled.png"
            onClick={() => setDisplayModal(true)}
          />
          <div className="Profile_post_content_text_bcc">
            <p className="Profile_post_content_text_title">
              It was a tough game
            </p>
            <p className="Profile_post_content_text_txt">
              But we did it anyway. Thanks to the fans on stage, on the Internet
              and who watched us on TV! We really appreciate this support and
              strive to make our games even more spectacular. If it wasn't for
              you, we wouldn't have been able to go so far, to reach such
              heights. Thank you, you are the best!!!
            </p>
            <hr className="Profile_post_content_text_hr" />
            <input
              className="leave_comment"
              type="text"
              placeholder="Leave a comment..."
            />
            <div className="Profile_post_content_comments_shaq">
              <div className="Profile_post_content_comment">
                <div>
                  <img
                    class="Profile_post_content_comment_ava_shaq"
                    src="Pictures/lebron.png"
                  />
                </div>
                <div className="Profile_post_content_comment_texts_shaq">
                  <p className="Profile_post_content_comment_username">
                    Lebron
                  </p>
                  <p className="Profile_post_content_comment_text_shaq">
                    Man, you're really touched by something
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Profile_post">
        <div className="Profile_post_header">
          <img src="Pictures/better_call_saul.png" />
          <div className="Profile_post_un_loc">
            <p className="Profile_post_username">Better Call Saul</p>
            <p className="Profile_post_location">Albuquerque new Mexico</p>
            <p className="Profile_post_location">AMC productions</p>
          </div>
          <p className="Profile_post_time">An hour ago...</p>
        </div>
        <div className="Profile_post_content">
          <img
            className="Profile_post_content_img"
            src="Pictures/brothers_primos.png"
            onClick={() => setDisplayModal1(true)}
          />
          <div className="Profile_post_content_text_bcc">
            <p className="Profile_post_content_text_bcc_title">
              Speedy justice for you!!!
            </p>
            <p className="Profile_post_content_text_bcc_txt">
              The latest episodes of the new season will be on your monitors
              soon! What will happen to Saul Goodman (or Jimmy McGill)? What are
              the seven Salamanders up to and what decision will Gustavo make?
              You can find out all this in the last days of this month. JMM.
            </p>
            <hr className="Profile_post_content_text_bcc_hr" />
            <input
              className="leave_comment_ta"
              type="text"
              placeholder="Leave a comment..."
            />
            <div className="Profile_post_content_comments">
              <div className="Profile_post_content_comment">
                <div>
                  <img
                    class="Profile_post_content_comment_ava"
                    src="Pictures/mike.png"
                  />
                </div>
                <div className="Profile_post_content_comment_texts">
                  <p className="Profile_post_content_comment_username">John</p>
                  <p className="Profile_post_content_comment_text">
                    Oh man, thats Awesome! Better call Saul!
                  </p>
                  <p className="Profile_post_content_comment_time">
                    10 min ago...
                  </p>
                </div>
              </div>
              <div className="Profile_post_content_comment">
                <div>
                  <img
                    class="Profile_post_content_comment_ava"
                    src="Pictures/cool_mate.png"
                  />
                </div>
                <div className="Profile_post_content_comment_texts">
                  <p className="Profile_post_content_comment_username">
                    Cool Mate
                  </p>
                  <p className="Profile_post_content_comment_text">
                    I guess that would be the best season ever made.
                    <br />
                    ps. RIP Nachos
                  </p>
                  <p className="Profile_post_content_comment_time">
                    55 min ago...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
