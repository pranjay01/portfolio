import React from "react";
// import "./stars.scss";
// import Typed from "react-typed";
import Particles from "./Particle";
// import logo from "../img/sjsuLogo.png";
// import React from 'react';
import { SocialIcon } from "react-social-icons";

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
            Every domain of Software is unique, and
            <br />
            its my vision as an Engineer to explore each.
          </div>
          <br />
          <a
            class="btn btn-primary text-uppercase js-scroll-trigger"
            id="bio-intro-btn"
            href="#skills"
            style={{
              zIndex: "20",
              backgroundColor: "#909090",
              borderColor: "#909090",
            }}
          >
            <span>Download Resume</span>
          </a>
          <div
            style={{
              paddingTop: "1%",
              paddingLeft: "5%",
            }}
          >
            <SocialIcon
              style={{
                bgColor: "transparent",
                marginRight: "1%",
                height: 30,
                width: 30,
              }}
              url="https://www.linkedin.com/in/pranjay-sagar/"
            />
            <SocialIcon
              style={{
                bgColor: "transparent",
                marginRight: "1%",
                height: 30,
                width: 30,
              }}
              url="https://www.youtube.com/channel/UCBwzaYjpDMZW8Ehxoi0k2WQ/"
            />
            <SocialIcon
              bgColor="#000"
              style={{
                marginRight: "1%",
                height: 30,
                width: 30,
              }}
              url="https://github.com/pranjay01"
            />
          </div>

          {/*<section id="current-work" class="row">
            <hr />
            <article class="col-sm-5 text-left" id="current-work-text">
              CURRENTLY WORKING AS TEACHING ASSOCIATE AT
            </article>
            <article class="col-sm-7 text-right" id="iit-logo">
              <img
                id="logo"
                // src="../img/sjsuLogo.png"
                src={logo}
                alt="SJSU Logo"
                style={{ height: "50%", width: "50%" }}
              />
            </article>
          </section>
          <section id="current-work" class="row">
            {" "}
            <hr />
            <article class="col-sm-5 text-left" id="current-work-text">
              CURRENTLY WORKING AS TEACHING ASSOCIATE AT . . .
            </article>
          </section>
*/}
        </div>
      </header>
    );
  }
}

export default Intro;
