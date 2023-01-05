// axios.get('https://restcountries.com/v3.1/all')
//     .then(response => {
//         console.log(response.data)
//         return response.data.map(country => {
//             const node = document.createElement("li");
//             const textNode = document.createTextNode(country.name.common);
//             node.appendChild(textNode);
//             document.getElementById("list").appendChild(node);
//         })
//     })

const getCountryInfo = countryName => {
    axios
      .get(`https://restcountries.com/v3.1/name/${countryName}`)
      .then(response => {
        console.log('Response from API is: ', response);
        const countryDetail = response.data[0];
        console.log('a single country details: ', countryDetail);
        document.getElementById('country-name').innerText = countryDetail.name.common;
        document.getElementById('country-capital').innerText = countryDetail.capital[0]
        document.getElementById('country-flag').setAttribute('src', countryDetail.flags.png)
    })
      .catch(err => console.log(err));
  };
   
  document.getElementById('get-country-btn').addEventListener('click', () => {
    const userInput = document.getElementById('country-name-input').value;
    getCountryInfo(userInput);
  });