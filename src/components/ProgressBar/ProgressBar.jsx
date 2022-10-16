import "./ProgressBar.css";
const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 8,
    width: "100%",
    // outline: "1px solid red",
    backgroundColor: "#E7E7EB",
    borderRadius: 50,
    // margin: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    // outline: "1px solid red",
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div className="progress-bar">
      <div className="labels">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <div style={containerStyles}>
        <div style={fillerStyles}>{/* <span style={labelStyles}>{`${completed}%`}</span> */}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
