import "./ProgressBar.css";
const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: "100%",
    outline: "1px solid red",
    backgroundColor: "#e0e0de",
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
    <div style={containerStyles}>
      <div style={fillerStyles}>{/* <span style={labelStyles}>{`${completed}%`}</span> */}</div>
    </div>
  );
};

export default ProgressBar;
