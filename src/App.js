import { useState } from 'react'

import './Styles/style.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Resorts from './Components/Resorts'
import Alarms from './Components/Alarms'
import Forecast from './Components/Forecast'
import Map from './Components/Map'


function App() {

  const [page, setPage] = useState('Resorts')
  const [resorts, setResorts] = useState([
    {
      id: 1,
      name: 'Solden',
      country: 'Austria',
      height: '1400m'
    },
    {
      id: 2,
      name: 'St Anton',
      country: 'Austria',
      height: '1440m'
    },
    {
      id: 3,
      name: 'Zermatt',
      country: 'Switzerland',
      height: '1350m'
    },
    {
      id: 4,
      name: 'St Anton',
      country: 'Austria',
      height: '1440m'
    },
    {
      id: 5,
      name: 'Zermatt',
      country: 'Switzerland',
      height: '1350m'
    },
    {
      id: 6,
      name: 'Solden',
      country: 'Austria',
      height: '1400m'
    },
    {
      id: 7,
      name: 'St Anton',
      country: 'Austria',
      height: '1440m'
    },
    {
      id: 8,
      name: 'Zermatt',
      country: 'Switzerland',
      height: '1350m'
    },
    {
      id: 9,
      name: 'Solden',
      country: 'Austria',
      height: '1400m'
    },
    {
      id: 10,
      name: 'St Anton',
      country: 'Austria',
      height: '1440m'
    },
    {
      id: 11,
      name: 'Zermatt',
      country: 'Switzerland',
      height: '1350m'
    }
  ])
  const [searchInput, setSearchInput] = useState('')

  const [searchBox, setSearchBox] = useState(false)
  
  const handleChange = e => {
    setSearchInput(e.target.value)
  }

  const filteredResorts = resorts.filter(resort =>
    resort.name.toLowerCase().includes(searchInput.toLowerCase()))

  const renderSwitch = (page) => {
    switch(page) {
      case 'Resorts':
        return <Resorts resorts={resorts} 
                        handleChange={handleChange}
                        filteredResorts={filteredResorts}
                        openSearch={searchBox}
                        setOpenSearch={setSearchBox}/>
      case 'Alarms':
        return <Alarms />
      case 'Forecast':
        return <Forecast />
      case 'Map':
        return <Map />
    }
  }

  return (
    <div className="snowWoke">
      <Header />
      {renderSwitch(page)}
      <Footer changePage={setPage} currentPage={page}/>
    </div>
  );
}


export default App;
