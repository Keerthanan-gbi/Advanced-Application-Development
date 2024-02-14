import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars' onClick={showSidebar}>
            <FaIcons.FaBars />
          </Link>
          <div className='logo'>
            <h1> </h1>
          </div>
          <div className='butl'>
            <Link to='/records'>
              <button className='logb'>TOP UP</button>
            </Link>
            <Link to='/contact'>
              <button className='logb'>BALANCE CHECK</button>
            </Link>
            <Link to='/login'>
              <button className='logb'>LOGOUT</button>
            </Link>
          </div>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <p className='p1'>{item.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
