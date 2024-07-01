import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import TimeAgo from "react-timeago";

const StockTableRow = (props) => {
  let history = props.stock_data.history;

  // color for stock price, red for decrease and green for increase
  function getStockValueColor(stock) {
    if (stock.current_value < stock.history.slice(-2)[0].value) {
      return "red";
    } else if (stock.current_value > stock.history.slice(-2)[0].value) {
      return "green";
    } else {
      return null;
    }
  }

  return (
    <tr
      className={props.stock_data.is_selected ? "selected" : null}
      id={props.stock_name}
      onClick={props.toggleStockSelection.bind(this, props.stock_name)}
    >
      <td>{props.stock_name.toUpperCase()}</td>
      <td className={getStockValueColor(props.stock_data)}>
        {props.stock_data.current_value.toFixed(2)}
      </td>
      <td>
        <Sparklines
          data={history.map((history) => {
            return history.value;
          })}
        >
          <SparklinesLine color="blue" />
        </Sparklines>
      </td>
      <td className="updated_at">
        <TimeAgo date={history.slice(-1)[0].time} />
      </td>
    </tr>
  );
};

export default StockTableRow;
