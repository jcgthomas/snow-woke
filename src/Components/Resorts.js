import Resort from './Resort'

const Resorts = ({ resorts, handleChange, filteredResorts, openSearch, setOpenSearch }) => {
  return (
    <section className="main resorts">
      <div className="resortList">
          {resorts ? resorts.map((resort) => (
            <Resort key={resort.id} resort={resort}/>
            )) : 'Add a resort using the + icon below'}
      </div>
      
      <div className="add"
           onClick={() => openSearch ? setOpenSearch(false) : setOpenSearch(true)}>
        <span>
          {openSearch ? 'x': '+'}
        </span>
      </div>
      
      {openSearch ? 
        <div className="addResort">
          <input type="text" 
                className='resortSearch'
                placeholder='Enter a resort'
                onChange={handleChange}
          />

          <div className="searchResults">
            {filteredResorts.map((resort) => (
              <p key={resort.id}>{resort.name}</p>
            ))}
          </div>
        </div>
        : '' 
      }
      
    </section>
  )
}

export default Resorts
