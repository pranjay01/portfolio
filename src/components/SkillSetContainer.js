import React from "react";

class SkillSetContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div class="skills-sets-container">
        <div class="skills-label-container">
          <span class="skills-label">{this.props.skill.type}</span>
        </div>
        <div class="skills-separator-container">
          <div class="skills-separator-line"></div>
          <div class="skills-separator-circle">
            <div class="skills-separator-inner-circle"></div>
          </div>
        </div>
        <div class="skills-items-container">
          {this.props.skill.list.map((skillitem) => (
            <div class="skills-item-container">
              <span class="skills-item-text">{skillitem}</span>
            </div>
          ))}
          {/*<div class="skills-item-container">
            <span class="skills-item-text">Python</span>
          </div>
          <div class="skills-item-container">
            <span class="skills-item-text">Java</span>
          </div>
          <div class="skills-item-container">
            <span class="skills-item-text">JavaScript</span>
          </div>
          <div class="skills-item-container">
            <span class="skills-item-text">Golang</span>
          </div>
          <div class="skills-item-container">
            <span class="skills-item-text">Kotlin</span>
          </div>
          <div class="skills-item-container">
            <span class="skills-item-text">PHP</span>
    </div>*/}
        </div>
      </div>
    );
  }
}

export default SkillSetContainer;
