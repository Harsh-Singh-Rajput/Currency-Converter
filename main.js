document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#currency-converter")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const {
        target: { from, to, amount },
      } = event;

      const headers = new Headers();
      headers.append("apikey", "4FD0SJ8VLzKrG4Ik9jHsr1yl4ZTfWYLq");

      const requestOptions = {
        method: "GET",
        headers,
      };


      const data = fetch(
        `https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let {
            info,
            date,
            query: { to },
            result,
          } = data;
          document.getElementById("result").style.display = "block";
          document.getElementById(
            "exchange-rate"
          ).textContent = `As per the exchange rate: ${info.rate}`;
          document.getElementById("date").textContent = `For Date: ${date}`;
          document.getElementById(
            "conversion"
          ).textContent = `Convertd Value in ${to} is: ${result.toFixed(2)}`;
        });
    });
});
