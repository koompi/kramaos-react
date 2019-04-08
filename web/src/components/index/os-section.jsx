import React, { Component } from "react";

class OS_Section extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="ui container">
          <div className="ui container kosmosConent">
            <h1>Operating System for Every Computers</h1>
            <p>
              KOSMOS can run on almost any computers there is. It works well on
              your old laptop as well.
            </p>
          </div>
          <div className="ui stackable three column grid">
            <div className="column blur">
              <center>
                <img src="img/icons/kosmos_open_source.svg" alt="kramaos" />
                <h4>Completely Open Source</h4>
                <p className="indexParaphraph">
                  Out of the box! Clean and light, and very customizable from
                  the look and feel to the very kernel.{" "}
                </p>
              </center>
            </div>
            <div className="column blur">
              <center>
                <img src="img/icons/kosmos_dually_build_in.svg" alt="kramaos" />
                <h4>Developers Friendly</h4>
                <p className="indexParaphraph">
                  Built with developers in mind, yet keep it simple for every
                  users to benefits from the world of technology and internet
                </p>
              </center>
            </div>
            <div className="column blur">
              <center>
                <img src="img/icons/kosmos_user_friednly.svg" alt="kramaos" />
                <h4>Desktop Environment</h4>
                <p className="indexParaphraph">
                  We decided to stick with KDE with KOSMOS flavor, since KDE
                  community is great. Users will have no worry getting support,
                  if they decide to customize their own OS
                </p>
              </center>
            </div>
            <div className="column blur">
              <center>
                <img src="img/icons/kosmos_docker.svg" alt="kramaos" />
                <h4>Apps and Languages</h4>
                <p className="indexParaphraph">
                  KOSMOS comes with minimal apps and programming languages for
                  modern development pre-installed such as Python, Go, Rust,
                  Clojure. Check out for yourself.
                </p>
              </center>
            </div>
            <div className="column blur">
              <center>
                <img src="img/icons/kosmos_security.svg" alt="kramaos" />
                <h4>Security</h4>
                <p className="indexParaphraph">No antivirus needed! Period.</p>
              </center>
            </div>
            <div className="column blur">
              <center>
                <img src="img/icons/kosmos_performance.svg" alt="kramaos" />
                <h4>Speedy</h4>
                <p className="indexParaphraph">
                  No hidden agenda. Once you installed, the system is yours.
                  Thus, there is no interruption in the performance.
                </p>
              </center>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OS_Section;
