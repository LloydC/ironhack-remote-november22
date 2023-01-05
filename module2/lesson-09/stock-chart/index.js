const outputSize = document.getElementById('outputSize').value;
const key = 'KM9G6CWI8KFXSQNY'; // 
const functionName = 'TIME_SERIES_DAILY_ADJUSTED';
const symbolName = 'MSFT';
const apiUrl = `https://www.alphavantage.co/query?interval=5min&function=${functionName}&symbol=${symbolName}&apikey=${key}`;
 
axios
  .get(apiUrl)
  .then(responseFromAPI => {
    //console.log(responseFromAPI.data)
    printTheChart(responseFromAPI.data); // <== call the function here where you used to console.log() the response
  })
  .catch(err => console.log('Error while getting the data: ', err));
 
function printTheChart(stockData) {
  const dailyData = stockData['Time Series (Daily)']; // -->responseFromAPO.data.Time Series (Daily)
 
  const stockDates = Object.keys(dailyData); // grab the dates of stock
  const stockPrices = stockDates.map(date => dailyData[date]['4. close']); // grab the stock value
 
  const ctx = document.getElementById('my-chart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: stockDates,
      datasets: [
        {
          label: 'Stock Chart',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: stockPrices
        }
      ]
    }
  }); // closes chart = new Chart()
}