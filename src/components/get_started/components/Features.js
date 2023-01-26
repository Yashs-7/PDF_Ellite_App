
function Features(props) {
  return (
    <div className="feature">
      <div className="features-1">
        <img className="get-start-img" src={props.image} alt="" />
        <h1>{props.F1}</h1>
        <p>{props.P1}</p>
      </div>
    </div>
  );
}
export default Features;
