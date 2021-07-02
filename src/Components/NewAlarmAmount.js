const NewAlarmAmount = ({
	amount, setAmount,
	conditions,
	forecastConditions,
}) => {
	const handleChange = (event) => {
		setAmount(event.target.value);
	};

	return (
		<div className="newAlarmAmount">
			<p>
				Units in
				{forecastConditions.map((con) =>
					con.value === conditions ? " " + con.unit : ""
				)}
				:
			</p>
			{conditions === "winddir16Point" ? (
				<p>North=0 East=90 South=180 West=270</p>
			) : (
				""
			)}
			<input
				type="number"
				name="amount"
				value={amount}
				onChange={(e) => {
					handleChange(e);
				}}
			/>
		</div>
	);
};

export default NewAlarmAmount;
