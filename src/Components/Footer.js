const Footer = ({ changePage, currentPage }) => {

  const iconHighlight = (icon) => {
    return icon === currentPage ? '#1e3a5c' : ''
  }

  return (

		<div className="footer">

			<i className="fas fa-mountain" 
         onClick={() => changePage("Resorts")}
         style={{ color: iconHighlight("Resorts")}}></i>

			<i className="fas fa-bell" 
         onClick={() => changePage("Alarms")}
         style={{ color: iconHighlight("Alarms")}}></i>

			<i className="fas fa-snowflake"
				 onClick={() => {changePage("Forecast")}}
         style={{ color: iconHighlight("Forecast")}}></i>

			<i className="fas fa-map"
         onClick={() => changePage("Map")}
         style={{ color: iconHighlight("Map")}}></i>

		</div>
    
  );
}

export default Footer
