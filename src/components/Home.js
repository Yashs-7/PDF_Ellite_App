import React from 'react';
import { Link } from 'react-router-dom';
import CardHome from './CardHome';
import './styles/layout.css';
const property=require(  './property.json');



const Home = ({homeRef,aboutRef,contactRef}) => {



  return (<>
   
    <div ref={homeRef} id='home' className="bgded overlay"  >
      <div id="pageintro" className="hoc clear" >
        <article   >
          <h3 className="heading">PDF Elite</h3>
          <p>In nibh nullam egestas velit laoreet nullam elementum ipsum pharetra suscipit leo augue pretium felis nisl
            vitae ipsum curabitur quis libero.</p>
          <footer><Link className="btn" to="/signup">Get Started</Link></footer>
        </article>
      </div>
    </div>
    <div className="wrapper row3" >
      <main className="hoc container clear">
        <section id="introblocks" >
          <ul className="nospace group btmspace-80 elements elements-four ">
          {
            property.properties.map((ele)=>{
              return(
                <CardHome heading={ele.F1} description={ele.P1} imgUrl={ele.img} />
              )
            })
          }
          </ul>
        </section>

        <div className="clear"></div>
      </main>
    </div>
    <script src="layout/scripts/jquery.backtotop.js"></script>
    <script src="layout/scripts/login.js"></script>

  </>
  )

}

export default Home;
