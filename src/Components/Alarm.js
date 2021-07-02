const Resort = ({
	resort,
	alarm,
	showResort,
	removeResort,
	toggleAlarm,
	removeAlarm,
	forecastConditions,
}) => {
	return (
		<div className={alarm.toggled ? "alarm" : "alarm alarmOff"}>
			<div
				className="alarmTitle"
				onClick={() => {
					console.log("View alarm");
				}}
			>
				<h4>{resort.name}</h4>
				<div className="alarmDetails">
					<p>
						{forecastConditions.map((condition) =>
							alarm.value === condition.value
								? condition.title +
								  " : " +
								  alarm.limit
								: ""
						)}
					</p>
				</div>
			</div>
			<div className="alarmIcons">
				<i
					className="deleteIcon fas fa-trash-alt"
					onClick={() => {
						removeAlarm(resort.id, alarm.id);
					}}
				></i>
				<i
					className={
						alarm.toggled
							? "alarmToggle alarmToggleOn fas fa-toggle-on"
							: "alarmToggle fas fa-toggle-on"
					}
					onClick={() => {
						toggleAlarm(resort.id, alarm.id);
					}}
				></i>
			</div>
		</div>
	);
};

export default Resort;
