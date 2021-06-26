const Footer = ({ changePage, currentPage, closePopUps }) => {
	const iconHighlight = (icon) => {
		return icon === currentPage ? "#1e3a5c" : "";
	};

	return (
		<div className="footer" onClick={() => {closePopUps()}}>
			<i
				className="fas fa-mountain menuIcon"
				title="Resorts"
				onClick={() => changePage("Resorts")}
				style={{ color: iconHighlight("Resorts") }}
			></i>

			<i
				className="fas fa-bell menuIcon"
				title="Alarms"
				onClick={() => changePage("Alarms")}
				style={{ color: iconHighlight("Alarms") }}
			></i>

			<i
				className="fas fa-snowflake menuIcon"
				title="Forecast"
				onClick={() => {
					changePage("Forecast");
				}}
				style={{ color: iconHighlight("Forecast") }}
			></i>

			<i
				className="fas fa-map menuIcon"
				title="Map"
				onClick={() => changePage("Map")}
				style={{ color: iconHighlight("Map") }}
			></i>
		</div>
	);
};

export default Footer;
