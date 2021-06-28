import Hour from "./Hour";

const Hourly = ({ weather, setHours, title, param }) => {

  const getParam = (hour) => {
    return Object.entries(hour).map(([key, value]) => {
      return (
        key === param && value
      )
    })
  }


	return (
		<div className="hourlyDiv">
			<h3>{title}</h3>
			<div className={title}>
				<div className="hourly hours">
					<p>Time</p>
					{setHours().map((hour) => (
						<Hour key={hour} unit={hour} />
					))}
				</div>
				<div className="hourly">
					<p>Peak</p>
					{weather.hourly.map((hour) => (
						<Hour
							key={Math.random()}
							unit={getParam(hour.top[0])}
						/>
					))}
				</div>
				<div className="hourly">
					<p>Mid</p>
					{weather.hourly.map((hour) => (
						<Hour
							key={Math.random()}
							unit={getParam(hour.mid[0])}
						/>
					))}
				</div>
				<div className="hourly">
					<p>Base</p>
					{weather.hourly.map((hour) => (
						<Hour
							key={Math.random()}
							unit={getParam(hour.bottom[0])}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Hourly;
