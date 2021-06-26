import Resort from "./Resort";

const Resorts = ({
	resorts,
	addResort,
	handleChange,
	filteredResorts,
	openSearch,
	setOpenSearch,
	setSearchInput,
	searchInput,
	showResort,
	removeResort,
}) => {
	return (
		<section className="main resorts">
			<div className='resortList'>
				{resorts.length > 0
					? resorts.map((resort) => (
							<Resort
								key={resort.id}
								resort={resort}
								showResort={showResort}
								removeResort={removeResort}
							/>
					  ))
					: <p className='noResortsAdded'>Add a resort using the + icon below</p>}
			</div>

			<i
				className={
					openSearch
						? "circleMenuButton remove fas fa-plus"
						: "circleMenuButton fas fa-plus"
				}
				onClick={() => {
					if (openSearch) {
						setOpenSearch(false);
						setSearchInput("");
					} else {
						setOpenSearch(true);
					}
				}}
				title="Add resort(s)"
			></i>

			<div className={openSearch ? 'slideUp addResort' : 'addResort'}>
					<input
						type="text"
						className="resortSearchBox"
						placeholder="Enter a resort"
						onChange={handleChange}
					/>

				<div className="searchResults">
					{searchInput.length > 0
						? filteredResorts.map((resort) => (
								<p
									key={resort.id}
									onClick={() => addResort(resort)}
								>
									{resort.name}
								</p>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Resorts;
