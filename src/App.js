import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/Home";
import Post from "./components/Post";
import Get from "./components/Get";

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
  NavbarText,
} from "reactstrap";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <h5>AXIOS DATA</h5>
      <Navbar color="dark" light expand="md">
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/Get">Get</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/Post">Post</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Get" element={<Get />} />
        <Route path="/Post" element={<Post />} />
      </Routes>
    </div>
  );
}
{
}
export default App;
