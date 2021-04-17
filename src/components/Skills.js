import React from "react";
import SkillSetContainer from "./SkillSetContainer";
// import myImage from "../img/myImage.png";

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          type: "Languages",
          list: ["Java", "JavaScript", "Python", "C++", "Shell-Script"],
        },
        {
          type: "Back-end",
          list: ["Node.js", "Spring Framework", "Spring-AOP", "Flask"],
        },
        {
          type: "Front-end",
          list: [
            "Jquery",
            "React",
            "HTML5",
            "CSS",
            "GraphQL",
            "Redux",
            "Restful Web Services",
          ],
        },
        {
          type: "Database",
          list: ["MongoDB", "Redis", "PostgreSQL", "MySQL"],
        },
        {
          type: "Dev-Ops",
          list: ["Amazon EC2", "S3 Bucket", "Jenkins", "Docker", "SonarQube"],
        },
        {
          type: "ETL-BigDATA",
          list: ["Kafka", "Hadoop", "Hbase", "Hive", "Zookeeper"],
        },
        {
          type: "Tools",
          list: [
            "VSCode",
            "Eclipse",
            "GIT",
            "MySQL Workbench",
            "Anaconda",
            "Jmeter",
            "Mocha",
          ],
        },
        {
          type: "DataScience",
          list: [
            "PyTorch",
            "TensorFlow",
            "Keras",
            "Pandas",
            "CNN",
            "Zookeeper",
            "Detectron2",
          ],
        },
        {
          type: "Concepts",
          list: ["Design Patterns", "Data structures and algorithm"],
        },
      ],
    };
  }

  render() {
    console.log(this.state.skills);
    return (
      <div id="about" class="dashboard-skill-sets-container">
        <div className="skills-container">
          <span class="dashboard-skills-label">Technical Skills</span>
        </div>
        <div className="skills-parent-container">
          {this.state.skills.map((skill) => (
            <SkillSetContainer skill={skill} />
          ))}
          {/* <div class="skills-sets-container">
            <div class="skills-label-container">
              <span class="skills-label">Programming Languages</span>
            </div>
            <div class="skills-separator-container">
              <div class="skills-separator-line"></div>
              <div class="skills-separator-circle">
                <div class="skills-separator-inner-circle"></div>
              </div>
            </div>
            <div class="skills-items-container">
              <div class="skills-item-container">
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
              </div>
            </div>
          </div>
          {<div class="skills-sets-container">
            <div class="skills-label-container">
              <span class="skills-label">Mobile Platforms</span>
            </div>
            <div class="skills-separator-container">
              <div class="skills-separator-line"></div>
              <div class="skills-separator-circle">
                <div class="skills-separator-inner-circle"></div>
              </div>
            </div>
            <div class="skills-items-container">
              <div class="skills-item-container">
                <span class="skills-item-text">Android</span>
              </div>
              <div class="skills-item-container">
                <span class="skills-item-text">React-Native</span>
              </div>
            </div>
          </div>
          <div class="skills-sets-container">
            <div class="skills-label-container">
              <span class="skills-label">Web Front End</span>
            </div>
            <div class="skills-separator-container">
              <div class="skills-separator-line"></div>
              <div class="skills-separator-circle">
                <div class="skills-separator-inner-circle"></div>
              </div>
            </div>
            <div class="skills-items-container">
              <div class="skills-item-container">
                <span class="skills-item-text">React/Redux</span>
              </div>
              <div class="skills-item-container">
                <span class="skills-item-text">HTML5</span>
              </div>
              <div class="skills-item-container">
                <span class="skills-item-text">CSS3</span>
              </div>
            </div>
          </div>
          <div class="skills-sets-container">
            <div class="skills-label-container">
              <span class="skills-label">Web Back End</span>
            </div>
            <div class="skills-separator-container">
              <div class="skills-separator-line"></div>
              <div class="skills-separator-circle">
                <div class="skills-separator-inner-circle"></div>
              </div>
            </div>
            <div class="skills-items-container">
              <div class="skills-item-container">
                <span class="skills-item-text">Python</span>
              </div>
              <div class="skills-item-container">
                <span class="skills-item-text">Node.js</span>
              </div>
            </div>
          </div>
          <div class="skills-sets-container">
            <div class="skills-label-container">
              <span class="skills-label">Databases</span>
            </div>
            <div class="skills-separator-container">
              <div class="skills-separator-line"></div>
              <div class="skills-separator-circle">
                <div class="skills-separator-inner-circle"></div>
              </div>
            </div>
            <div class="skills-items-container">
              <div class="skills-item-container">
                <span class="skills-item-text">MongoDB</span>
              </div>
              <div class="skills-item-container">
                <span class="skills-item-text">MySQL</span>
              </div>
              <div class="skills-item-container">
                <span class="skills-item-text">SQLite</span>
              </div>
              <div class="skills-item-container">
                <span class="skills-item-text">Realm</span>
              </div>
            </div>
          </div>
          <div class="skills-sets-container">
            <div class="skills-label-container">
              <span class="skills-label">CI/CD</span>
            </div>
            <div class="skills-separator-container">
              <div class="skills-separator-line"></div>
              <div class="skills-separator-circle">
                <div class="skills-separator-inner-circle"></div>
              </div>
            </div>
            <div class="skills-items-container">
              <div class="skills-item-container">
                <span class="skills-item-text">Kubernetes</span>
              </div>
              <div class="skills-item-container">
                <span class="skills-item-text">Docker</span>
              </div>
              <div class="skills-item-container">
                <span class="skills-item-text">Travis-CI</span>
              </div>
              <div class="skills-item-container">
                <span class="skills-item-text">Amazon AWS</span>
              </div>
            </div>
          </div>
          <div class="skills-sets-container">
            <div class="skills-label-container">
              <span class="skills-label">Web/Mobile Security</span>
            </div>
            <div class="skills-separator-container">
              <div class="skills-separator-line"></div>
              <div class="skills-separator-circle">
                <div class="skills-separator-inner-circle"></div>
              </div>
            </div>
            <div class="skills-items-container">
              <div class="skills-item-container">
                <span class="skills-item-text">Burp Suite</span>
              </div>
              <div class="skills-item-container">
                <span class="skills-item-text">Wireshark</span>
              </div>
              <div class="skills-item-container">
                <span class="skills-item-text">Nmap</span>
              </div>
              <div class="skills-item-container">
                <span class="skills-item-text">SqlMap</span>
              </div>
              <div class="skills-item-container">
                <span class="skills-item-text">Nessus</span>
              </div>
              <div class="skills-item-container">
                <span class="skills-item-text">Frida</span>
              </div>
            </div>
          </div>
          <div class="skills-sets-container">
            <div class="skills-label-container">
              <span class="skills-label">Blockchain</span>
            </div>
            <div class="skills-separator-container">
              <div class="skills-separator-line"></div>
              <div class="skills-separator-circle">
                <div class="skills-separator-inner-circle"></div>
              </div>
            </div>
            <div class="skills-items-container">
              <div class="skills-item-container">
                <span class="skills-item-text">Hyperledger Fabric</span>
              </div>
            </div>
          </div>
    */}
          <div class="skills-mobile-gap"></div>
        </div>
      </div>
    );
  }
}

export default Skills;
