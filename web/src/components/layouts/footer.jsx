import React from "react";

const Footer = () => {
  return (
    <div className="footerBack">
      <center>
        <a href="http://smallworldcambodia.com">
          <img
            src="img/smallworld-logo.png"
            className="smallworldLogo"
            alt="smallworld-venture"
          />
        </a>
        <p>Copyright © 2018 Koompi. All rights reserved</p>
        <p className="brainchild">A brainchild of SmallWorld Venture</p>
        <p className="privacy">
          <a href="https://koompi.com/">Hardware KOOMPI </a>
          <a href="/feature"> OS KOSMOS</a>
          <a href="/about"> Question and Answer</a>
          <a href="/retailers"> Projects</a>
        </p>
      </center>
    </div>
    // <div className="ui inverted vertical footer segment">
    //     <div className="ui center aligned container"><img src="img/logo/footer-logo.png" className="ui centered image footerImage" alt="kramaos" />
    //         <p>Copyright © 2018 KOSMOS by KOOMPI</p>
    //     </div>
    // </div>
  );
};

export default Footer;
