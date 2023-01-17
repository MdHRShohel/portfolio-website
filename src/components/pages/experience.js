import React, { Component } from "react";

//components
import { Link } from "react-router-dom";
import NavBar from "../nav-bar/nav-bar";

class Experience extends Component {
  componentWillReceiveProps() {
    document.title = "Experience - Nurul Mamun Network Engineer Portfolio";
  }

  componentDidMount() {
    document.title = "Experience - Nurul Mamun Network Engineer Portfolio";
  }

  render() {
    return (
      <div className="experience-page">
        <NavBar page="experience" />
        <div className="experience-container">
          <h2>Experience</h2>

          {/* 1st Experience Block */}
          <div className="experience-block">
            <a
              href="https://www.nokia.com/"
              className="logo-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="img/exp/nokia.jpg"
                className="experience-block-logo"
                alt="Logo"
              />
            </a>
            <div className="experience-block-info">
              <h3>Technical Expertise Center (TEC) Engineer</h3>
              <p>Nokia, Canada</p>
              <span className="italic">October 2020 to Present</span>
            </div>
            <br />
            <p className="experience-block-text">
              Part of TEC team which offers 3rd Level of support (3LS) for
              Nokia’s WDM product platform. Specializes in next generation
              optical network automation products which offers network designs,
              deployments, and monitoring by using SDN controllers and related
              technologies.
              <br />
              <br />
              Key responsibilities are as follows -
            </p>
            <ul className="experience-block-text">
              <li>
                Support in the identification, characterization and verification
                of design defects or deficiencies in deployed products.
              </li>
              <li>
                Diagnose and characterize product problems and symptoms prior to
                escalation to R&D by replicating product defects using lab
                equipment.
              </li>
              <li>
                Write and review generic test plans for customer lab
                evaluations, major initial network deployments and field trials.
              </li>
              <li>
                Develop, verify, and document upgrade procedures in customer’s
                networks.
              </li>
              <li>
                Review and provide technical feedback on customer documentation.
              </li>
              <li>
                Lead technical discussions with customers and R&D on product
                defects.
              </li>
              <li>
                Provide product readiness support to customers, Regional
                Business Center’s, and account teams.
              </li>
              <li>
                Develop training material for presentation to customers,
                Regional Business Center’s, and account teams.
              </li>
              <li>
                Train Regional Business Center’s in resolving complex technical
                customer problems.
              </li>
              <li>
                Debug complex product installations and resolve complicated
                product problems by applying both established procedures and
                creative alternatives.
              </li>
              <li>
                Interfaces to customer account Teams, other Business Units, R&D
                and PM for technical consultation and customer support concerns.
              </li>
              <li>
                Provides technical and sales support for test and evaluations,
                new product introductions, network architectures.
              </li>
            </ul>
          </div>
          {/* 2nd Experience Block */}
          <div className="experience-block">
            <a
              href="https://business.shaw.ca/"
              className="logo-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="img/exp/shawb.png"
                className="experience-block-logo"
                alt="exp 2 Logo"
              />
            </a>
            <div className="experience-block-info">
              <h3>Network Architect</h3>
              <h3>Optical Networks</h3>
              <p>Shaw Communications Inc.</p>
              <span className="italic">February, 2019 to January, 2020</span>
            </div>
            <br />
            <p className="experience-block-text">
              Part of ‘Optical Networks’ team responsible to engineer, design
              and maintain core fiber optic network backbone. This team is
              considered as 'Subject Matter Experts' for optical transport
              network within the organization.
              <br />
              Each team member completes the full life cycle of assigned
              projects –
              <br />
              i) Conceive network design according to requirements and best
              available technology within budget, ii) Select required hardware,
              software, components, iii) Prepare Bill of Materials, iv) Order
              equipment, v) Write Method of Procedures, vi) Coordinate at the
              field, vii) Implement the design and troubleshoot if required.
              <br />
              Moreover adaptation of new technology & hardware, liaison with
              vendors and necessary evaluation and lab testing to standardize
              every optical component is an important mandate for the team.
              <br />
              <br />
              Key responsibilities are as follows -
            </p>
            <ul className="experience-block-text">
              <li>
                Plan, design, optimize, implement, maintain, testing and
                troubleshoot optical transport network infrastructure (DWDM,
                SONET).
              </li>
              <li>
                Perform all required activities related to projects for new
                turn up, growth, addition, optimization, migration of nodes and
                services.
              </li>
              <li>
                Troubleshoot network incidents, known problems and provide
                support as subject matter expert for optical transport
                technologies within the organization.
              </li>
              <li>
                Participate in forecasting, budget and planning for optical
                networks based on requirements from different stakeholders and
                required technology upgrade.
              </li>
              <li>
                Perform evaluation and lab testing of DWDM and SONET equipment
                and systems.
              </li>
            </ul>
          </div>
          <div className="university-info">
            <Link to="/education">~ Graduated Waikato University 2018 ~</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
