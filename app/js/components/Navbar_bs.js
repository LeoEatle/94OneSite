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
  Checkbox,
  Form,
  Col,
  Row,
  ControlLabel
} from 'react-bootstrap';

import {
  Modal,
  ModalTrigger
} from 'amazeui-react';

const NavBar_bs = React.createClass({
  modal : (
    <Modal title="登陆">
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={3}>
            用户名/邮箱
          </Col>
          <Col sm={9}>
            <FormControl type="text" placeholder="请输入用户名或者邮箱" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={3}>
            密码
          </Col>
          <Col sm={9}>
            <FormControl type="password" placeholder="请输入密码" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={1} sm={10}>
            <Checkbox>记住用户名和密码</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={1} sm={10}>
            <Button type="submit">
              登陆
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Modal>
  ),


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
         请先 <ModalTrigger modal={this.modal}><Navbar.Link href="#">登陆 </Navbar.Link></ModalTrigger>或者 <Navbar.Link href="#/sellerRegister">注册</Navbar.Link>
       </Navbar.Text>;
     }
   },

  handleClick: function () {

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
            <ModalTrigger modal={this.modal}>
              <NavItem href="#">登陆</NavItem>
            </ModalTrigger>
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
