import React, { Component } from "react";
import { init } from "emailjs-com";
import apiKey from "./emailkey";
import emailjs from "emailjs-com";
init("user_sw1oRlWKtAyHgpeZwQSlI");

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  email = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    console.log("e.target", e.target);
    console.group("apiKey.TEMPLATE_ID", apiKey.TEMPLATE_ID);
    console.group("apiKey.USER_ID", apiKey.USER_ID);
    emailjs
      .sendForm(`service_8kmd2rp`, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
      .then(
        (result) => {
          alert("Message Sent, We will get back to you shortly", result.text);
        },
        (error) => {
          alert("An error occurred, Please try again", error.text);
        }
      );
  };

  render() {
    return (
      <div
        id="contact"
        className="container contactContainer"
        style={{
          background: "#10121b",
          marginTop: "3em",
          maxWidth: "100% !important",
        }}
      >
        <div class="mi-contact-area mi-section mi-padding-top mi-padding-bottom">
          <div
            class="container"
            style={{
              maxWidth: "75% !important",
            }}
          >
            <div class="mi-sectiontitle">
              <h2
                style={{
                  fontSize: "2.57rem",
                  lineHeight: "3.2857rem",
                  color: "#fff",
                }}
              >
                Contact Me
              </h2>
              <span style={{ color: "#292d3a" }}>Contact Me</span>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="mi-contact-formwrapper">
                  <h4
                    style={{
                      color: "#fff",
                    }}
                  >
                    Get In Touch
                  </h4>
                  <form onSubmit={this.email} class="mi-form mi-contact-form">
                    <div class="mi-form-field">
                      <label for="contact-form-name">Enter your name*</label>
                      <input
                        type="text"
                        name="firstname"
                        id="contact-form-name"
                        required
                      />
                    </div>
                    <div class="mi-form-field">
                      <label for="contact-form-email">Enter your email*</label>
                      <input
                        type="text"
                        name="email"
                        id="contact-form-email"
                        required
                      />
                    </div>
                    <div class="mi-form-field">
                      <label for="contact-form-subject">
                        Enter your subject*
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="contact-form-subject"
                        required=""
                      />
                    </div>
                    <div class="mi-form-field">
                      <label for="contact-form-message">
                        Enter your Message*
                      </label>
                      <textarea
                        name="message"
                        id="contact-form-message"
                        cols="30"
                        rows="6"
                        required
                      ></textarea>
                    </div>
                    <div class="mi-form-field">
                      <button class="mi-button" type="submit">
                        Send Mail
                      </button>
                    </div>
                  </form>
                  {/*<div class="alert alert-danger mt-4">Name is required</div>
                   */}{" "}
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mi-contact-info">
                  <div class="mi-contact-infoblock">
                    <span class="mi-contact-infoblock-icon">
                      <svg
                        style={{ color: "rgb(106 145 181)" }}
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                      </svg>
                    </span>
                    <div class="mi-contact-infoblock-content">
                      <h6 style={{ color: "#fff" }}>Phone</h6>
                      <p style={{ color: "rgb(106 145 181)" }}>
                        <a
                          style={{ color: "rgb(106 145 181)" }}
                          href="+13136525478"
                        >
                          +1 (313)-652-5478
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="mi-contact-infoblock">
                    <span class="mi-contact-infoblock-icon">
                      <svg
                        style={{ color: "rgb(106 145 181)" }}
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                      </svg>
                    </span>
                    <div class="mi-contact-infoblock-content">
                      <h6 style={{ color: "#fff" }}>Email</h6>
                      <p>
                        <a
                          style={{ color: "rgb(106 145 181)" }}
                          href="mailto:pranjay.sagar01@gmail.com"
                        >
                          pranjay.sagar01@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="mi-contact-infoblock">
                    <span class="mi-contact-infoblock-icon">
                      <svg
                        style={{ color: "rgb(106 145 181)" }}
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 384 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                      </svg>
                    </span>
                    <div class="mi-contact-infoblock-content">
                      <h6 style={{ color: "#fff" }}>Address</h6>
                      <p style={{ color: "rgb(106 145 181)" }}>
                        1710, Blue Spruce Way. Milpitas, CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
