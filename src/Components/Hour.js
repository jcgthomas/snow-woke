const Hour = ({ unit }) => {
  return <div className="hour">{unit == 0 ? '0' : unit}</div>;
}

export default Hour
