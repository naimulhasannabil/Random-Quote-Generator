const quoteElement = document.querySelector("#quote");
const authorElement = document.querySelector("#author");
const button = document.querySelector("#button");

const urlAPI = "https://api.api-ninjas.com/v1/quotes?category=happiness";

const keyAPI = "HrbC01WsaA1S7k3nASRgAw==fo37I6biGjo8XT0J";

const getQuote = () => {
  fetch(urlAPI, {
    headers: {
      "X-Api-Key": keyAPI,
    },
  })
    .then((data) => data.json())
    .then((item) => {
      //   console.log(item[0]);
      quoteElement.textContent = item[0].quote;
      authorElement.textContent = item[0].author;
    })
    .catch((error) => {
      console.error("Error Fatching Quotes", error);
    });
};
getQuote();
button.addEventListener("click", getQuote);
