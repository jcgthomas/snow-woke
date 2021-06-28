const Updated = ({ resort, weather }) => {
	return (
		<div className='updated'>
			Last updated {Math.floor((Date.now() - resort.lastCheck) / 60000)}
			{Math.floor((Date.now() - resort.lastCheck) / 60000) !== 1
				? " minutes "
				: " minute "}
			ago on {weather.date}
		</div>
	);
};

export default Updated;
