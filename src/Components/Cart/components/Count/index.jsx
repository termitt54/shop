import React, { useState } from "react";
import "./index.scss";

export const Count = ({itemCount}) => {

  return (
    <div className="count item__count">
      <button
        className="count__minus"
      >
        -
      </button>

      <span className="count__num">{itemCount}</span>


      <button  className="count__plus">
        +
      </button>
    </div>
  );
};
