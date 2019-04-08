import React from "react";

const Banner = () => {
  return (
    <React.Fragment>
      <div className="bannerParentClass">
        <div className="bannerBackground">
          <div className="engineerClass">
            <img src="img/engineer.png" alt="kramaos" />
          </div>
          <div className="engineerClass1">
            <img src="img/engineer.png" alt="kramaos" />
          </div>
          <div className="ui container">
            <div className="bannerContainer" />
            <h1 className="bannerTitle">
              KOSMOS v2.0.0, a multipurpose and user-friendly Linux operating
              system distribution, driven by a mission to provide tools for the
              next generation of engineers, problem solvers and discovers.
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
