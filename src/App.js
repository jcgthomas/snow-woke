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
	const [page, setPage] = useState("Resorts");
	const [resorts, setResorts] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [searchBox, setSearchBox] = useState(false);
	const [resortInfo, setResortInfo] = useState("");
	const [resortMap, setResortMap] = useState("");
	const [showList, setShowList] = useState(false);

	// Loading localstorage data
	useEffect(() => {
		const data1 = localStorage.getItem("resorts");
		if (data1) {
			setResorts(JSON.parse(data1));
		}
		const data2 = localStorage.getItem("resortInfo");
		if (data2) {
			setResortInfo(JSON.parse(data2));
		}
	}, []);

	// Setting localstorage data
	useEffect(() => {
		localStorage.setItem("resorts", JSON.stringify(resorts));
		localStorage.setItem("resortInfo", JSON.stringify(resortInfo));
	});

	// API KEYS
	const worldWeatherOnlineKey = `9452199cce494ac2a42203118212706`;

	// Retrieve resort map info and set resortMap as the current image state to be used in the map page
	useEffect(() => {
		resorts.length > 0 &&
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
		{ title: "24h Snowfall (cm)", value: "totalSnowfall_cm", unit: "cm" },
		{ title: "Temperature (°C)", value: "tempC", unit: "°C" },
		{ title: "Windspeed (Kmph)", value: "windspeedKmph", unit: "Kmph" },
		{ title: "Wind Direction", value: "winddir16Point", unit: "degrees" },
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
				return (
					<ResortInfo
						resort={resortInfo}
						viewMap={viewMap}
						setPage={setPage}
					/>
				);
		}
	};

	return (
		<div className="appWrapper">
			<div className="snowWoke">
				<Header />
				{renderSwitch(page)}
				<Footer
					resorts={resorts}
					changePage={setPage}
					currentPage={page}
					closePopUps={closePopUps}
				/>
			</div>
		</div>
	);
}

export default App;
