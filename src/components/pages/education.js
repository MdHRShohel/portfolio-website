import React, { Component } from 'react';

//components  
import NavBar from '../nav-bar/nav-bar';

class Education extends Component {
    componentWillReceiveProps() {
        document.title = "Education - Nurul Mamun Network Engineer Portfolio";
    }

    componentDidMount() {
        document.title = "Education - Nurul Mamun Network Engineer Portfolio";
    }

  render() {
    return (
      <div className="education-page">
        <NavBar page="education" />
        <div className="education-container">
          <h2>Education</h2>

          {/* M.S. Block */}
          <div className="experience-block">
            <a
              href="https://business.shaw.ca/"
              className="logo-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="img/svg/DU_logo.svg"
                className="experience-block-logo"
                alt="exp 3 Logo"
              />
            </a>
            <div className="experience-block-info">
              <h3>Master of Science (M.S)</h3>
              <p>University of Dhaka, Bangladesh</p>
            </div>
            <br />
            <p className="experience-block-text">
              Completed ‘Master of Science (MS)’ degree from the Department of
              Applied Physics, Electronics & Communication Engineering,
              University of Dhaka, Bangladesh with a curricular focus on
              communication networks.
              <br />
              Notable courses are as follows –
            </p>
            <ul className="experience-block-text">
              <li>High Speed Computer Network</li>
              <li>Information & Coding Theory</li>
              <li>Advanced Data & Mobile Communication</li>
              <li>Advanced Signal Processing</li>
              <li>Intelligent System Engineering</li>
            </ul>
          </div>
          {/* B.Sc. Block */}
          <div className="experience-block">
            <a
              href="https://business.shaw.ca/"
              className="logo-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="img/svg/DU_logo.svg"
                className="experience-block-logo"
                alt="exp 3 Logo"
              />
            </a>
            <div className="experience-block-info">
              <h3>Bachelor of Science (B.Sc.)</h3>
              <p>University of Dhaka, Bangladesh</p>
            </div>
            <br />
            <p className="experience-block-text">
              Completed ‘Bachelor of Science (B.Sc)’ degree from the Department
              of Applied Physics, Electronics & Communication Engineering,
              University of Dhaka, Bangladesh.
              <br />
              Major courses related to curricular focus are as follows –
            </p>
            <ul className="experience-block-text">
              <li>Analog Electronics</li>
              <li>Digital Electronics</li>
              <li>Electronic Circuits</li>
              <li>Electronic Devices</li>
              <li>Industrial & Power Electronics</li>
              <li>Electromagnetic Theory & Antenna</li>
              <li>Radio & Television Engineering</li>
              <li>Telecommunication Networks</li>
              <li>Optical Fiber Communication</li>
              <li>Microwave & Satellite Communication</li>
              <li>Mobile Cellular Communication</li>
              <li>Data Communication & Computer Network</li>
              <li>Digital Signal Processing</li>
              <li>Communication Theory</li>
              <li>Semiconductor Technology</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;