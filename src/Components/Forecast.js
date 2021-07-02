import Hourly from "./Hourly";
import Updated from "./Updated";
import WindDirection from "./WindDirection";
import ForecastSelector from "./ForecastSelector";

const Forecast = ({ resort, setResort, resorts, forecastConditions }) => {
	const weather = resort.weather.data.weather[0];

	const hours = ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"];

	return (
		<section className="forecast main">
			<h1>Forecast</h1>
			<ForecastSelector
				resort={resort}
				resorts={resorts}
				setResort={setResort}
			/>
			{resort.lastCheck > 0 ? (
				<Updated resort={resort} weather={weather} hours={hours} />
			) : (
				"Retrieving forecast, please wait"
			)}
			<h1>24h Chance of snow: {weather.chanceofsnow}%</h1>
			{weather.chanceofsnow > 0 ? (
				<h1>Expected snowfall: {weather.totalSnowfall_cm}cm</h1>
			) : (
				""
			)}

			{forecastConditions
				.filter((condition) => condition.value !== 'totalSnowfall_cm')
				.map((condition) =>
					condition.title == "Wind Direction" ? (
						<WindDirection
							title={condition.title}
							weather={weather}
							param={condition.value}
							hours={hours}
						/>
					) : (
						<Hourly
							title={condition.title}
							weather={weather}
							param={condition.value}
							hours={hours}
						/>
					)
				)}
		</section>
	);
};

export default Forecast;
