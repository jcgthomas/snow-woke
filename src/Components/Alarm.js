const Resort = ({ resort, alarm, showResort, removeResort, toggleAlarm, removeAlarm }) => {


	return (
		<div className={alarm.toggled ? 'alarm' : 'alarm alarmOff'}>
			<div
				className="alarmTitle"
				onClick={() => {
					console.log("View alarm");
				}}
			>
				<h5>{resort.name}</h5>
				<div className="alarmDetails">
          <h4>Alarm: </h4>
					<p>{alarm.type} </p>
					<p>{alarm.limit}cm</p>
				</div>
			</div>
			<div className="alarmIcons">
				<i
					className="deleteIcon fas fa-trash-alt"
					onClick={() => {
            removeAlarm(resort.id, alarm.id)
          }}
				></i>
				<i
					className={
						alarm.toggled
							? "alarmToggle alarmOn fas fa-toggle-on"
							: "alarmToggle fas fa-toggle-on"
					}
					onClick={() => {
            toggleAlarm(resort.id, alarm.id)
					}}
				></i>
			</div>
		</div>
	);
};

export default Resort;
