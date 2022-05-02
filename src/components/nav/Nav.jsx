import React from 'react'
import { useState } from 'react';
import './styles.css';
import { Menu, DatePicker, Drawer } from "antd";
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Nav = (props) => {
    const {pathname} = useLocation()
    const [current, setCurrent] = useState(  pathname.split("/")[1] ? pathname.split("/")[1] : 'Home');
    const [visible, handleVisible] = useState(false)
    
    const handleClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };
    console.log("current", current)
    const onClose = () => {
        handleVisible(false);
      };
      const showDrawer = () => {
        const temp = visible;
        handleVisible(!temp);
      };
    return (
        <div className="nav-container">
            <div className="row" style={{ height: "100%" }}>

                <div className="col-md-12 desktopMenu">
                    <Menu
                        // inlineCollapsed={false}
                        disabledOverflow={true}
                        onClick={(e) => handleClick(e)}
                        selectedKeys={[current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="Home">
                            <Link to='/'>Home</Link>

                        </Menu.Item>
                        <Menu.Item key="about-us">
                            <Link to='/about-us'>About Us</Link>
                        </Menu.Item>
                        <Menu.Item key="our-services">
                            <Link to='/our-services'>Our Services</Link>
                        </Menu.Item>
                        <Menu.Item key="our-products">
                            <Link to='/our-products'>Our Products</Link>
                        </Menu.Item>
                        <Menu.Item key="fund-raiser">
                            <Link to='/fund-raiser'>Fund Raiser</Link>
                        </Menu.Item>
                        <Menu.Item key="contact-us">
                            <Link to='/contact-us'>Contact Us</Link>
                        </Menu.Item>
                    </Menu>
                    {/* <DatePicker /> */}
                </div>
                <div className="col-md-12 col-xs-6 mobileMenu">
                            <FontAwesomeIcon icon={faBars} style={{fontSize:"24px", color:"#008000"}}  onClick={showDrawer}/>
                        <Drawer
                            placement="top"
                            // closable={true}
                            onClose={onClose}
                            visible={visible}
                            height="100vh"
                            key="drawer"
                        >
                            <Menu
                                onClick={(e) => handleClick(e)}
                                selectedKeys={[current]}
                                mode="inline"
                            >

                                <Menu.Item key="Home">
                                    <Link to='/' onClick={()=>showDrawer()}>Home</Link>

                                </Menu.Item>
                                <Menu.Item key="about-us">
                                    <Link to='/about-us' onClick={()=>showDrawer()}>About Us</Link>
                                </Menu.Item>
                                <Menu.Item key="our-services">
                                    <Link to='/our-services' onClick={()=>showDrawer()}>Our Services</Link>
                                </Menu.Item>
                                <Menu.Item key="our-products">
                                    <Link to='/our-products' onClick={()=>showDrawer()}>Our Products</Link>
                                </Menu.Item>
                                <Menu.Item key="fund-raiser">
                                    <Link to='/fund-raiser' onClick={()=>showDrawer()}>Fund Raiser</Link>
                                </Menu.Item>
                                <Menu.Item key="contact-us">
                                    <Link to='/contact-us' onClick={()=>showDrawer()}>Contact Us</Link>
                                </Menu.Item>
                            </Menu>
                        </Drawer>
                </div>
            </div>
        </div>
    )
}

export default Nav