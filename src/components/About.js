import React from 'react'
import AboutCard from './AboutCard'

const About = ({ homeRef, aboutRef, contactRef }) => {
  return (
    <>


      <div ref={aboutRef} className="bgded overlay "   >
        <section id="services" className="hoc  container clear">
          <div className="sectiontitle" id='about' >
            <p className="nospace font-xs">Quis leo hendrerit lectus morbi</p>
            <h6 className="heading font-x2">About</h6>
          </div>
          <ul className="nospace group elements elements-three">
            <div className="applic">

              <AboutCard heading="sqlite gxsfv sfxvdg hdfvdgfsv " description="ywdhvevie cecbi echews cewcchvie ecd hwebcyr ederbdcbdch ducbhubcuhvdh hi ih hwdihc dchc dwhc hiewbubcwbv " url="/" />
              <AboutCard heading="sqlite gxsfv sfxvdg hdfvdgfsv " description="ywdhvevie cecbi echews cewcchvie ecd hwebcyr ederbdcbdch ducbhubcuhvdh hi ih hwdihc dchc dwhc hiewbubcwbv " url="/" />
              <AboutCard heading="sqlite gxsfv sfxvdg hdfvdgfsv " description="ywdhvevie cecbi echews cewcchvie ecd hwebcyr ederbdcbdch ducbhubcuhvdh hi ih hwdihc dchc dwhc hiewbubcwbv " url="/" />
              <AboutCard heading="sqlite gxsfv sfxvdg hdfvdgfsv " description="ywdhvevie cecbi echews cewcchvie ecd hwebcyr ederbdcbdch ducbhubcuhvdh hi ih hwdihc dchc dwhc hiewbubcwbv " url="/" />

            </div>
          </ul>
        </section>
      </div>


      {/* </div > */}
      <div className="wrapper coloured">
        <section id="testimonials"
          className="hoc container clear">
          <div className="sectiontitle">
            <p className="nospace font-xs">Maecenas ultrices faucibus felis</p>
            <h6 className="heading font-x2">Nunc lacus nulla luctus duis</h6>
          </div>
          <article className="one_half first">
            <figure className="clear"><img src="images/demo/100x100.png" alt="" />
              <figcaption>
                <h6 className="heading">D. Doe</h6>
                <em>Adipiscing fusce eu velit</em>
              </figcaption>
            </figure>
            <blockquote>Pulvinar tortor quis nisi in hac habitasse platea dictumst donec ac tellus fusce venenatis laoreet
              elit sed est tortor molestie in consectetuer fringilla suscipit ut odio ut ac.</blockquote>
          </article>
        </section>
      </div>




    </>
  )
}

export default About
