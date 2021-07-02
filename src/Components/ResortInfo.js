const ResortInfo = ({ resort, viewMap, setPage }) => {

  return (
    <section className='main resortInfo'>
      <h1>{resort.name}</h1>
      <h4>{Array.isArray(resort.regions) ? resort.regions[0].area
                                        : resort.regions.region.area}</h4>
			<a className='resortWebsite' href={resort.officialWebsite}>{resort.officialWebsite}</a>
      <a className='viewMap' onClick={() => {viewMap(resort)}}>View Map</a>
      <a className='viewForecast' onClick={() => {setPage('Forecast')}}>View Forecast</a>
    </section>
  )
}

export default ResortInfo
