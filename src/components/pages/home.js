import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//components  
import NavBar from '../nav-bar/nav-bar';

class Home extends Component {
    componentWillReceiveProps() {
        document.title = "Nurul Mamun Network Engineer Portfolio";
    }

    componentDidMount() {
        document.title = "Nurul Mamun Network Engineer Portfolio";
    }

  render() {
    return (
      <div className="home-page">
        <NavBar page="home" />
        <div className="home-top-container">
          <div className="home-top-left">
            <picture className="home-top-left-image">
              {/* <source srcSet="img/webp/profile.webp" type="image/webp" /> */}
              {/* <source srcSet="img/png/profile.png" type="image/jpeg" /> */}
              <img src="img/png/profile.png" alt="Nurul Mamun" />
            </picture>
          </div>
          <div className="home-top-right">
            <h2>Nurul Mamun</h2>
            <ul>
              <li>
                <div className="icon is-small">
                  <i className="fa fa-user"></i>
                </div>
                <span>Network Engineer</span>
              </li>
              <li>
                <div className="icon is-small">
                  <i className="fa fa-location-arrow"></i>
                </div>
                <span>Ottawa, Canada</span>
              </li>
              <li>
                <div className="icon is-small">
                  <i className="fa fa-graduation-cap"></i>
                </div>
                <span>
                  Master of Science (M.S) in Electronics & Communication
                  Engineering
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="home-bottom">
          <div className="home-bottom-text">
            <p>
              I am Nurul Mamun, Network Engineer by profession with experience
              on network design, lab evaluation, testing, implementation,
              troubleshooting and maintenance in complex multi-vendor platforms.
              Earned post graduate degree in Electronics & Communication
              Engineering and holds certifications from multiple vendors.
              Currently riding the journey on network programmability and
              automation skills. Technology enthusiast, reader and loves to take
              photos. Father and husband at personal life.
              {/* I'm Jeremy. Trying to become the best web developer I can be.
              Currently working as a developer for{" "}
              <a
                href="https://www.publictrust.co.nz/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Public Trust
              </a>
              . */}
            </p>
            <br />
            <p>
              If you are interested in getting in touch with me, feel free to{" "}
              <Link to="/contact">drop me a line.</Link>
              {/* When I'm not programming you will find me out mountain biking,
              exploring the great landscape New Zealand provides. If you are
              interested in getting in touch with me, feel free to{" "}
              <Link to="/contact">drop me a line</Link>. */}
            </p>
            <div className="home-bottom-buttons">
              <a
                href="https://github.com/nmamun"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="button github">
                  <span className="icon is-small">
                    <i className="fab fa-github"></i>
                  </span>
                  Github
                </div>
              </a>
              <a
                href="/Resume-Nurul Mamun - Personal Website.pdf"
                download={true}
                rel="noreferrer noopener"
              >
                <div className="button CV">
                  <span className="icon is-small">
                    <i className="fa fa-arrow-circle-down"></i>
                  </span>
                  Download CV
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/nmamun/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div className="button CV">
                  <span className="icon is-small">
                    <i className="fab fa-linkedin"></i>
                  </span>
                  LinkedIn
                </div>
              </a>
              {/* <a href={"https://blog.?dark=" + this.props.mode}>
                <div className="button blog">
                  <span className="icon is-small">
                    <i className="fa fa-pencil-alt"></i>
                  </span>
                  Blog
                </div>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;