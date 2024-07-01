# LiveStockDashboard

(SPA) app to display live stock prices in the form of table/graphs.

TechStack - React, chart.js, React-chartjs-2, bulma-pageloader (SASS/CSS).

Git-repository Link – https://github.com/Annurag09/LiveStock

Deployed Link - https://annurag09.github.io/LiveStock/

Commands – npm install, npm run buildProd, npm start

Tools Required - VS Code, Chrome

Data : Subscribing for posts and updates via WebSockets (server url: ws://stocks.mnet.website)

format: [ [ name, price], [ name, price] … ]
A simple table:

each row will have
stock_name or Ticker.
latest price (can color it relative to the previous value, red if low / green if high).
a sparkline graph for each row.
when was the data last updated.
a way to select stocks by clicking on them
can reset data by click on reset button
A Graph:

Can show a line graph for each stock
x: time, y: stock_price
use a nice library for graphs
show graphs for only selected stocks
