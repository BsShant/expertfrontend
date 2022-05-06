import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../assets/images/logo.png";
import Nav from '../nav/Nav';
import './styles.css'

const Header = (props) => {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
  const headerRef = useRef(null);
  const { pathname } = useLocation()

  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > (elTopOffset + elHeight)) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };



  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height)
    }

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);
  // ${sticky.isSticky ? ' header-fixed' : ''}
  // ${pathname === '/our-services' ? 'header-there' : ''
  return (
    <div className={`header-container }`} style={{ boxShadow: `${!props.header ? '0px 2px 4px 0px rgba(0,0,0,0.2)' : ''}` }} ref={headerRef}>
      <div className="container">
        <div className="header-inner-container row">
          <div className="col-4 col-md-4 col-sm-4 col-xs-4 col-lg-3 logo-container">
            <Link className='home-link' to='/'>
              <img src={Logo} alt="Company's Logo" />
            </Link>
          </div>
          <div className="col-8 col-md-8 col-sm-8 col-xs-8 col-lg-9">
            <Nav />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header