import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import WorkIcon from "@mui/icons-material/Work";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import SchoolIcon from "@mui/icons-material/School";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <div id="about" className="container mx-auto">
        <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#146C94", color: "#ECF8F9" }}
          contentArrowStyle={{ borderRight: "7px solid  #146C94" }}
          date="June 2023 to August 2023"
          iconStyle={{ background: "#146C94", color: "#000" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer internship
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Revature</h4>
          <p>ReactJs, NextJs</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#146C94", color: "#ECF8F9" }}
          contentArrowStyle={{ borderRight: "7px solid  #146C94" }}
          date="November 2022 to February 2023"
          iconStyle={{ background: "#146C94", color: "#000" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Trainee Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Compunet Connections
          </h4>
          <p>User Interface - ReactJs and React Native</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#146C94", color: "#ECF8F9" }}
          contentArrowStyle={{ borderRight: "7px solid  #146C94" }}
          date="2018 - 2022"
          iconStyle={{ background: "#146C94", color: "#000" }}
          icon={<HistoryEduIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            B.E Computer Science Engineering
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Vels Institute of Science, Technology &Advanced Studies (VISTAS)
          </h4>
          <p>CGPA - 7.0</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#146C94", color: "#ECF8F9" }}
          contentArrowStyle={{ borderRight: "7px solid  #146C94" }}
          date="2016 - 2018"
          iconStyle={{ background: "#146C94", color: "#000" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Higher Secondary</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Velammal Matriculation Higher Secondary School
          </h4>
          <p>Percentage - 74.8%</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#146C94", color: "#ECF8F9" }}
          contentArrowStyle={{ borderRight: "7px solid  #146C94" }}
          date="2015-2016"
          iconStyle={{ background: "#146C94", color: "#000" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">10th Grade</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Velammal Vidhyashram
          </h4>
          <p>CGPA - 8.8</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default About;
