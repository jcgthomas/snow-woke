const Resort = ({  resort, showResort }) => {
  return (
		<div
			className="resort"
			onClick={() => {
				showResort(resort)
			}}
		>
			<h4>{resort.name}</h4>
			<p>{Array.isArray(resort.regions)
				? resort.regions[0].area
				: resort.regions.region.area}</p>
		</div>
  );
}

export default Resort
