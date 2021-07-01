import NewAlarmCondition from "./NewAlarmCondition";
import { useState } from "react";

const NewAlarm = ({
	newAlarm,
	setNewAlarm,
	resort,
	setResorts,
	forecastConditions,
}) => {
	const [conditions, setConditions] = useState(forecastConditions[0].title);

	return (
		<div className={newAlarm ? "slideUp newAlarm" : "newAlarm"}>
			<div className="newAlarmHeader">
				<h4>New Alarm</h4>
				<i
					className="fas fa-times"
					title="Exit"
					onClick={() => {
						setNewAlarm(false);
					}}
				></i>
			</div>
			<h4>{resort.name}</h4>
			<div className="newAlarmDetails">
				<form action="">
					<NewAlarmCondition
						forecastConditions={forecastConditions}
						conditions={conditions}
						setConditions={setConditions}
					/>
					<label htmlFor="units">
						Units in centimeters:
						<input type="number" name="cm's" id="" />
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
	);
};

export default NewAlarm;
