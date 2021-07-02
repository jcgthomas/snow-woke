import NewAlarmCondition from "./NewAlarmCondition";
import NewAlarmAmount from "./NewAlarmAmount";
import NewAlarmRecent from "./NewAlarmRecent";
import { useState } from "react";

const NewAlarm = ({
	newAlarm,
	setNewAlarm,
	resort,
  resorts,
	setResorts,
	forecastConditions,
}) => {

	const [conditions, setConditions] = useState(forecastConditions[0].value);
	const [amount, setAmount] = useState(null);

  const handleSubmit = () => {
    const pushAlarm = (res) => {
      const alarm = {
          id: res.alarms.length + 1, 
					toggled: true,
					value: conditions,
					limit: amount
        }
      res.alarms.push(alarm)
      return res
    }
    !amount ? alert('Please fill out all alarm details before submitting') :
    setResorts(() => {
      return resorts.map((res) => (
        res.id !== resort.id ? res :
        pushAlarm(res)
      ))
    })
    setNewAlarm(false)
    setConditions(forecastConditions[0].value)
    setAmount(null)
  }

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
					<NewAlarmAmount
						forecastConditions={forecastConditions}
						conditions={conditions}
						amount={amount}
						setAmount={setAmount}
					/>
				</form>
				<i
					className="fas fa-check"
					title="Save this alarm"
					onClick={() => {
						handleSubmit();
					}}
				></i>
			</div>
      <NewAlarmRecent resort={resort} conditions={conditions} />
		</div>
	);
};

export default NewAlarm;
