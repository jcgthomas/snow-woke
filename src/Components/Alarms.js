import { useState } from "react";
import Alarm from "./Alarm";
import NewAlarm from "./Alarm";

const Alarms = ({
	resorts,
	showList,
	setShowList,
	toggleAlarm,
	removeAlarm,
}) => {
	const addAlarm = (resort) => {
		setNewAlarm(resort);
		setShowList(false);
	};

	const [newAlarm, setNewAlarm] = useState("");

	return (
		<section className="main alarms">
			<div className="alarmsList">
				{resorts.length > 0 ? (
					resorts.map((resort) =>
						resort.alarms.length > 0
							? resort.alarms.map((alarm) => (
									<Alarm
										key={alarm.id}
										resort={resort}
										alarm={alarm}
										toggleAlarm={toggleAlarm}
										removeAlarm={removeAlarm}
									/>
							  ))
							: ""
					)
				) : (
					<p className="noResortsAdded">
						Add a resort using the + icon below
					</p>
				)}
			</div>

			<i
				className={
					showList & !newAlarm
						? "circleMenuButton remove fas fa-plus"
						: "circleMenuButton fas fa-plus"
				}
				title="Add Alarm"
				onClick={() => {
					showList ? setShowList(false) : setShowList(true);
				}}
			></i>

			<div className={showList & !newAlarm ? "slideUp list" : "list"}>
				{resorts.map((resort) => (
					<p
						key={resort.id}
						onClick={() => {
							addAlarm(resort);
						}}
					>
						{resort.name}
					</p>
				))}
			</div>

			<div className={newAlarm ? "slideUp newAlarm" : "newAlarm"}>
				<div className="newAlarmHeader">
					<h4>New Alarm</h4>
					<i
						className="fas fa-times"
						title="Exit"
						onClick={() => {
							setNewAlarm("");
						}}
					></i>
				</div>
				<h4>{newAlarm.name}</h4>
				<div className="newAlarmDetails">
					<form action="">
						<label htmlFor="units">
							Units in centimeters:
							<input type="number" name="cm's" id="" />
						</label>
						<label>
							Choose the condition:
							<input type="text" list="condition" />
						</label>
						<datalist id="condition">
							<option value="Total snow depth" />
							<option value="Snowfall over 8 hours" />
						</datalist>
					</form>
					<i className="fas fa-check" title="Save this alarm"></i>
				</div>
				<div className="recentWeather">
					<p>Summary of recent weather</p>
					<p>current snow depth</p>
					<p>average snowfall</p>
				</div>
			</div>
		</section>
	);
};

export default Alarms;
