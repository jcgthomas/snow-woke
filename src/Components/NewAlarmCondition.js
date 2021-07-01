const NewAlarmCondition = ({ forecastConditions, conditions, setConditions }) => {
  
	return (
		<div className="newAlarmCondition">
			Weather condition:
			<select>
				<option value='snowfall'>Snowfall - next 24h</option>
				{forecastConditions.map((condition) => (
					<option key={condition.title} value={condition.title}>
						{condition.title}
					</option>
				))}
			</select>

		</div>
	);
};

export default NewAlarmCondition;
