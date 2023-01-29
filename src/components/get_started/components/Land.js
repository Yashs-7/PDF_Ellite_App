import Login from "./Login";
import SignUp from "./Signup";
import Time from "./Time";
function Land() {
  return (
    <>
      {/* <div className="get-start-heading"> */}
        {/* <div className="timer">
          <Time />
        </div> */}
      {/* </div> */}
      <div className="landing">
        <Login />
        <SignUp />
      </div>
    </>
  );
}
export default Land;
