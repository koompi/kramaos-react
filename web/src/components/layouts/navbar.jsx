import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      isProductToggle: false,
      isCommunityToggle: false,
      menuIcon: false
    };

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ isProductToggle: false });
      this.setState({ isCommunityToggle: false });
    }
  }

  handleToggleProduct = () => {
    this.setState({
      isProductToggle: !this.state.isProductToggle,
      isCommunityToggle: false
    });
  };

  handleToggleCommunity = () => {
    this.setState({
      isCommunityToggle: !this.state.isCommunityToggle,
      isProductToggle: false
    });
  };
  handleMenuIcon = () => {
    this.setState({
      menuIcon: !this.state.menuIcon
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="menuBack">
          <div className="ui secondary container menu ">
            <Link to="/">
              <img
                src="/img/logo/logo-white.png"
                className="ui middle aligned image logo"
                alt="kramaos"
              />
            </Link>
            <div className="right menu navbar navbar-purple mobile hidden">
              <div
                className="ui pointing dropdown link item"
                ref={this.setWrapperRef}
                onClick={this.handleToggleProduct}
              >
                <span className="text">Products</span>
                <i className="dropdown icon" />

                <div
                  className={
                    this.state.isProductToggle
                      ? "menu productsDropdown transition visible"
                      : "menu productsDropdown transition hidden"
                  }
                >
                  <a
                    className="item navbar-Koompi"
                    href="https://koompi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="img/icons/koompi-stroke.svg" alt="kramaos" />
                    <span>KOOMPI LAPTOP</span>
                  </a>
                  <Link className="item navbar-Koompi" to="/kosmos">
                    <img src="img/icons/kosmos-stroke.svg" alt="kramaos" />
                    <span>KOSMOS OS</span>
                  </Link>
                </div>
              </div>

              <div
                className="ui pointing dropdown link item"
                ref={this.setWrapperRef}
                onClick={this.handleToggleCommunity}
              >
                <span className="text">Community</span>
                <i className="dropdown icon" />
                <div
                  className={
                    this.state.isCommunityToggle
                      ? "menu productsDropdown transition visible"
                      : "menu productsDropdown transition hidden"
                  }
                >
                  <a
                    className="item navbar-Koompi"
                    href="https://forum.koompi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="img/icons/faq-01.svg" alt="kramaos" />
                    <span>Question and Answer</span>
                  </a>
                  <a
                    className="item navbar-Koompi"
                    href="https://github.com/Koompi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="img/icons/project.svg" alt="kramaos" />
                    <span>Projects</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className={
                this.state.menuIcon
                  ? "animated mobile only menuBackIcon slideInLeft"
                  : "animated mobile only menuBackIcon slideOutLeft"
              }
            >
              <div className="ui left vertical inverted labeled icon sidebar menu overlay visible ">
                <div className="item">
                  <div className="header">Products</div>
                  <div className="menu">
                    <a
                      className="item"
                      href="https://koompi.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Koompi Laptop
                    </a>
                    <Link className="item" to="/kosmos">
                      KOSMOS OS
                    </Link>
                  </div>
                </div>
                <div className="item">
                  <div className="header">Community</div>
                  <div className="menu">
                    <a
                      className="item"
                      href="https://forum.koompi.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Question and Answer
                    </a>
                    <a
                      className="item"
                      href="https://github.com/Koompi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Projects
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="header" href="/contact">
                    Contact
                  </div>
                </div>
              </div>
            </div>

            <img
              src={this.state.menuIcon ? "img/close.svg" : "img/menu.svg"}
              className="menuIcon mobile only"
              onClick={this.handleMenuIcon}
              alt="menu-icon"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
