const Header = () => {
  return (
		<div className="header">
			{/* Search button */}
			<i className="searchButton fas fa-search menuIcon" ></i>
      <h1 className='headerTitle'>SnoWoke</h1>
			{/* Settings button */}
			<i className="settingsButton fas fa-cog menuIcon"></i>
		</div>
  );
}

export default Header
