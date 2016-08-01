/**
 * Created by leoeatle on 16/7/31.
 */
import React,{Component} from 'react';

import {
  Navbar,
  FormGroup,
  FormControl,
  Button,
  Nav,
  NavItem,
} from 'react-bootstrap';

const NavBar_bs = React.createClass({
  render: function () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">94一站</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="#">登录</NavItem>
            <NavItem href="#">申请帐号</NavItem>
            <NavItem href="#">申请开店</NavItem>
          </Nav>

          <Navbar.Text pullRight>
            您已登录: <Navbar.Link href="#">Mark Otto</Navbar.Link>
          </Navbar.Text>

          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>
            {' '}
            <Button type="submit">搜索</Button>
          </Navbar.Form>


        </Navbar.Collapse>
      </Navbar>

    );

  }
});

export default NavBar_bs;
