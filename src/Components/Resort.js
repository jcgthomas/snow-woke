const Resort = ({ resort, showResort, removeResort, setPage }) => {

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
						Object.keys(resort.alarms).length > 0
							? "alarmIcon alarmOn fas fa-bell"
							: "alarmIcon fas fa-bell"
					}
          onClick={() => {setPage('Alarms')}}
				></i>
			</div>
		</div>
	);
};

export default Resort;
