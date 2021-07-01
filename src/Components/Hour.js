const Hour = ({ unit }) => {

  const checkUnit = () => {
    if (unit == 0) {
      unit = "0"
    }
    return unit
  }

  return <div className="hour">{checkUnit()}</div>;
}

export default Hour
