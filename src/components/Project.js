import React, { Component } from "react";
import GitLogo from "./ProjectImages/GitHub-Mark-64px.png";

export default class Project extends Component {
  render() {
    // console.log(this.props);
    var project = this.props.project;
    return (
      <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-3">
        <div class="row">
          <div class="MuiPaper-root MuiCard-root project_card_style_1 project_card_style MuiPaper-elevation1 MuiPaper-rounded">
            <div>
              <div class="MuiCardHeader-root card_title">
                <div class="MuiCardHeader-content">
                  <span class="MuiTypography-root MuiCardHeader-title MuiTypography-h5 MuiTypography-displayBlock">
                    {project.Name}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img
                alt=""
                class="coverpic_style"
                height="150px"
                src={project.imgageUrl}
              />
            </div>
            <div class="MuiCardContent-root">
              {this.props.project.Description}
              <div
                onClick={() => this.props.handleModalShow(project.id)}
                class="view-project-style"
              >
                View
              </div>
            </div>
          </div>
        </div>
        <div class="mt-2">
          <a target="_blank" rel="noopener noreferrer" href={project.gitLink}>
            <img class="github_style" alt="" height="40px" src={GitLogo} />
          </a>
        </div>
      </div>
    );
  }
}
