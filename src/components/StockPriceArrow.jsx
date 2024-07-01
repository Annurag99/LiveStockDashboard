import React from "react";

const StockPriceArrow = (props) => {
  // Arrow with color for stock price, red for decrease and green for increase
  return (
    <span title="Market trend" className={"icon market-trend"}>
      {getArrow()}
    </span>
  );
  function getArrow() {
    if (props.current_trend === "up") {
      return <span className="up-arrow">&#8679;</span>;
    } else if (props.current_trend === "down") {
      return <span className="down-arrow">&#8681;</span>;
    } else {
      return "-";
    }
  }
};

export default StockPriceArrow;
