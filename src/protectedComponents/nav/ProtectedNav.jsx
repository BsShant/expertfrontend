import React, { useRef, useState, useEffect } from "react";
import "./styles.css";
import { Menu, DatePicker, Drawer } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
const ProtectedNav = (props) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const protectedNavRef = useRef(null);
  const [current, setCurrent] = useState(
    pathname.split("/")[1] ? pathname.split("/")[1] : "Home"
  );
  useEffect(() => {
    setSticky({ offset: 0, setSticky: false });
  }, []);
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };

  // add/remove scroll event listener
  useEffect(() => {
    var header = protectedNavRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div
      ref={protectedNavRef}
      className={`protected-nav-container ${
        sticky.isSticky ? "protected-nav-fixed" : ""
      }`}
    >
      <div className="row" style={{ height: "100%" }}>
        <div className="col-md-10 m-auto">
          <Menu
            // inlineCollapsed={false}
            disabledOverflow={true}
            onClick={(e) => handleClick(e)}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="Dashboard">
              <a href="#">Dashboard</a>
            </Menu.Item>

            <Menu.Item key="landing-page">
              <a href="#admin-landing-section">Landing Page</a>
            </Menu.Item>
            <Menu.Item key="service-page">
              <a href="#admin-service-section">Service Page</a>
            </Menu.Item>
            <Menu.Item key="product-page">
              <a href="#">Product Page</a>
            </Menu.Item>
            <Menu.Item key="fund-raiser-page">
              <a href="#">Fund Raiser Page</a>
            </Menu.Item>
            <Menu.Item key="about-us-page">
              <a href="#">About Us Page</a>
            </Menu.Item>
            <Menu.Item key="contact-us-page">
              <a href="#">Contact Us Page</a>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default ProtectedNav;
