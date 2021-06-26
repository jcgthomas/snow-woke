const Alarms = ({ openAlarm }) => {
  return (
		<section className="main alarms">
			<h1>My Alarms</h1>

			<i
				className={
					openAlarm
						? "circleMenuButton remove fas fa-plus"
						: "circleMenuButton fas fa-plus"
				}
				onClick={() => ""}
			></i>
		</section>
  );
}

export default Alarms
