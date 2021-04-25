import React, { Component } from "react";
import Project from "./Project";
import glassDoor from "./ProjectImages/glassdoorVectorLogo.svg";
import YelpLogo from "./ProjectImages/yelp-logo@logotyp.us.svg";
import ZillowLogo from "./ProjectImages/zillow-logo@logotyp.us.svg";
import currencyRemit from "./ProjectImages/dollar-exchange-svgrepo-com.svg";
import bloodBank from "./ProjectImages/blood-donation-svgrepo-com.svg";
import blazeSight from "./ProjectImages/BlazeSight.png";
// import ProjectModal from "./ProjectModal";
import ModalProject from "./ModalProject";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          id: 1,
          Name: "Glassdoor Prototype",
          Description: "Working Prototype of real Glassdoor application",
          imgageUrl: glassDoor,
          gitLink: "https://github.com/pranjay01/GlassDoor-CMPE273",
          imageList: [],
        },
        {
          id: 2,
          Name: "Yelp Prototype",
          Description: "Working Prototype of real Yelp application",
          imgageUrl: YelpLogo,
          gitLink:
            "https://github.com/pranjay01/YelpPrototype-MongoDB-Kafka-CMPE273-Lab2",
        },
        {
          id: 3,
          Name: "Zilllow Prototype",
          Description: "Working Prototype of real Zillow application",
          imgageUrl: ZillowLogo,
          gitLink: "https://github.com/pranjay01/ZillowPrototype-CMPE202",
        },
        {
          id: 4,
          Name: "CurrencyRemittance",
          Description: "Webportal for international currency transfer",
          imgageUrl: currencyRemit,
          gitLink: "https://github.com/pranjay01/CurrencyRemittance",
        },
        {
          id: 5,
          Name: "BloodBank Management",
          Description:
            "Webportal to link and manage stocks across blood banks in a city",
          imgageUrl: bloodBank,
          gitLink: "https://github.com/pranjay01/DB_BloodBankManagement",
        },
        {
          id: 6,
          Name: "Blaze Sight",
          Description:
            "DataScince project, developed model to detect fire in any environment",
          imgageUrl: blazeSight,
          gitLink: "https://github.com/pranjay01/Blaze-Sight-SummerTermProject",
        },
        {
          id: 7,
          Name: "Sound Profound",
          Description:
            "DataScince project, developed model to identify gun shot sound",
          imgageUrl: bloodBank,
          gitLink: "https://github.com/pranjay01/Sound-Profound-CMPE272",
        },
      ],
      viewModal: false,
    };
  }

  handleModalShow = () => {
    this.setState({
      viewModal: !this.state.viewModal,
    });
  };
  render() {
    return (
      <div id="work" class="project-bg">
        <div class="" style={{ padding: "50px" }}>
          <h1 class="tabs-heading">
            <u>Projects</u>
          </h1>
        </div>
        <div class="[object Object] mt-2 project-inner-bg">
          <div
            class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-5 MuiGrid-align-items-xs-center MuiGrid-justify-xs-center"
            scroll="paper"
            style={{ padding: "40px" }}
          >
            {this.state.projects.map((project) => (
              <Project
                handleModalShow={(id) => this.handleModalShow(id)}
                project={project}
              />
            ))}
            {/*<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-3">
              <div class="row">
                <div class="MuiPaper-root MuiCard-root project_card_style_1 project_card_style MuiPaper-elevation1 MuiPaper-rounded">
                  <div>
                    <div class="MuiCardHeader-root card_title">
                      <div class="MuiCardHeader-content">
                        <span class="MuiTypography-root MuiCardHeader-title MuiTypography-h5 MuiTypography-displayBlock">
                          Amazon Prototype
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      alt=""
                      class="coverpic_style"
                      height="150px"
                      src="amazon_cover.png"
                    />
                  </div>
                  <div class="MuiCardContent-root">
                    Working Prototype of real Amazon application
                    <div class="view-project-style">View</div>
                  </div>
                </div>
              </div>
              <div class="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/kenamehta/AmazonPrototype"
                >
                  <img
                    class="github_style"
                    alt=""
                    height="40px"
                    src="github.svg"
                  />
                </a>
              </div>
            </div>
            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-3">
              <div class="row">
                <div class="MuiPaper-root MuiCard-root project_card_style_2 project_card_style MuiPaper-elevation1 MuiPaper-rounded">
                  <div>
                    <div class="MuiCardHeader-root card_title">
                      <div class="MuiCardHeader-content">
                        <span class="MuiTypography-root MuiCardHeader-title MuiTypography-h5 MuiTypography-displayBlock">
                            Handshake Prototype
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      alt=""
                      class="coverpic_style"
                      height="150px"
                      src="handshake_cover.png"
                    />
                  </div>
                  <div class="MuiCardContent-root">
                      Working Prototype of real Handshake application
                    <div class="view-project-style">View</div>
                  </div>
                </div>
              </div>
              <div class="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://bitbucket.org/KenaMehta/handshake_lab2/src/master/"
                >
                  <img
                    class="github_style"
                    alt=""
                    height="40px"
                    src="bitbucket.svg"
                  />
                </a>
              </div>
            </div>
            <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-3">
              <div class="row">
                <div class="MuiPaper-root MuiCard-root project_card_style_3 project_card_style MuiPaper-elevation1 MuiPaper-rounded">
                  <div>
                    <div class="MuiCardHeader-root card_title">
                      <div class="MuiCardHeader-content">
                        <span class="MuiTypography-root MuiCardHeader-title MuiTypography-h5 MuiTypography-displayBlock">
                            Healing Hearts
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      alt=""
                      class="coverpic_style"
                      height="150px"
                      src="hh_cover.png"
                    />
                  </div>
                  <div class="MuiCardContent-root">
                      A common portal for donating and raising donations for NGOs
                    <div class="view-project-style">View</div>
                  </div>
                </div>
              </div>
              <div class="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/kenamehta/Healing-Hearts"
                >
                  <img
                    class="github_style"
                    alt=""
                    height="40px"
                    src="github.svg"
                  />
                </a>
              </div>
            </div>
    */}
          </div>
        </div>
        {/*this.state.viewModal ? <ProjectModal /> : null*/}
        {this.state.viewModal ? (
          <ModalProject handleModalShow={(id) => this.handleModalShow(id)} />
        ) : null}
      </div>
    );
  }
}
