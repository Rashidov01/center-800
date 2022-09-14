import React from "react";
import "./head.scss";

export default function Head({ title, btn }) {
  return (
    <div className="head">
      <div className="head-inner">
        <h2 className="head__title">{title}</h2>
        {btn ? (
          <button className="head__btn" type="button">
            {btn}
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
