import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-inner">
        <Link to="/">
          <div style={{ color: "white" }} className="logo">
            Fitness
          </div>
        </Link>

        <div className="footer-inner2">
          <Link className="text2" to="/">
            <div>Home</div>
          </Link>

          <Link className="text2" to="/exercise">
            <div>Exercise</div>
          </Link>
        </div>
      </div>

      <div className="text3">
        Copyright © 2023 Fitness. All rights reserved.{" "}
      </div>
    </div>
  );
}
