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
              KOSMOS is a fully customized and self-customizeable Cambodia based
              open-source operating system software solution for up and coming
              engineers, inventors, organizers, developers and basically free
              thinkers in a modern day post-Microsoft world.
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
