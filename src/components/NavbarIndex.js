import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions';

const attributes = {
  background: "rgba(0,0,0,0.5)",
  zIndex: "5",
  position: "absolute",
  left: "0",
  right: "0",
  top: "0"
}

const NavbarIndex = (props) => {
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
      <Navbar style={attributes} className="navbar top navbar-expand-md navbar-light bg-faded">
        <NavbarBrand href="/" style={{color: "white"}}>New York Food Bank</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/info" style={{color: "white"}}>Poverty Map</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/pantrymap" style={{color: "white"}}>Pantries Map</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/addorg" style={{color: "white"}}>Add Org</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/addpantry" style={{color: "white"}}>Add Pantry</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/myorgs" style={{color: "white"}}>My Orgs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/orgs" style={{color: "white"}}>Orgs</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/pantries" style={{color: "white"}}>Pantries</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/donate" style={{color: "white"}}>Donate</NavLink>
            </NavItem>
            <NavItem>
              {userInfo ? <NavLink tag={Link} to="/" onClick={(e)=>{handleLogout(e)}} >Logout</NavLink> : <NavLink tag={Link} to="/login">Login</NavLink>}
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
<<<<<<< Updated upstream
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
=======
                  <NavItem>
                    <NavLink href="/pantries" style={{color: "black"}}>Pantries</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/pantrymap" style={{color: "black"}}>Pantries Map</NavLink>
                  </NavItem>
>>>>>>> Stashed changes
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
<<<<<<< Updated upstream
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
=======
                  <NavItem>
                    <NavLink href="/info" style={{color: "black"}}>Poverty Map</NavLink>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle style={{color:"white"}} nav caret>
                Organizations
              </DropdownToggle>
              <DropdownMenu right >
                <DropdownItem>
                <NavItem>
                  <NavLink href="/orgs" style={{color: "black"}}>Organizations</NavLink>
                </NavItem>
                </DropdownItem>
                {userInfo && <DropdownItem>
                  <NavItem>
                    <NavLink href="/myorgs" style={{color: "black"}}>My Organizations</NavLink>
                  </NavItem>
                </DropdownItem>}
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/donate" style={{color: "white"}}>Donate</NavLink>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem>
              {userInfo ? <NavLink tag={Link} to="/" onClick={(e)=>{handleLogout(e)}} style={{color: "white"}}>Logout</NavLink> : <NavLink tag={Link} to="/login" style={{color: "white"}}>Log In</NavLink>}
            </NavItem>
>>>>>>> Stashed changes
          </Nav>
          <NavbarText>
            {userInfo ? (userInfo.username) : ("Guest")}
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarIndex
