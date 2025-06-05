async function fetchWeather() {
    const apiKey = '92ce270253a2c02277c0ebb6423f09f1'; // Replace with your actual API key
    const city = 'Lagos';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},Nigeria&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Extract current weather details
        const currentTemp = data.list[0].main.temp;
        const currentDescription = data.list[0].weather[0].description;

        // Extract 3-day forecast with weekdays
        let forecastHtml = "<h3>3-Day Forecast:</h3>";
        const forecastDays = {};

        data.list.forEach(entry => {
            const date = entry.dt_txt.split(" ")[0]; // Get the date
            if (!forecastDays[date]) {
                forecastDays[date] = entry.main.temp; // Store temperature for each day
            }
        });

        Object.keys(forecastDays).slice(1, 4).forEach((date, index) => {
            const dayOfWeek = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });
            forecastHtml += `<p>${dayOfWeek} (${date}): ${forecastDays[date]}°C</p>`;
        });

        // Display results
        document.getElementById('weather-info').innerHTML = `
            <p><strong>Current Temperature:</strong> ${currentTemp}°C</p>
            <p><strong>Condition:</strong> ${currentDescription}</p>
            ${forecastHtml}
        `;
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

fetchWeather();