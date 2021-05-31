import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import yelp from "./ProjectImages/YelpImages/yelp1.png";
import Carousel from "react-bootstrap/Carousel";
import GitLogo from "./ProjectImages/GitHub-Mark-64px.png";

class ModalProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      // modalData: {
      //   title: "Glassdoor Prototype",
      //   imageList: [yelp, yelp, yelp],
      //   technology: [
      //     "Front-end: React.js, Redux",
      //     "Back-end: Node.js, Express.js, Kafka MQ",
      //     "Database: MongoDB, MySQL, Redis",
      //     "Deployment: Amazon EC2",
      //     "Testing: JUnit, Mocha",
      //   ],
      //   description:
      //     "The project is aimed at developing a prototype of Glassdoor web application. All three personas; Customer View, Company View and Admin view was developed. Most of the functionalities o the orignal glassdoor application was re developed using MERN stack",
      //   content: [
      //     {
      //       heading: "Customer",
      //       description: ["Create new profile", "Save Cards and Address"],
      //     },
      //   ],
      // },
    };
  }
  render() {
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    let modalData = this.props.modalData;
    console.log("props", modalData);
    return (
      <Modal
        scrollable={true}
        show={this.state.show}
        style={{
          //   maxWidth: "600px",
          maxHeight: "calc(100% - 64px)",
          //   top: "10%",
        }}
        // onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton={false}>
          <Modal.Title id="example-custom-modal-styling-title">
            {modalData.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ borderStyle: "solid", borderColor: "black" }}>
            <Carousel>
              {modalData.imageList.map((image) => (
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={image}
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
              ))}
              {/*<Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={yelp}
                    alt="First slide"
                    style={{ heigh: "35vh" }}
                  />
                  <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={yelp}
                    alt="Second slide"
                    style={{ heigh: "35vh" }}
                  />
                  <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                      </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src={yelp}
                    alt="Third slide"
                    style={{ heigh: "35vh" }}
                  />
                  <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                          Praesent commodo cursus magna, vel scelerisque nisl
                          consectetur.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>*/}
            </Carousel>

            {/*<div className="carousel slide">
              <ol className="carousel-indicators">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ol>
              <div className="carousel-inner">
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
            </div>*/}
          </div>
          <p className="MuiTypography-root MuiDialogContentText-root MuiTypography-body1 MuiTypography-colorTextSecondary">
            <div className="mt-2">
              <br />
              <div>
                <h6>Project Description:</h6>
                <p>{modalData.description}</p>
              </div>
              <div>
                <h6>Technology Stack:</h6>
                <ul>
                  {modalData.technology.map((tech) => (
                    <li>{tech}</li>
                  ))}
                  {/* <li>Front-end: React.js, Redux</li>
                  <li>Back-end: Node.js, Express.js, Kafka MQ</li>
                  <li>Database: MongoDB, MySQL, Redis</li>
                  <li>Deployment: Amazon EC2</li>
                 <li>Testing: JUnit, Mocha</li>*/}
                </ul>
              </div>
              {/*<div>
                <h6>Application & Functionalities</h6>
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
              </div>*/}
            </div>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/kenamehta/AmazonPrototype"
            className="github_style_modal"
          >
            <img alt="" height="40px" src={GitLogo} />
          </a>
          <button
            className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary"
            tabindex="0"
            type="button"
            onClick={() => this.props.handleModalShow()}
          >
            <span className="MuiButton-label">Done</span>
            <span className="MuiTouchRipple-root"></span>
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalProject;
