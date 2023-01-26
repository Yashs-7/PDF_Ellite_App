import React from 'react';
import { Link } from 'react-router-dom';

const Lower = ({homeRef,aboutRef,contactRef}) => {
  return (
    <>
      
    <div ref={contactRef} className="bgded overlay row4" >
                <footer id="footer"
                    className="hoc clear">
                    <div className="one_quarter first" id='contact' >
                        <h1 className="logoname"><Link to='/'><strong style={{ fontSize: '2rem' }}>PDF</strong><span style={{ fontSize: '1.5rem', fontWeight: '800' }}>&nbsp;E</span><span style={{ fontSize: '1.1rem' }}>lite</span></Link></h1>
                        <p>Scelerisque facilisis sapien turpis facilisis libero eu viverra purus dui ac leo sed vitae diam morbi sed
                            nibh in eget dolor phasellus rhoncus odio morbi elit nunc id elit donec elementum [<Link to="/">&hellip;</Link>]
                        </p>
                        <ul className="faico clear">
                            <li><Link className="faicon-facebook"
                                to="/"><i className="fa fa-facebook"></i></Link></li>
                            <li><Link className="faicon-google-plus"
                                to="/"><i className="fa fa-google-plus"></i></Link></li>
                            <li><Link className="faicon-linkedin"
                                to="/"><i className="fa fa-linkedin"></i></Link></li>
                            <li><Link className="faicon-twitter"
                                to="/"><i className="fa fa-twitter"></i></Link></li>
                            <li><Link className="faicon-vk"
                                to="/"><i className="fa fa-github"></i></Link></li>
                        </ul>
                    </div>

                </footer>
            </div>

            <div className="wrapper row5">
                <div id="copyright"
                    className="hoc clear">

                    <p className="fl_left">Copyright &copy; 2023 - All Rights Reserved - <Link to="/">PDF  Elite</Link></p>

                </div>
            </div>

            <Link id="backtotop"
                to="/top"><i className="fas fa-chevron-up"></i></Link>


    </>
  )
}

export default Lower
