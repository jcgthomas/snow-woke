import { useState, useEffect } from "react";
import axios from "../node_modules/axios/dist/axios.min.js";

import "./Styles/style.css";

// Component imports //
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Resorts from "./Components/Resorts";
import Alarms from "./Components/Alarms";
import Forecast from "./Components/Forecast";
import Map from "./Components/Map";
import ResortInfo from "./Components/ResortInfo";

function App() {
	// Temporary template weather object

	const tempWeather = {
		data: {
			request: [{ query: "", type: "" }],
			weather: [
				{
					astronomy: [null],
					bottom: [
						{
							maxtempC: "",
							maxtempF: "",
							mintempC: "",
							mintempF: "",
						},
					],
					chanceofsnow: "",
					date: "NOT CHECKED",
					hourly: [
						{
							bottom: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							cloudcover: "",
							freezeLevel: "",
							humidity: "",
							mid: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							precipInches: "",
							precipMM: "",
							pressure: "",
							pressureInches: "",
							snowfall_cm: "",
							time: "",
							top: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							visibility: "",
							visibilityMiles: "",
						},
						{
							bottom: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							cloudcover: "",
							freezeLevel: "",
							humidity: "",
							mid: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							precipInches: "",
							precipMM: "",
							pressure: "",
							pressureInches: "",
							snowfall_cm: "",
							time: "",
							top: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							visibility: "",
							visibilityMiles: "",
						},
						{
							bottom: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							cloudcover: "",
							freezeLevel: "",
							humidity: "",
							mid: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							precipInches: "",
							precipMM: "",
							pressure: "",
							pressureInches: "",
							snowfall_cm: "",
							time: "",
							top: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							visibility: "",
							visibilityMiles: "",
						},
						{
							bottom: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "Suny" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							cloudcover: "",
							freezeLevel: "",
							humidity: "",
							mid: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							precipInches: "",
							precipMM: "",
							pressure: "",
							pressureInches: "",
							snowfall_cm: "",
							time: "",
							top: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							visibility: "",
							visibilityMiles: "",
						},
						{
							bottom: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							cloudcover: "",
							freezeLevel: "",
							humidity: "",
							mid: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							precipInches: "",
							precipMM: "",
							pressure: "",
							pressureInches: "",
							snowfall_cm: "",
							time: "",
							top: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							visibility: "",
							visibilityMiles: "",
						},
						{
							bottom: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							cloudcover: "",
							freezeLevel: "",
							humidity: "",
							mid: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							precipInches: "",
							precipMM: "",
							pressure: "",
							pressureInches: "",
							snowfall_cm: "",
							time: "",
							top: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							visibility: "10",
							visibilityMiles: "6",
						},
						{
							bottom: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							cloudcover: "",
							freezeLevel: "",
							humidity: "",
							mid: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							precipInches: "",
							precipMM: "",
							pressure: "",
							pressureInches: "",
							snowfall_cm: "",
							time: "",
							top: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							visibility: "",
							visibilityMiles: "",
						},
						{
							bottom: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							cloudcover: "",
							freezeLevel: "",
							humidity: "",
							mid: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							precipInches: "",
							precipMM: "",
							pressure: "",
							pressureInches: "",
							snowfall_cm: "",
							time: "",
							top: [
								{
									tempC: "",
									tempF: "",
									weatherCode: "",
									weatherDesc: [{ value: "" }],
									weatherIconUrl: [
										{
											value: "",
										},
									],
									winddir16Point: "",
									winddirDegree: "",
									windspeedKmph: "",
									windspeedMiles: "",
								},
							],
							visibility: "",
							visibilityMiles: "",
						},
					],
					mid: [
						{
							maxtempC: "",
							maxtempF: "",
							mintempC: "",
							mintempF: "",
						},
					],
					top: [
						{
							maxtempC: "",
							maxtempF: "",
							mintempC: "",
							mintempF: "",
						},
					],
					totalSnowfall_cm: "",
				},
			],
		},
	};

	const [page, setPage] = useState("Resorts");
	const [resorts, setResorts] = useState([
		{
			id: "627",
			name: "Arlberg (St Anton, St Christoph, Stuben, Lech, ​Zürs, Warth, ​Schröcken)",
			officialWebsite: "http://www.skiarlberg.at",
			georeferencing: {
				lat: "47.20124197224789",
				lng: "10.16615688800812",
			},
			regions: [
				{
					id: "344",
					area: "Tyrol",
				},
				{
					id: "346",
					area: "Vorarlberg",
				},
			],
			alarms: [],
			weather: tempWeather,
			lastCheck: 0,
		},
		{
			id: "987",
			name: "Matterhorn (Zermatt/​Breuil-Cervinia/​Valtournenche)",
			officialWebsite: "http://bergbahnen.zermatt.ch/",
			georeferencing: {
				lat: "45.942496045578025",
				lng: "7.709285616874696",
			},
			regions: [
				{
					id: "86",
					area: "Italy",
				},
				{
					id: "387",
					area: "Valais and Vaud",
				},
			],
			alarms: [
				{
					id: 1,
					toggled: true,
					type: "Depth",
					limit: 1200,
				},
				{
					id: 2,
					toggled: false,
					type: "Snowfall",
					limit: 100,
				},
			],
			weather: tempWeather,
			lastCheck: 0,
		},
	]);
	const [searchInput, setSearchInput] = useState("");
	const [searchBox, setSearchBox] = useState(false);
	const [resortInfo, setResortInfo] = useState(
		resorts.length > 0 ? resorts[0] : ""
	);
	const [resortMap, setResortMap] = useState("");
	const [showList, setShowList] = useState(false);

	// API KEYS

	const worldWeatherOnlineKey = `9452199cce494ac2a42203118212706`;

	// Retrieve resort map info and set resortMap as the current image state to be used in the map page

	useEffect(() => {
		axios
			.get(`https://skimap.org/SkiAreas/view/${resortInfo.id}.json`)
			.then((res) => {
				setResortMap(res.data.ski_maps[0].media);
			})
			.catch((error) =>
				alert(`Unable to find map for ${resortInfo.name}`)
			);
	}, [resortInfo]);

	// Upon change of the current resort in focus, check and update weather information

	useEffect(() => {
		// Calls the updateLastCheck function then updates the weather information
		const getWeather = () => {
			let lat = parseFloat(resortInfo.georeferencing.lat).toFixed(2);
			let lng = parseFloat(resortInfo.georeferencing.lng).toFixed(2);
			axios
				.get(
					`http://api.worldweatheronline.com/premium/v1/ski.ashx?key=${worldWeatherOnlineKey}&q=${lat},${lng}&format=json`
				)
				.then((res) => {
					const updatedResort = {
						...resortInfo,
						weather: res.data,
						lastCheck: Date.now(),
					};
					setResorts(() => {
						return resorts.map((resort) =>
							resort.id === updatedResort.id
								? updatedResort
								: resort
						);
					});
					setResortInfo(updatedResort);
				})
				.catch((error) => () => {
					alert(
						`Unable to retrieve weather information for ${resortInfo.name}`
					);
				});
		};
		// Checks whether the forecast has been updated for this resort within the last hour
		Date.now() - resortInfo.lastCheck > 3600000
			? getWeather()
			: console.log("Weather info updated within the last hour");
	}, [page, resortInfo]);

	// Opens the map page with the selected resorts map

	const viewMap = (resort) => {
		setResortInfo(resort);
		setShowList(false);
		setPage("Map");
	};

	// Closes searches and popups upon page change

	const closePopUps = () => {
		setShowList(false);
		setSearchBox(false);
	};

	// Array of forecast conditions to check and to use in the Alarms component

	const forecastConditions = [
		{ title: "Temperature °C", value: "tempC", unit: "°C" },
		{ title: "Windspeed Kmph", value: "windspeedKmph", unit: "Kmph" },
		{ title: "Wind Direction", value: "winddir16Point", unit: "" },
	];

	// Switch statement to handle page changes in a more readable manner which is then handled by App.js return

	const renderSwitch = (page) => {
		switch (page) {
			case "Resorts":
				return (
					<Resorts
						resorts={resorts}
						setResorts={setResorts}
						openSearch={searchBox}
						setOpenSearch={setSearchBox}
						setSearchInput={setSearchInput}
						searchInput={searchInput}
						tempWeather={tempWeather}
						setResortInfo={setResortInfo}
						setPage={setPage}
					/>
				);
			case "Alarms":
				return (
					<Alarms
						resorts={resorts}
						setResorts={setResorts}
						resort={resortInfo}
						setResortInfo={setResortInfo}
						showList={showList}
						setShowList={setShowList}
						forecastConditions={forecastConditions}
					/>
				);
			case "Forecast":
				return (
					<Forecast
						resort={resortInfo}
						setResort={setResortInfo}
						resorts={resorts}
						forecastConditions={forecastConditions}
					/>
				);
			case "Map":
				return (
					<Map
						resort={resortInfo}
						resortMap={resortMap}
						resorts={resorts}
						setMap={viewMap}
						showList={showList}
						setShowList={setShowList}
					/>
				);
			case "ResortInfo":
				return <ResortInfo resort={resortInfo} viewMap={viewMap} />;
		}
	};

	return (
		<div className="snowWoke">
			<Header />
			{renderSwitch(page)}
			<Footer
				changePage={setPage}
				currentPage={page}
				closePopUps={closePopUps}
			/>
		</div>
	);
}

export default App;
