const Map = ({
	resort,
	resortMap,
	resorts,
	setMap,
	showList,
	setShowList,
}) => {
	const returnMap = (link) => {
		if (link.image.url == null) {
			return link.sizes[0].url;
		} else {
			return link.image.url;
		}
	};

	return (
		<section className="main map">
			<h1>Maps</h1>
			<p>{resort.name}</p>

			<i
				className="circleMenuButton fas fa-images"
				title="Change Map"
				onClick={() => {
					showList ? setShowList(false) : setShowList(true);
				}}
			></i>

			<div className="mapImage">
				<a
					href={resortMap.original.url}
					target="_blank"
					title="Click to see large version"
					rel="noreferrer"
				>
					<img
						src={returnMap(resortMap)}
						alt={resort.name + " Map"}
					/>
				</a>
				<a className="mapFooter" href={resortMap.original.url}>
					Pinch to zoom or click to view high resolution
				</a>
			</div>

			<div className={showList ? "slideUp list" : "list"}>
				{resorts.map((resort) => (
					<p
						key={resort.id}
						onClick={() => {
							setMap(resort);
						}}
					>
						{resort.name}
					</p>
				))}
			</div>
		</section>
	);
};

export default Map;
