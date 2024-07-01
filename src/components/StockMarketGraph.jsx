import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { chartJsConfig, chartColors, chartDataset } from "../chartConfig.js";
const myChartRef = React.createRef();

const StockMarketGraph = (props) => {
  // Update chart State
  function updateChart() {
    let chart = myChartRef.current.chartInstance;

    if (Object.keys(props.stocks).length === 0) {
      chart.data.datasets = [];
      return chart.update();
    }

    // eslint-disable-next-line array-callback-return
    Object.keys(props.stocks).map((stock_name, index) => {
      let current_stock = props.stocks[stock_name];
      let chart_dataset = chart.data.datasets.find((dataset) => {
        return dataset.label === stock_name.toUpperCase();
      });

      if (current_stock.is_selected) {
        let current_stock = props.stocks[stock_name];
        if (chart_dataset) {
          // No need to create dataset, only data is updated
          chart_dataset.data = getStockValues(current_stock);
        } else {
          // New dataset is created for graph
          if (current_stock) {
            chart.data.datasets = chart.data.datasets.concat([
              chartDataset(
                stock_name,
                chartColors[index],
                getStockValues(current_stock)
              ),
            ]);
          }
        }
      } else {
        // Dataset is removed from graph
        if (chart_dataset) {
          chart.data.datasets.splice(
            chart.data.datasets.indexOf(chart_dataset),
            1
          );
        }
      }
      chart.update();
    });
  }

  useEffect(() => {
    updateChart();
  });

  // {t: timestamp, y: price} returns an array of objects
  function getStockValues(stock) {
    return stock.history.map((history) => {
      return { t: new Date(history.time), y: history.value };
    });
  }

  return (
    <div className={"card column"}>
      <div className="card-header title is-1">Stock Graph</div>
      <div className="card-content">
        <p className="is-size-12 has-text-info">
          {myChartRef.current &&
          myChartRef.current.chartInstance.data.datasets.length > 0
            ? "Compare Selected Stocks for better Understanding."
            : "Click on any stocks on your left stock table to see their graphs."}
        </p>
        <Line
          data={{ datasets: [] }}
          options={chartJsConfig}
          ref={myChartRef}
        />
      </div>
    </div>
  );
};

export default StockMarketGraph;
