import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {Link} from 'react-router-dom';
import { logout } from '../actions/userActions';

const attributes = {
  background: "rgba(0,0,0,0.5)"
}

const HeaderIndex = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  }

  return (
    <div>
      <Navbar style={attributes} className="navbar fixed-top navbar-expand-md navbar-light bg-faded">
        <NavbarBrand href="/" style={{color: "white"}}>New York Food Bank</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/info" style={{color: "white"}}>Info</NavLink>
            </NavItem>
            <NavItem>
              {userInfo ? <NavLink tag={Link} to="/" onClick={(e)=>{handleLogout(e)}} >Logout</NavLink> : <NavLink tag={Link} to="/login">Login</NavLink>}
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" style={{color: "white"}}>GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText> 
            {userInfo ? (
              userInfo.username
            ) : (
              "Guest"
            )}
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderIndex;
