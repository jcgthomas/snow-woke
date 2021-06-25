const Alarms = ({ openAlarm }) => {
  return (
    <section className="main alarms">
      <h1>My Alarms</h1>

      
      <i className={openAlarm ? 'remove add fas fa-plus' : 'add fas fa-plus'}
           onClick={() => ''}>
      </i>

    </section>
  )
}

export default Alarms
