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
  getInitialState: function () {
    return({
      username: this.props.username
    });
  },

  componentWillMount: function(){
     if(this.state.username != null){
       this.checkUserName = <Navbar.Text pullRight>
         您已登录: <Navbar.Link href="#">{this.state.username}</Navbar.Link>
       </Navbar.Text>;
     }
    else {
       this.checkUserName =  <Navbar.Text pullRight>
         请先 <Navbar.Link href="#">登陆</Navbar.Link>或者 <Navbar.Link href="#/sellerRegister">注册</Navbar.Link>
       </Navbar.Text>;
     }
   },


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
            <NavItem href="userRegister">申请帐号</NavItem>
            <NavItem href="#/sellerRegister">申请开店</NavItem>
          </Nav>

          {this.checkUserName}

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
