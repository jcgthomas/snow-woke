const ForecastSelector = ({ resort, resorts, setResort }) => {
	const changeResort = (direction) => {
		const current = resorts.indexOf(resort);
		if (direction === "next") {
			if (current === resorts.length - 1) {
				setResort(resorts[0]);
			} else {
				setResort(resorts[current + 1]);
			}
		} else if (direction === "prev") {
			if (current === 0) {
				setResort(resorts[resorts.length - 1]);
			} else {
				setResort(resorts[current - 1]);
			}
		}
	};

	return (
		<div className="forecastSelector">
			<div className="selectLeft">
				<i
					className="fas fa-arrow-left"
					onClick={() => {
						changeResort("prev");
					}}
				></i>
			</div>
			<div className="forecastName">{resort.name}</div>
			<div className="selectRight">
				<i
					className="fas fa-arrow-right"
					onClick={() => {
						changeResort("next");
					}}
				></i>
			</div>
		</div>
	);
};

export default ForecastSelector;
