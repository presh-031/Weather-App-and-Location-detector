import ReactLoading from "react-loading";

import "./Loading.css";
const Loading = ({ type, color }) => (
  <ReactLoading className="loading" type={type} color={color} height={"100%"} width={"100%"} />
);

export default Loading;
