import "./messages.css";
import React from "react";
import Header from "../../components/header/Header";
import Contacts from "../../components/contacts/Contacts";
import Dialog from "../../components/dialog/Dialog";
import Menu from "../../components/menu/Menu";

export default function Messages() {
  return (
    <>
      <Header />

      <div className="Content">
        <Contacts />
        <hr className="vert" />
        <Dialog />
      </div>
    </>
  );
}
