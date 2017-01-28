import React from 'react';
import { Link } from 'react-router';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class LayoutNav extends React.Component {
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
    const { title, gh } = this.props;

    return (
      <Navbar color="faded" light toggleable="md">
        <NavbarToggler right onClick={this.toggle} />
        <NavbarBrand tag={Link} to="/">{title}</NavbarBrand>
        <Collapse navbar isOpen={this.state.isOpen}>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/documentation" activeClassName="active">Documentation</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={`https://github.com/${gh}`}>Github</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default LayoutNav;
