/**
 * Created by leoeatle on 16/8/4.
 */
import React,{component} from 'react'
import {
  Col,
  Row,
  Grid,
  Form,
  PageHeader,
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock
} from 'react-bootstrap';

import {
  Icon
} from 'amazeui-react';

const sellerRegister = React.createClass({
  getInitialState(){
    return {
      username : '',
      password : '',
      email: '',
      phoneNumber: ''

    };
  },
  getValidationState: function (param) {
    switch (param){
      case 'username':
            let usernameLength = this.state.username.length;
            if(usernameLength == 0){
              return '';
            }
            else if(usernameLength < 4 || usernameLength > 16){
              return 'error';
            }
            else {
              return 'success';
            }
            break;
      //密码验证逻辑,借鉴的地址是http://www.jqueryfuns.com/resource/1192
      case 'password':
            if(this.state.password.length == 0){
              return '';
            }
            let newpwd = this.state.password;
            let strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
            let mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
            let enoughRegex = new RegExp("(?=.{6,}).*", "g");
            let flag = mediumRegex.test(newpwd);
            if(flag == false){
              return 'error';
            }
            else if (flag == true){
              return 'success';
            }
            break;
      //暂时不验证手机号了,反正到时候短信验证
      case 'phoneNumber':
            let Regex = new RegExp("^((\d3)|(\d{3}\-))?13[0-9]\d{8}|15[89]\d{8}",'g');
            let phoneNumber = this.state.phoneNumber;
            let flag2 = Regex.test(phoneNumber);
            if(flag2 == false){
              return '';
            }
            else if (flag2 == true){
              return '';
            }
            break;

    }

  },
  handleChange: function (param, e) {
    console.log(param);
    switch (param){
      case 'username':
            this.setState({username: e.target.value});
            break;
      case 'password':
            this.setState({password: e.target.value});
            break;
      case 'phoneNumber':
            this.setState({phoneNumber: e.target.value});
            break;
      case 'email':
            this.setState({email: e.target.value});
            break;
    }

  },
  render: function () {
    console.log(this.state.phoneNumber);
    return (
      <Grid>
        <Row>
          <PageHeader>请填写信息进行注册</PageHeader>
        </Row>
        <Row>
          <Col xs={8}>
            <Form>
              <FormGroup controlId="formValidationUserName" validationState={this.getValidationState('username')}>
                <ControlLabel>用户名</ControlLabel>
                <FormControl type="text" placeholder="请输入您的姓名" value={this.state.username} onChange={this.handleChange.bind(this,'username')}></FormControl>
                <HelpBlock>请输入4~16个字符包含字母/数字/下划线.</HelpBlock>
              </FormGroup>
              <FormGroup controlId="formValidationPassword" validationState={this.getValidationState('password')}>
                <ControlLabel>密码</ControlLabel>
                <FormControl type="password" placeholder="请输入您的密码" value={this.state.password} onChange={this.handleChange.bind(this, 'password')}></FormControl>
                <HelpBlock>请保证密码包含字母、数字、特殊字符三项中的两项,并且在七位以上</HelpBlock>
              </FormGroup>
              <FormGroup controlId="formValidationPhoneNumber" validationState={this.getValidationState('phoneNumber')}>
                <ControlLabel>手机号码</ControlLabel>
                <FormControl type="text" placeholder="请输入您的手机号码" value={this.state.phoneNumber} onChange={this.handleChange.bind(this,'phoneNumber')}></FormControl>
                <HelpBlock>请输入您常用的手机号码</HelpBlock>
              </FormGroup>
              <FormGroup controlId="formValidationEmail" validationState={this.getValidationState("email")}>
                <ControlLabel>邮箱</ControlLabel>
                <FormControl type="text" placeholder="请输入您的邮箱" value={this.state.email} onChange={this.handleChange.bind(this, "email")}></FormControl>
                <HelpBlock>请输入您的常用邮箱</HelpBlock>
              </FormGroup>
            </Form>

          </Col>
        </Row>
      </Grid>
    );
  }



});

export default sellerRegister;

