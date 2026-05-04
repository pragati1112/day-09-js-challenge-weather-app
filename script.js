const apiKey = "YOUR_API_KEY"; // yaha apni API key daalo

function getWeather() {
  const city = document.getElementById("city").value;

  if (city === "") {
    alert("Enter city name");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        document.getElementById("result").innerHTML = "City not found ❌";
        return;
      }

      const temp = data.main.temp;
      const weather = data.weather[0].main;

      document.getElementById("result").innerHTML = `
        <h3>${city}</h3>
        <p>🌡 Temperature: ${temp}°C</p>
        <p>☁️ Condition: ${weather}</p>
      `;
    })
    .catch(() => {
      document.getElementById("result").innerHTML = "Error fetching data";
    });
}