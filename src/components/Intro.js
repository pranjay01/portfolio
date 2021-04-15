import React from "react";
// import "./stars.scss";
import Typed from "react-typed";
import Particles from "./Particle";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <header class="masthead" id="intro">
        <Particles />
        {/*<section id="bg-video-wrapper">
          <video autoplay="" loop="" id="bg-video">
            <source
              src="/static/media/videoplayback.b9c96910.mp4"
              type="video/mp4"
            />
    </video>
  </section>*/}
        <div class="container">
          <div class="masthead-heading text-uppercase">
            MR.
            <br />
            Pranjay Sagar
            <br />
            <hr />
          </div>
          <div class="masthead-subheading">
            I have vision, I have the ideas and I am an
            <br />
            engineer by passion to bring them to the life.
          </div>
          <br />
          <a
            class="btn btn-primary text-uppercase js-scroll-trigger"
            id="bio-intro-btn"
            href="#skills"
          >
            <span>LET'S START</span>
          </a>
          <section id="current-work" class="row">
            <hr />
            <article class="col-sm-5 text-left" id="current-work-text">
              CURRENTLY WORKING AS TEACHING ASSOCIATE AT . . .
            </article>
            <article class="col-sm-7 text-right" id="iit-logo">
              <img
                id="logo"
                src="assets/img/iitLogo.png"
                alt="IIT Logo"
                style={{ height: "80%", width: "50%" }}
              />
            </article>
          </section>
        </div>
      </header>
    );
  }
}

export default Intro;
