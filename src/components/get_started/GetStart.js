import './styles.css'
import Land from "./components/Land";

function GetStart() {
  return (
    <div className="lander" >
      <Land />
      {/* <Features image={Property[0].img} F1={Property[0].F1} P1={Property[0].P1} /> */}
      {/* <Features image={Property[1].img} F1={Property[1].F1} P1={Property[1].P1} /> */}
      {/* <Features image={Property[2].img} F1={Property[2].F1} P1={Property[2].P1} /> */}
      {/* <Features image={Property[3].img} F1={Property[3].F1} P1={Property[3].P1} /> */}
    </div>

  )
}

export default GetStart;