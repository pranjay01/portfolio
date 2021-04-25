import React, { Component } from "react";
import yelp from "./ProjectImages/YelpImages/yelp1.png";
import Carousel from "react-bootstrap/Carousel";

class ProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        role="presentation"
        className="MuiDialog-root"
        style={{ position: "fixed", zIndex: "1300", inset: "0px" }}
      >
        <div
          className="MuiBackdrop-root"
          aria-hidden="true"
          style={{
            opacity: "1",
            transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          }}
        ></div>
        <div tabindex="0" data-test="sentinelStart"></div>
        <div
          className="MuiDialog-container MuiDialog-scrollPaper"
          role="none presentation"
          tabindex="-1"
          style={{
            opacity: "1",
            transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          }}
        >
          <div
            className="MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiPaper-elevation24 MuiPaper-rounded"
            role="dialog"
            aria-labelledby="responsive-dialog-title"
          >
            <div className="MuiDialogTitle-root" id="responsive-dialog-title">
              <h2 className="MuiTypography-root MuiTypography-h6">
                Amazon Prototype
              </h2>
            </div>
            <div className="MuiDialogContent-root">
              <div style={{ borderStyle: "solid", borderColor: "black" }}>
                <div className="carousel slide">
                  <ol className="carousel-indicators">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li className="active"></li>
                  </ol>
                  <Carousel>
                    <Carousel.Item interval={1000}>
                      <img
                        className="d-block w-100"
                        src={yelp}
                        alt="First slide"
                        style={{ heigh: "35vh" }}
                      />
                      {/*<Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption>*/}
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                      <img
                        className="d-block w-100"
                        src={yelp}
                        alt="Second slide"
                        style={{ heigh: "35vh" }}
                      />
                      {/*<Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </Carousel.Caption>*/}
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                      <img
                        className="d-block w-100"
                        src={yelp}
                        alt="Third slide"
                        style={{ heigh: "35vh" }}
                      />
                      {/*<Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </Carousel.Caption>*/}
                    </Carousel.Item>
                  </Carousel>
                  {/*<div className="carousel-inner">
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={yelp}
                        alt="First slide"
                        style={{ height: "35vh" }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={yelp}
                        alt="First slide"
                        style={{ height: "35vh" }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={yelp}
                        alt="First slide"
                        style={{ height: "35vh" }}
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src={yelp}
                        alt="First slide"
                        style={{ height: "35vh" }}
                      />
                    </div>
                    <div className="active carousel-item">
                      <img
                        className="d-block w-100"
                        src={yelp}
                        alt="First slide"
                        style={{ height: "35vh" }}
                      />
                    </div>
                  </div>
        */}
                  <a className="carousel-control-prev" role="button" href="#">
                    <span
                      aria-hidden="true"
                      className="carousel-control-prev-icon"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" role="button" href="#">
                    <span
                      aria-hidden="true"
                      className="carousel-control-next-icon"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <p className="MuiTypography-root MuiDialogContentText-root MuiTypography-body1 MuiTypography-colorTextSecondary">
                <div className="mt-2">
                  <div>
                    <h6>Technology Stack:</h6>
                    <ul>
                      <li>Front-end: React.js, Redux</li>
                      <li>Back-end: Node.js, Express.js, Kafka MQ</li>
                      <li>Database: MongoDB, MySQL, Redis</li>
                      <li>Deployment: Amazon EC2</li>
                      <li>Testing: JUnit, Mocha</li>
                    </ul>
                  </div>
                  <div>
                    <h6>Personas</h6>
                    <ul>
                      <li>
                        Customer
                        <ul>
                          <li>Create new profile</li>
                          <li>Save Cards and Address</li>
                          <li>Add to cart</li>
                          <li>Order and CheckOut</li>
                        </ul>
                      </li>
                      <li>
                        Seller
                        <ul>
                          <li>Manage Inventory and Prices</li>
                          <li>View Statistics</li>
                          <li>Accept Order</li>
                          <li>Update Tracking Status</li>
                        </ul>
                      </li>
                      <li>
                        Admin
                        <ul>
                          <li>Add/Remove Categories</li>
                          <li>View Analytics Dashboard</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </p>
            </div>
            <div className="MuiDialogActions-root MuiDialogActions-spacing">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/kenamehta/AmazonPrototype"
                className="github_style_modal"
              >
                <img alt="" height="40px" src="github.svg" />
              </a>
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary"
                tabindex="0"
                type="button"
              >
                <span className="MuiButton-label">Done</span>
                <span className="MuiTouchRipple-root"></span>
              </button>
            </div>
          </div>
        </div>
        <div tabindex="0" data-test="sentinelEnd"></div>
      </div>
    );
  }
}

export default ProjectModal;
