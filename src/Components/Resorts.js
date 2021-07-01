import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import axios from "../../node_modules/axios/dist/axios.min.js";
import Resort from "./Resort";

const Resorts = ({
	resorts,
	setResorts,
	openSearch,
	setOpenSearch,
	setSearchInput,
	searchInput,
	tempWeather,
	setResortInfo,
	setPage,
}) => {
	const [allResorts, setAllResorts] = useState([]);

	// Retrieve static resort information from ../public/Resorts.json and set them as allResorts state

	useEffect(() => {
		axios
			.get("Resorts.json")
			.then((res) => {
				setAllResorts(res.data);
			})
			.catch((error) => alert("Error retrieving resorts.json"));
	}, []);

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

	// Checks the resort search input for changes and updates the results list in realtime

	const handleChange = (e) => {
		setSearchInput(e.target.value);
	};
	const filteredResorts = allResorts.filter((resort) =>
		resort.name.toLowerCase().includes(searchInput.toLowerCase())
	);
  const selected = (resortId) => {
    let includes
    resorts.forEach((resort) => {
      if (resort.id == resortId) {
        includes = 'includes'
      }
    })
    return includes
  }

	return (
		<section className="main resorts">
			<h1>Resorts</h1>
			<div className="resortList">
				{resorts.length > 0 ? (
					resorts.map((resort) => (
						<Resort
							key={resort.id}
							resort={resort}
							showResort={showResort}
							removeResort={removeResort}
						/>
					))
				) : (
					<p className="noResortsAdded">
						Add a resort using the + icon below
					</p>
				)}
			</div>

			<i
				className={
					openSearch
						? "circleMenuButton remove fas fa-plus"
						: "circleMenuButton fas fa-plus"
				}
				onClick={() => {
					if (openSearch) {
						setOpenSearch(false);
						setSearchInput("");
					} else {
						setOpenSearch(true);
					}
				}}
				title="Add resort(s)"
			></i>

			<div className={openSearch ? "slideUp addResort" : "addResort"}>
				<input
					type="text"
					className="resortSearchBox"
					placeholder="Enter a resort"
					onChange={handleChange}
				/>

				<div className="searchResults">
					{searchInput.length > 0
						? filteredResorts.map((resort) => (
								<p
									key={resort.id}
									onClick={() => addResort(resort)}
									className={selected(resort.id)}
								>
									{resort.name}
								</p>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Resorts;
