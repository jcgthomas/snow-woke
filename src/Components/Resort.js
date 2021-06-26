const Resort = ({ resort, showResort, removeResort }) => {
	return (
		<div className="resort">
			<div
				className="resortTitle"
				onClick={() => {
					showResort(resort);
				}}
			>
				<h4>{resort.name}</h4>
				<p>
					{Array.isArray(resort.regions)
						? resort.regions[0].area
						: resort.regions.region.area}
				</p>
			</div>
			<div className="resortIcons">
				<i
					className="deleteIcon fas fa-trash-alt"
					onClick={() => removeResort(resort.id)}
				></i>
				<i
					className={
						resort.alarm
							? "alarmIcon alarmOn fas fa-bell"
							: "alarmIcon fas fa-bell"
					}
				></i>
			</div>
		</div>
	);
};

export default Resort;
