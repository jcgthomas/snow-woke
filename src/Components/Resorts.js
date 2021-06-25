import Resort from './Resort'

const Resorts = ({ resorts, addResort, handleChange, filteredResorts, openSearch, setOpenSearch, setSearchInput, searchInput, showResort }) => {
  return (

    <section className="main resorts">

      <div className={openSearch ? "hidden resortList" : "resortList"}>
          {resorts.length > 0 ? resorts.map((resort) => (
            <Resort key={resort.id} 
                    resort={resort}
                    showResort={showResort}
                    />
            )) : 'Add a resort using the + icon below'}
      </div>
      
      <i className={openSearch ? 'remove add fas fa-plus' : 'add fas fa-plus'}
           onClick={() => {
             if (openSearch) {
              setOpenSearch(false)
              setSearchInput("")
            } else {
              setOpenSearch(true)
            }}}
            title='Add resort(s)'>
      </i>
      
      {openSearch ? 
        <div className="addResort">
          <div className="inputWrapper">
            <input type="text" 
                className='resortSearchBox'
                placeholder='Enter a resort'
                onChange={handleChange}
          />
          </div>
          

          <div className="searchResults">
            {searchInput.length > 0 ? 
              filteredResorts.map((resort) => (
                <p key={resort.id}
                   onClick={() => addResort(resort)}>{resort.name}</p>))
              : ''
            }
          </div>
        </div>
        : '' 
      }
      
    </section>
  )
}

export default Resorts
