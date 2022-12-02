import "./contacts.css";

export default function Contacts() {
  return (
    <div className="Contacts">
      <div className="settings">
        <img
          className="settings_ava"
          src="Pictures\106010276-1576017489582shaq.jpg.de07492de7098a6b6f86d5fd46aa515c.jpg"
        />
        <img className="settings_status" src="Pictures\status 1.png" />
        <img className="settings_new" src="Pictures\new-message 1.png" />
        <img className="settings_dots" src="Pictures\dots 1.png" />
      </div>

      <hr className="hr_contacts" />

      <div className="people">
        <div className="babe">
          <img
            src="Pictures\shakil-o-nil-i-nikki-aleksander-zvezdnye-pary-s-ogromnoj.jpg"
            alt=""
          />
          <p className="Name">
            Babe <br />{" "}
            <p className="Text">You: Can you grab some chicken and sriracha?</p>
          </p>
        </div>

        <hr className="hr_contacts" />

        <div className="babe">
          <img
            src="https://i.pinimg.com/originals/57/87/4e/57874eda40d95d42cdeb01737971f2b4.jpg"
            alt=""
          />
          <p className="Name">
            Mike Tyson <br />{" "}
            <p className="Text">Take the mushrooms next time</p>
          </p>
        </div>

        <hr className="hr_contacts" />

        <div className="babe">
          <img src="Pictures\F2-1600x1104.jpeg" alt="" />
          <p className="Name">
            Charles(Loser ) <br />{" "}
            <p className="Text">
              You: When you score next time, try aiming at the ring
            </p>
          </p>
        </div>

        <hr className="hr_contacts" />

        <div className="babe">
          <img src="Pictures\567078f2dd089528058b474a.webp" alt="" />
          <p className="Name">
            Kobe <br /> <p className="Text">You: Miss u brother...</p>
          </p>
        </div>

        <hr className="hr_contacts" />

        <div className="babe">
          <img src="Pictures\520349-Soccer-FC-Barcelona.jpg" alt="" />
          <p className="Name">
            Leo (Football guy) <br />{" "}
            <p className="Text">You: Come on, who will score more balls?</p>
          </p>
        </div>
      </div>
    </div>
  );
}
