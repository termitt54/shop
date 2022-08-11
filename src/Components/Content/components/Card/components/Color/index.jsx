import React from "react";
import "./index.scss";

export const Color = ({ cardIndex, colorPrice, setColorPrice, setColor }) => {
  const pickColor = [
    {
      color: {
        backgroundColor: "#93dc68",
      },
      colorName: 'color',
      colorId: 'color',
      value: 'green'
    },
    {
      color: {
        backgroundColor: "#fc0505",
      },
      colorName: 'color',
      colorId: 'color',
      value: 'red'
    },
    {
      color: {
        backgroundColor: "#000000",
      },
      colorName: 'color',
      colorId: 'color',
      value: 'black'
    },
    {
      color: {
        backgroundColor: "#ffffff",
      },
      colorName: 'color',
      colorId: 'color',
      value: 'white'
    },
    {
      color: {
        backgroundColor: "#056ba9",
      },
      colorName: 'color',
      colorId: 'color',
      value: 'blue'
    },
  ];

  const color = (e) => {
    setColorPrice(e.target.value)
    setColor(e.target.value)
  }

  return (
    <div className="color">
      {pickColor.map(function (item, index) {
        return (
          <label
            className="color__wrapper"
            htmlFor={item.colorId + cardIndex + index}
          >
            <input
              className="color__input"
              type="radio"
              name={item.colorName + cardIndex}
              id={item.colorId + cardIndex + index}
              value={item.value}
              onChange={color}
            />
            <div style={item.color} className="color__decorator"></div>
          </label>
        );
      })}
    </div>
  );
};
