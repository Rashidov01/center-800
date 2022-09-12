import React from "react";
import "./head.scss";

export default function Head({ title }) {
  return (
    <div className="head">
      <h2 className="head__title">{title}</h2>
    </div>
  );
}
