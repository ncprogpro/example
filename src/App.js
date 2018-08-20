import React, { Component } from 'react';
import './App.css';

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
  DropdownItem } from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="">
        <div className="header-top">
          <div className="pull-left">
            <span style={{marginRight: 20}}>Check Status</span>
            <span>Report Bug</span>
          </div>

          <div className="pull-right">
            <span>1-888-888-888</span>
            <img src={require('./assets/img/tel-icon.png')}  />
          </div>
        </div>

        <div className="header-content container">

          <img src={require('./assets/img/keyboard.png')} className="keyboard"  />

          <img src={require('./assets/img/title.png')} className="title" />

          <img src={require('./assets/img/person.png')} className="person" />
          
          <div className="row menu-section">
            <div className="col-md-2 home-div">
              <img src={require('./assets/img/home-icon.png')} /> 
            </div>

            <div className="col-md-6 menu-div">
              <Navbar light expand="md">
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="">ILLUSTRATE</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="">ANIMATE</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="">STORY</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="">MUSIC</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="">FILM</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>

            <div className="col-md-4 search-div search-div">
              <img src={require('./assets/img/search-icon.png')} /> 
              <input placeholder="Search for keywords" />
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
