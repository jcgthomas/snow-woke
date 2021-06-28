import Hourly from "./Hourly";
import Updated from "./Updated";

const Forecast = ({ resort }) => {
	const weather = resort.weather.data.weather[0];

	const setHours = () => {
		const hourList = [];
		weather.hourly.forEach((hour) => {
			let time;
			hour.time.length === 4
				? (time = hour.time.slice(0, 2))
				: (time = hour.time.slice(0, 1));
			if (time === "0") {
				time = "12am";
			} else if (time === "12") {
				time = "12pm";
			} else if (time > 12) {
				time = time % 12;
				time += "pm";
			} else if (time < 12) {
				time += "am";
			}
			hourList.push(time);
		});
		return hourList;
	};

	return (
		<section className="forecast main">
			<h1>Forecast for {resort.name}</h1>
			<Updated resort={resort} weather={weather} />
			<h1>24h Chance of snow: {weather.chanceofsnow}%</h1>
			{weather.chanceofsnow > 0 ? (
				<h1>Expected snowfall: {weather.totalSnowfall_cm}cm</h1>
			) : (
				""
			)}
			<Hourly
				title={"Temperature °C"}
				weather={weather}
				setHours={setHours}
				param={"tempC"}
			/>
			<Hourly
				title={"Windspeed Kmph"}
				weather={weather}
				setHours={setHours}
				param={"windspeedKmph"}
			/>
			<Hourly
				title={"Temperature °F"}
				weather={weather}
				setHours={setHours}
				param={"tempF"}
			/>
		</section>
	);
};

export default Forecast;
