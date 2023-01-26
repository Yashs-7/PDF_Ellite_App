import Login from "./Login";
import SignUp from "./Signup";
import Time from "./Time";
function Land() {
  return (
    <>
      <div className="get-start-heading">
        <h1 className="get-start-header">
          PDF<span>Elite</span>
        </h1>
        <div className="timer">
          <Time />
        </div>
      </div>
      <div className="landing">
        <Login />
        <SignUp />
      </div>
    </>
  );
}
export default Land;
