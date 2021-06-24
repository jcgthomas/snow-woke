const Resort = ({  resort }) => {
  return (
    <div className='resort'>
      <p>{resort.name}</p>
      <p>Altitude: {resort.height}</p>
    </div>
  )
}

export default Resort
