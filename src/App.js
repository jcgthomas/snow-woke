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
	// Most state in this app is required to be global as different pages need to interact with each other

	// Temporary template weather object

	const tempWeather = {
		data: {
			request: [{ query: "", type: "LatLon" }],
			weather: [
				{
					astronomy: [null],
					bottom: [
						{
							maxtempC: "23",
							maxtempF: "73",
							mintempC: "10",
							mintempF: "50",
						},
					],
					chanceofsnow: "0",
					date: "NOT CHECKED",
					hourly: [
						{
							bottom: [
								{
									tempC: "9",
									tempF: "48",
									weatherCode: "113",
									weatherDesc: [{ value: "Clear" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png",
										},
									],
									winddir16Point: "SSE",
									winddirDegree: "164",
									windspeedKmph: "8",
									windspeedMiles: "5",
								},
							],
							cloudcover: "23",
							freezeLevel: "3858",
							humidity: "78",
							mid: [
								{
									tempC: "14",
									tempF: "56",
									weatherCode: "113",
									weatherDesc: [{ value: "Clear" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png",
										},
									],
									winddir16Point: "SSW",
									winddirDegree: "194",
									windspeedKmph: "5",
									windspeedMiles: "3",
								},
							],
							precipInches: "0.0",
							precipMM: "0.0",
							pressure: "1019",
							pressureInches: "31",
							snowfall_cm: "0.0",
							time: "0",
							top: [
								{
									tempC: "10",
									tempF: "51",
									weatherCode: "113",
									weatherDesc: [{ value: "Clear" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png",
										},
									],
									winddir16Point: "SSW",
									winddirDegree: "195",
									windspeedKmph: "5",
									windspeedMiles: "3",
								},
							],
							visibility: "10",
							visibilityMiles: "6",
						},
						{
							bottom: [
								{
									tempC: "8",
									tempF: "47",
									weatherCode: "113",
									weatherDesc: [{ value: "Clear" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png",
										},
									],
									winddir16Point: "SSE",
									winddirDegree: "156",
									windspeedKmph: "9",
									windspeedMiles: "6",
								},
							],
							cloudcover: "11",
							freezeLevel: "3991",
							humidity: "79",
							mid: [
								{
									tempC: "13",
									tempF: "55",
									weatherCode: "113",
									weatherDesc: [{ value: "Clear" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png",
										},
									],
									winddir16Point: "SSE",
									winddirDegree: "165",
									windspeedKmph: "7",
									windspeedMiles: "4",
								},
							],
							precipInches: "0.0",
							precipMM: "0.0",
							pressure: "1018",
							pressureInches: "31",
							snowfall_cm: "0.0",
							time: "300",
							top: [
								{
									tempC: "10",
									tempF: "50",
									weatherCode: "113",
									weatherDesc: [{ value: "Clear" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png",
										},
									],
									winddir16Point: "SSE",
									winddirDegree: "165",
									windspeedKmph: "7",
									windspeedMiles: "4",
								},
							],
							visibility: "10",
							visibilityMiles: "6",
						},
						{
							bottom: [
								{
									tempC: "16",
									tempF: "61",
									weatherCode: "113",
									weatherDesc: [{ value: "Sunny" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
										},
									],
									winddir16Point: "SSE",
									winddirDegree: "162",
									windspeedKmph: "8",
									windspeedMiles: "5",
								},
							],
							cloudcover: "5",
							freezeLevel: "3975",
							humidity: "66",
							mid: [
								{
									tempC: "14",
									tempF: "56",
									weatherCode: "113",
									weatherDesc: [{ value: "Sunny" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
										},
									],
									winddir16Point: "SSE",
									winddirDegree: "169",
									windspeedKmph: "7",
									windspeedMiles: "4",
								},
							],
							precipInches: "0.0",
							precipMM: "0.0",
							pressure: "1017",
							pressureInches: "31",
							snowfall_cm: "0.0",
							time: "600",
							top: [
								{
									tempC: "10",
									tempF: "51",
									weatherCode: "113",
									weatherDesc: [{ value: "Sunny" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
										},
									],
									winddir16Point: "S",
									winddirDegree: "173",
									windspeedKmph: "6",
									windspeedMiles: "4",
								},
							],
							visibility: "10",
							visibilityMiles: "6",
						},
						{
							bottom: [
								{
									tempC: "21",
									tempF: "69",
									weatherCode: "113",
									weatherDesc: [{ value: "Sunny" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
										},
									],
									winddir16Point: "S",
									winddirDegree: "186",
									windspeedKmph: "2",
									windspeedMiles: "1",
								},
							],
							cloudcover: "13",
							freezeLevel: "4057",
							humidity: "44",
							mid: [
								{
									tempC: "16",
									tempF: "61",
									weatherCode: "113",
									weatherDesc: [{ value: "Sunny" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
										},
									],
									winddir16Point: "S",
									winddirDegree: "169",
									windspeedKmph: "3",
									windspeedMiles: "2",
								},
							],
							precipInches: "0.0",
							precipMM: "0.0",
							pressure: "1017",
							pressureInches: "30",
							snowfall_cm: "0.0",
							time: "900",
							top: [
								{
									tempC: "12",
									tempF: "53",
									weatherCode: "113",
									weatherDesc: [{ value: "Sunny" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
										},
									],
									winddir16Point: "SSE",
									winddirDegree: "165",
									windspeedKmph: "5",
									windspeedMiles: "3",
								},
							],
							visibility: "10",
							visibilityMiles: "6",
						},
						{
							bottom: [
								{
									tempC: "23",
									tempF: "73",
									weatherCode: "113",
									weatherDesc: [{ value: "Sunny" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
										},
									],
									winddir16Point: "NNW",
									winddirDegree: "341",
									windspeedKmph: "5",
									windspeedMiles: "3",
								},
							],
							cloudcover: "10",
							freezeLevel: "3956",
							humidity: "38",
							mid: [
								{
									tempC: "19",
									tempF: "66",
									weatherCode: "113",
									weatherDesc: [{ value: "Sunny" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
										},
									],
									winddir16Point: "NNW",
									winddirDegree: "341",
									windspeedKmph: "3",
									windspeedMiles: "2",
								},
							],
							precipInches: "0.0",
							precipMM: "0.0",
							pressure: "1015",
							pressureInches: "30",
							snowfall_cm: "0.0",
							time: "1200",
							top: [
								{
									tempC: "14",
									tempF: "57",
									weatherCode: "113",
									weatherDesc: [{ value: "Sunny" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
										},
									],
									winddir16Point: "S",
									winddirDegree: "184",
									windspeedKmph: "1",
									windspeedMiles: "1",
								},
							],
							visibility: "10",
							visibilityMiles: "6",
						},
						{
							bottom: [
								{
									tempC: "21",
									tempF: "69",
									weatherCode: "113",
									weatherDesc: [{ value: "Sunny" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
										},
									],
									winddir16Point: "N",
									winddirDegree: "358",
									windspeedKmph: "5",
									windspeedMiles: "3",
								},
							],
							cloudcover: "12",
							freezeLevel: "4067",
							humidity: "56",
							mid: [
								{
									tempC: "17",
									tempF: "63",
									weatherCode: "113",
									weatherDesc: [{ value: "Sunny" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
										},
									],
									winddir16Point: "N",
									winddirDegree: "360",
									windspeedKmph: "6",
									windspeedMiles: "4",
								},
							],
							precipInches: "0.0",
							precipMM: "0.1",
							pressure: "1015",
							pressureInches: "30",
							snowfall_cm: "0.0",
							time: "1500",
							top: [
								{
									tempC: "13",
									tempF: "56",
									weatherCode: "113",
									weatherDesc: [{ value: "Sunny" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
										},
									],
									winddir16Point: "NNE",
									winddirDegree: "12",
									windspeedKmph: "4",
									windspeedMiles: "2",
								},
							],
							visibility: "10",
							visibilityMiles: "6",
						},
						{
							bottom: [
								{
									tempC: "17",
									tempF: "62",
									weatherCode: "113",
									weatherDesc: [{ value: "Sunny" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
										},
									],
									winddir16Point: "ESE",
									winddirDegree: "107",
									windspeedKmph: "1",
									windspeedMiles: "0",
								},
							],
							cloudcover: "11",
							freezeLevel: "4049",
							humidity: "75",
							mid: [
								{
									tempC: "16",
									tempF: "62",
									weatherCode: "113",
									weatherDesc: [{ value: "Sunny" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
										},
									],
									winddir16Point: "ESE",
									winddirDegree: "109",
									windspeedKmph: "1",
									windspeedMiles: "1",
								},
							],
							precipInches: "0.0",
							precipMM: "0.7",
							pressure: "1014",
							pressureInches: "30",
							snowfall_cm: "0.0",
							time: "1800",
							top: [
								{
									tempC: "13",
									tempF: "55",
									weatherCode: "113",
									weatherDesc: [{ value: "Sunny" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
										},
									],
									winddir16Point: "SSE",
									winddirDegree: "163",
									windspeedKmph: "6",
									windspeedMiles: "4",
								},
							],
							visibility: "10",
							visibilityMiles: "6",
						},
						{
							bottom: [
								{
									tempC: "10",
									tempF: "51",
									weatherCode: "113",
									weatherDesc: [{ value: "Sunny" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
										},
									],
									winddir16Point: "S",
									winddirDegree: "187",
									windspeedKmph: "10",
									windspeedMiles: "6",
								},
							],
							cloudcover: "12",
							freezeLevel: "3972",
							humidity: "80",
							mid: [
								{
									tempC: "15",
									tempF: "59",
									weatherCode: "113",
									weatherDesc: [{ value: "Sunny" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
										},
									],
									winddir16Point: "SW",
									winddirDegree: "220",
									windspeedKmph: "9",
									windspeedMiles: "5",
								},
							],
							precipInches: "0.0",
							precipMM: "0.5",
							pressure: "1016",
							pressureInches: "30",
							snowfall_cm: "0.0",
							time: "2100",
							top: [
								{
									tempC: "12",
									tempF: "54",
									weatherCode: "113",
									weatherDesc: [{ value: "Sunny" }],
									weatherIconUrl: [
										{
											value: "http://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png",
										},
									],
									winddir16Point: "SSW",
									winddirDegree: "205",
									windspeedKmph: "10",
									windspeedMiles: "6",
								},
							],
							visibility: "10",
							visibilityMiles: "6",
						},
					],
					mid: [
						{
							maxtempC: "19",
							maxtempF: "66",
							mintempC: "10",
							mintempF: "49",
						},
					],
					top: [
						{
							maxtempC: "14",
							maxtempF: "57",
							mintempC: "8",
							mintempF: "46",
						},
					],
					totalSnowfall_cm: "0.0",
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
			lastCheck: 1624875942066,
		},
	]);
	const [allResorts, setAllResorts] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [searchBox, setSearchBox] = useState(false);
	const [resortInfo, setResortInfo] = useState(
		resorts.length > 0 ? resorts[0] : ""
	);
	const [resortMap, setResortMap] = useState("");
	const [showList, setShowList] = useState(false);

	// API KEYS

	const worldWeatherOnlineKey = `9452199cce494ac2a42203118212706`;

	// Retrieve static resort information from ../public/Resorts.json and set them as allResorts state

	useEffect(() => {
		axios
			.get("Resorts.json")
			.then((res) => {
				setAllResorts(res.data);
			})
			.catch((error) => alert("Error retrieving resorts.json"));
	}, []);

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
					const updatedResort = { ...resortInfo, weather: res.data, lastCheck: Date.now() };
					setResorts(() => {
						return resorts.map((resort) =>
							resort.id === updatedResort.id
								? updatedResort
								: resort
						);
					});
					setResortInfo(updatedResort);
				})
				.catch((error) =>
					alert(`Unable to update weather for ${resortInfo.name}`)
				);
		};
		// Checks whether the forecast has been updated for this resort within the last hour
		Date.now() - resortInfo.lastCheck > 3600000
			? getWeather()
			: console.log("Weather info updated within the last hour");
	}, [page]);

	// Checks the resort search input for changes and updates the results list in realtime

	const handleChange = (e) => {
		setSearchInput(e.target.value);
	};
	const filteredResorts = allResorts.filter((resort) =>
		resort.name.toLowerCase().includes(searchInput.toLowerCase())
	);

	// Adds a new resort from search after checking for duplication

	const addResort = (resort) => {
		if (!resorts.find(({ id }) => id === resort.id)) {
			setResorts([
				...resorts,
				{ ...resort, alarms: {}, weather: tempWeather, lastCheck: 0 },
			]);
		}
	};

	// Shows resort details upon selecting a saved resort from resort list

	const showResort = (resort) => {
		setResortInfo(resort);
		setPage("ResortInfo");
	};

	// Removes saved resorts

	const removeResort = (id) => {
		setResorts((resorts) => {
			return resorts.filter((resort) => resort.id !== id);
		});
	};

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

	// Switches saved alarms on and off without deleting them

	const toggleAlarm = (resortId, alarmId) => {
		let alarmMap = (resort) => {
			let newAlarms = resort.alarms.map((alarm) =>
				alarm.id !== alarmId
					? alarm
					: { ...alarm, toggled: !alarm.toggled }
			);
			return { ...resort, alarms: newAlarms };
		};
		setResorts((resorts) => {
			return resorts.map((resort) =>
				resort.id !== resortId ? resort : alarmMap(resort)
			);
		});
	};

	// Deletes saved alarms

	const removeAlarm = (resortId, alarmId) => {
		let alarmMap = (resort) => {
			let newAlarms = resort.alarms.filter(
				(alarm) => alarm.id !== alarmId
			);
			return { ...resort, alarms: newAlarms };
		};
		setResorts((resorts) => {
			return resorts.map((resort) =>
				resort.id !== resortId ? resort : alarmMap(resort)
			);
		});
	};

	// Switch statement to handle page changes in a more readable manner which is then handled by App.js return

	const renderSwitch = (page) => {
		switch (page) {
			case "Resorts":
				return (
					<Resorts
						resorts={resorts}
						addResort={addResort}
						handleChange={handleChange}
						filteredResorts={filteredResorts}
						openSearch={searchBox}
						setOpenSearch={setSearchBox}
						setSearchInput={setSearchInput}
						searchInput={searchInput}
						showResort={showResort}
						removeResort={removeResort}
					/>
				);
			case "Alarms":
				return (
					<Alarms
						resorts={resorts}
						showList={showList}
						setShowList={setShowList}
						toggleAlarm={toggleAlarm}
						removeAlarm={removeAlarm}
					/>
				);
			case "Forecast":
				return <Forecast resort={resortInfo} />;
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
