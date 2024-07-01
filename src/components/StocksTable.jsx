import React from "react";
import StockTableRow from "./StockTableRow.jsx";
import StockPriceArrow from "./StockPriceArrow.jsx";

const StocksTable = (props) => {
  return (
    <div className="card column is-two-fifths is-mobile" id="stocks_list">
      <div className="card-header title is-1">Live Stocks</div>
      <button
        className="button is-normal is-warning is-pulled-right"
        onClick={props.resetData}
      >
        Reset
      </button>
      <div className="card-content">
        <table className="table is-striped is-hoverable">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>
                Price
                <StockPriceArrow current_trend={props.market_trend} />
              </th>
              <th>History</th>
              <th>Last Update</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(props.stocks).map((stock_name, index) => {
              let current_stock = props.stocks[stock_name];
              return (
                <StockTableRow
                  key={index}
                  stock_name={stock_name}
                  stock_data={current_stock}
                  toggleStockSelection={props.toggleStockSelection}
                />
              );
            })}
            {props.areStocksLoaded() ? null : (
              <tr>
                <td colSpan="4">No stocks loaded yet!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StocksTable;
