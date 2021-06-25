const ResortInfo = ({ resort, viewMap }) => {

  return (
    <section className='main resortInfo'>
      <h1>{resort.name}</h1>
      <h2>{Array.isArray(resort.regions) ? resort.regions[0].area
                                        : resort.regions.region.area}</h2>
			<a className='resortWebsite' href={resort.officialWebsite}>{resort.officialWebsite}</a>
      <a className='viewMap' onClick={() => {viewMap(resort)}}>View Map</a>
    </section>
  )
}

export default ResortInfo
