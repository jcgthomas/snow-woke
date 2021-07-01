import { useState } from "react";
import Alarm from "./Alarm";
import NewAlarm from "./NewAlarm";

const Alarms = ({
	resorts,
	setResorts,
  resort,
  setResortInfo,
	showList,
	setShowList,
	forecastConditions,
}) => {

  const [newAlarm, setNewAlarm] = useState(false)

	// Switches saved alarms on and off without deleting them

	const toggleAlarm = (resortId, alarmId) => {
		const alarmMap = (resort) => {
			let newAlarms = resort.alarms.map((alarm) =>
				alarm.id !== alarmId
					? alarm
					: { ...alarm, toggled: !alarm.toggled }
			);
			return { ...resort, alarms: newAlarms };
		};
		setResorts((resorts) => {
			return resorts.map((resort) =>
				resort.id !== resortId ? resort : alarmMap(resort)
			);
		});
	};

	// Deletes saved alarms

	const removeAlarm = (resortId, alarmId) => {
		let alarmMap = (resort) => {
			let newAlarms = resort.alarms.filter(
				(alarm) => alarm.id !== alarmId
			);
			return { ...resort, alarms: newAlarms };
		};
		setResorts((resorts) => {
			return resorts.map((resort) =>
				resort.id !== resortId ? resort : alarmMap(resort)
			);
		});
	};

	const addAlarm = (resort) => {
		setResortInfo(resort);
		setShowList(false);
    setNewAlarm(true)
	};

	return (
		<section className="main alarms">
			<h1>Alarms</h1>
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
										forecastConditions={forecastConditions}
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
					showList
						? "circleMenuButton remove fas fa-plus"
						: "circleMenuButton fas fa-plus"
				}
				title="Add Alarm"
				onClick={() => {
					showList ? setShowList(false) : setShowList(true)
				}}
			></i>

			<div className={showList ? "slideUp list" : "list"}>
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

			<NewAlarm
				resort={resort}
				forecastConditions={forecastConditions}
        setResorts={setResorts}
        newAlarm={newAlarm}
        setNewAlarm={setNewAlarm}
			/>
		</section>
	);
};

export default Alarms;
