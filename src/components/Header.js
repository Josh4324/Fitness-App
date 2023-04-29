import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link className="logo" to="/">
        <div>Fitness</div>
      </Link>

      <div className="header-inner">
        <Link className="header-text" to="/">
          <div>Home</div>
        </Link>
        <Link className="header-text" to="/exercise">
          <div>Exercise</div>
        </Link>
      </div>
    </div>
  );
}
