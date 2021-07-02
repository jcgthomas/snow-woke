const NewAlarmCondition = ({
	forecastConditions,
	conditions,
	setConditions,
}) => {
	const handleChange = (event) => {
		setConditions(event.target.value);
	};

	return (
		<div className="newAlarmCondition">
			<p>Weather condition:</p>
			<select
				onChange={(e) => {
					handleChange(e);
				}}
				id="weather condition"
        value={conditions}
			>
				{forecastConditions.map((condition) => (
					<option key={condition.title} value={condition.value}>
						{condition.title}
					</option>
				))}
			</select>
		</div>
	);
};

export default NewAlarmCondition;
