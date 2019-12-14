import React from "react";
import "./index.css";

export default function Header() {
  return (
    <header>
      <h2>facebook</h2>
      <div id="myaccount">
        <p>Meu perfil</p>
        <div id="avatar">
          <i className="fa fa-user-circle"></i>
        </div>
      </div>
    </header>
  );
}
