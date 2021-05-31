import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import tcsIcon from "../img/icons/tcsIcon.png";
import qualcommIcon from "../img/icons/qualcomm-logo.png";
import sjsuIcon from "../img/icons/sjsuIcon.jpg";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exp: [
        {
          inconImage: qualcommIcon,
          date: "May, 2021 - present",
          heading1: "Qualcomm",
          location: "San Diego, CA",
          heading2: "Summer Software Intern",
          content: [],
        },
        {
          inconImage: sjsuIcon,
          date: "January, 2021 - May, 2021",
          heading1: "San Jose State University",
          location: "San Jose, CA",
          heading2: "Teaching Assistant (Python)",
          content: [
            "Teach Python to a class of 25 undergraduate students",
            "Assist professor in maintaining course materials, organizing the learning environment, and grading assignments.",
          ],
        },
        {
          inconImage: sjsuIcon,
          date: "2020 - present",
          heading1: "San Jose State University",
          location: "San Jose, CA",
          heading2: "Teaching Assistant, Project Lead & Full-stack developer",
          content: [
            "Current CGPA: 3.88",
            "Pursuing Masters Software Engineering field.",
            "Developed multiple web application.",
            "Designed different data models.",
            "Led few of the projects.",
          ],
        },
        {
          inconImage: tcsIcon,
          date: "2017 - 2019",
          heading1: "Tata Consultancy Services",
          location: "Odisha, India",
          heading2: "Software Engineer",
          content: [
            "Worked as a Full-stack developer in an Agile Environment.",
            "Created UI modules using JavaScript and Back-end code on the JAVA spring framework.",
            "Developed new functionalities, and successfully optimized code by removing issues reported by SonarQube.",
            "Managed Hadoop clusters on Apache Ambari.",
            "Designed complex HIVE queries(ETL) to facilitate automated data retrieval from HDFS",
            " Created Shell script to deploy and monitor distributed application utilizing Jenkins providing real-time application status",
            "Optimized the code module by 40% by removing the critical and blocker issues and restructuring the code flow.",
            "Containerized application using docker to simplify deployment saving manual deployment time and minimizing server configurations",
          ],
        },
        {
          inconImage: tcsIcon,
          date: "2012 - 2016",
          heading1: "Jai Narain Vyas University",
          location: "Rajasthan, India",
          heading2: "Technical Club Head & Software Engineer ",
          content: [
            "CGPA: 3.6",
            "Bachelors Degree in Electronics & Computer Engineering",
            "Developed multiple web application",
            "Designed different data models",
            "Led few of the projects",
          ],
        },
      ],
    };
  }
  render() {
    return (
      <div id="experience" className="exeprience-container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Experience</h2>
          <h3 class="section-subheading text-muted">
            With Experience comes the knowledge.
          </h3>
        </div>
        <VerticalTimeline>
          {this.state.exp.map((experience) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: "#c5c6c7",
                color: "#fff",
                width: "40%",
                borderRadius: "16px",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #c5c6c7",
              }}
              date={experience.date}
              iconStyle={{
                background: "#c5c6c7",
                color: "#fff",
                width: "115px",
                height: "115px",
                border: "7px solid #e9ecef",
                boxShadow: "none",
                left: "47%",
              }}
              icon={
                <img
                  class="rounded-circle img-fluid "
                  alt=""
                  src={experience.inconImage}
                />
              }
            >
              <h3 className="vertical-timeline-element-title">
                {experience.heading1}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {experience.location}
              </h4>
              <h2 className="vertical-timeline-element-subtitle">
                {experience.heading2}
              </h2>{" "}
              <ul>
                {experience.content.map((con) => (
                  <li>{con} </li>
                ))}
              </ul>
              {/*<p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>*/}
            </VerticalTimelineElement>
          ))}
          {/*<VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<tcsIcon />}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
           <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<tcsIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Los Angeles, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<tcsIcon />}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<tcsIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Content Marketing for Web, Mobile and Social Media
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Online Course
            </h4>
            <p>Strategy, Social Media</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<tcsIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Agile Development Scrum Master
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Certification
            </h4>
            <p>Creative Direction, User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<tcsIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science in Interactive Digital Media Visual Imaging
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Degree
            </h4>
            <p>Creative Direction, Visual Design</p>
          </VerticalTimelineElement>
          */}
          <VerticalTimelineElement
            iconStyle={{
              background: "#c5c6c7",
              color: "#fff",
              width: "115px",
              height: "115px",
              border: "7px solid #e9ecef",
              boxShadow: "none",
              left: "47%",
              textAlign: "center",
            }}
            icon={
              <h4 style={{ marginTop: "16px", fontSize: "18px" }}>
                <b> My Experience Story</b>
              </h4>
            }
          />
        </VerticalTimeline>
      </div>
    );
  }
}

export default Experience;
