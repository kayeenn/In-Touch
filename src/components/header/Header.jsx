import "./header.css";
import Menu from "../menu/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Home", href: "/" },
    { value: "Profile", href: "/profile" },
    { value: "Messages", href: "/messages" },
  ];

  return (
    <div>
      <div className="header">
        <img
          class="Toggle"
          src="Pictures/Toggle.png"
          onClick={() => setMenuActive(!menuActive)}
        />

        <img class="logo_img" src="Pictures/logo-icon.png" />
        <h1>In Touch</h1>
        {menuActive && (
          <div className="burger">
            <Menu
              active={menuActive}
              setActive={setMenuActive}
              header={"Menu"}
              items={items}
            />
          </div>
        )}
      </div>
    </div>
  );
}
