import React from "react";

const StockLoader = (props) => {
  if (props.connectionError) {
    return (
      <div className="is-medium">
        <span className="has-text-danger">No Data Present</span>
        <br />
        (Try again later)
      </div>
    );
  } else {
    return (
      <div className="tag is-large is-info">
        <span className="loader"> &nbsp;</span>
        &nbsp; &nbsp; Please Wait Fetching Stocks ...
      </div>
    );
  }
};

export default StockLoader;
