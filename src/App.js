import { useState, useEffect } from "react";
import axios from "../node_modules/axios/dist/axios.min.js";

import "./Styles/style.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Resorts from "./Components/Resorts";
import Alarms from "./Components/Alarms";
import Forecast from "./Components/Forecast";
import Map from "./Components/Map";
import ResortInfo from "./Components/ResortInfo";

function App() {
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
			alarm: null,
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
			alarm: 500,
		},
	]);
	const [allResorts, setAllResorts] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	const [searchBox, setSearchBox] = useState(false);
	const [alarmBox, setAlarmBox] = useState(false);
	const [resortInfo, setResortInfo] = useState(
		resorts.length > 0 ? resorts[0] : ""
	);
	const [resortMap, setResortMap] = useState("");
	const [showMapList, setShowMapList] = useState(false);

	useEffect(() => {
		axios
			.get("Resorts.json")
			.then((res) => {
				setAllResorts(res.data);
			})
			.catch((error) => alert("Error retrieving resorts.json"));
	}, []);

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

	const handleChange = (e) => {
		setSearchInput(e.target.value);
	};

	const filteredResorts = allResorts.filter((resort) =>
		resort.name.toLowerCase().includes(searchInput.toLowerCase())
	);

	const addResort = (resort) => {
		if (!resorts.find(({ id }) => id === resort.id)) {
			setResorts([...resorts, {...resort, alarm: null}]);
		}
	};

	const showResort = (resort) => {
		setResortInfo(resort);
		setPage("ResortInfo");
	};

	const removeResort = (id) => {
		setResorts((resorts) => {
			return resorts.filter((resort) => resort.id != id);
		});
	};

	const viewMap = (resort) => {
		setResortInfo(resort);
		setShowMapList(false);
		setPage("Map");
	};

  const closePopUps = () => {
    setShowMapList(false);
    setSearchBox(false);
    setAlarmBox(false);
  }

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
				return <Alarms openAlarm={alarmBox} />;
			case "Forecast":
				return <Forecast />;
			case "Map":
				return (
					<Map
						resort={resortInfo}
						resortMap={resortMap}
						resorts={resorts}
						setMap={viewMap}
						showMapList={showMapList}
						setShowMapList={setShowMapList}
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
