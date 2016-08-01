/**
 * Created by leoeatle on 16/7/31.
 */
import React,{Component} from 'react';

import {
  Input,
  Form,
  Nav,
  NavItem

} from 'amazeui-react';


const Navbar = React.createClass({
  render: function(){
    const search_style = {
      lineHeight: "1em",
    };

    return (
      <Nav pills>
        <NavItem href="/index">首页</NavItem>
        <NavItem href="/applyID">申请帐号</NavItem>
        <NavItem href="/applyForStore">申请开店</NavItem>
        <NavItem href="/search">
          <Form inline>
            <Input type="search" amStyle="primary" defaultValue="搜索"/>
          </Form>
        </NavItem>
        <NavItem>
          <Form inline>
            <Input placeholder="用户名" icon="user" />
            {'\u00a0'}
            <Input placeholder="密码" icon="lock" />
            {'\u00a0'}
            <Input type="submit" amStyle="primary" defaultValue="登录" standalone/>
          </Form>
        </NavItem>
      </Nav>
    );
  }


});


export default Navbar;
