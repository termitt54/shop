import React from "react";
import "./index.scss";

export const Memory = ({cardIndex, memoryPrice, setMemoryPrice, setMemory}) => {
  const pickMemory = [
    {
      value: "64Gb",
    },
    {
      value: "128Gb",
    },
    {
      value: "256Gb",
    },
    {
      value: "512Gb",
    },
  ];

  const memory = (e) => {
    setMemoryPrice(e.target.value)
    setMemory(e.target.value)
  }

  return (
    <div className="memory">
      {pickMemory.map(function (item, index) {
        return (
          <label className="memory__wrapper" htmlFor={"radio" + cardIndex + index}>
            <input
              className="memory__input"
              type="radio"
              name={'radio' + (cardIndex + 1)}
              id={'radio' + cardIndex + index}
              value={item.value}
              onChange={memory}
            />
            <div className="memory__decorator">{item.value}</div>
          </label>
        );
      })}
    </div>
  );
};
