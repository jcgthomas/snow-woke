const Map = ({
	resort,
	resortMap,
	resorts,
	setMap,
	showMapList,
	setShowMapList,
}) => {
	const returnMap = (link) => {
		if (link.image.url == null) {
			return link.sizes[0].url;
		} else {
			return link.image.url;
		}
	};

	const openMapList = () => {
		setShowMapList(true);
	};

	return (
		<section className="main map">
			<h1>{resort.name}</h1>

			<i
				className="circleMenuButton fas fa-images"
				title="Change Map"
				onClick={() => {
					showMapList ? setShowMapList(false) : setShowMapList(true);
				}}
			></i>

			<div className="mapImage">
				<a
					href={resortMap.original.url}
					target="_blank"
					title="Click to see large version"
				>
					<img
						src={returnMap(resortMap)}
						alt={resort.name + " Map"}
					/>
				</a>
				<a className='mapFooter' href={resortMap.original.url}>
					Pinch to zoom or click to view high resolution
				</a>
			</div>

			<div className={showMapList ? "slideUp mapList" : "mapList"}>
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
