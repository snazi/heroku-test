// import React, { Component } from 'react'
import Link from 'next/link';
import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap'

import auth0 from '../../../services/auth0'
import ActiveLink from '../../ActiveLink'

import './styles.scss'


// in this example, I create my own functional compoenent in order to handle 
// 1. the styling of the link in order for it to vibe with bootstrap's theme and css
// 2. Make a component that I can feed an URL and title
const BsNavLink = (props) => {
    const { route, title } = props
    const className = props.className || ""
    
    return(
        <ActiveLink activeClassName="active" route={route}>
          <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
        </ActiveLink>
    )
}

// this section, we call on auth0.js from the services/auth0.js to call login.
const Login = () => {
  return(
    <span onClick={auth0.login} className="nav-link port-navbar-link">Login</span>
  )
}

const Logout = () => {
  return(
    <span onClick={auth0.logout} className="nav-link port-navbar-link">Logout</span>
  )
}

const Header = (props) => {
// these 2 const is a small function that uses the useState function given in react that assignes the const to take in false
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)
  const renderBlogMenu = (props) => {
    const { isSiteOwner } = props

    if(isSiteOwner) {
      return (
        <Dropdown  className="port-navbar-link port-dropdown-menu" nav isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle className="port-dropdown-toggle" nav caret>
           Blog
            </DropdownToggle>
          <DropdownMenu>
            
            <DropdownItem> 
              <BsNavLink className="port-dropdown-item" route="/blogs" title="Blogs"/>
            </DropdownItem>
            <DropdownItem>
              <BsNavLink className="port-dropdown-item" route="/blogs/new" title="Create a Blog"/>
            </DropdownItem>
            <DropdownItem>
              <BsNavLink className="port-dropdown-item" route="/blogs/dashboard" title="Blogs Dashboard"/>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )
    }

    return (
      <NavItem className="port-navbar-item">
        <BsNavLink route="/blogs" title="Blog"/>
      </NavItem>
      
    )
  }

  // im taking is Authenticated from a prop i passed from either about, blog, index, portfolio
  const { isAuthenticated, user, className } = props
  const menuOpenClass = isOpen ? 'menu-open' : 'menu-close'
  
  return (
    <div>
      <Navbar className={`port-navbar port-nav-base absolute ${className} ${menuOpenClass}`} dark expand="md">
        <NavbarBrand className="port-navbar-brand" href="/">Angelo Amadora</NavbarBrand>
        <NavbarToggler onClick={toggle} className={`colorpls`}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="port-navbar-item">
                <BsNavLink route="/" title="Home"/>
            </NavItem>
            <NavItem className="port-navbar-item">
                <BsNavLink route="/about" title="About"/>
            </NavItem>
            <NavItem className="port-navbar-item">
                <BsNavLink route="/portfolios" title="Portfolio"/>
            </NavItem>
            
                
                {
                  renderBlogMenu(props)
                }
   
            <NavItem className="port-navbar-item">
                <BsNavLink route="/cv" title="CV"/>
            </NavItem>

            
            { !isAuthenticated &&
              <NavItem className="port-navbar-item clickable">
                <Login/>
              </NavItem>
            }

            { isAuthenticated &&
              <NavItem className="port-navbar-item clickable">
                <Logout/>
              </NavItem>
            }

            { isAuthenticated &&
              <NavItem className="port-navbar-item clickable">
                <span className="nav-link port-navbar-link"> {user.name} </span>
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;