import React, {Component} from 'react';

import {
  Menu,
  Header
} from 'amazeui-react';

import {
  Link,
} from 'react-router'

const data = [{
  link: '##',
  title: '设计',
  subCols: 3,
  subMenu: [{link: 'Painting', title: '绘图'}, {link: '##', title: '手工'}, {link: '##', title: '家居'}]
}, {
  link: '##',
  title: '玄学',
  subCols: 3,
  subMenu: [{link: '##', title: '占星'}, {link: '##', title: '血型'}]
}, {
  link: '#c3',
  title: '视听',
  subCols: 4,
  subMenu: [{link: '##', title: '视频'}, {link: '##', title: '对话'}]
}, {
  link: '##',
  title: '套路',
  subCols: 3,
  subMenu: [{link: '/Meeting', title: '约会着装设计'}, {link: '/Review', title: '面试着装设计'}, {link: '/House', title: '家居着装设计'}]
}, {
  link: '##',
  title: '上门',
  subCols: 3,
  subMenu: [{link: '##', title: '代办'}, {link: '##', title: '家教'}, {link: '##', title: '化妆'}]
}, {
  link: '##',
  title: '摄影',
  subCols: 3,
  subMenu: [{link: '##', title: '摄影'}, {link: '##', title: '拍图'}, {link: '##', title: '修图'}]
}, {
  link: '##',
  title: '咨询',
  subCols: 3,
  subMenu: [{link: '##', title: '职业规划'}, {link: '##', title: '恋爱'}, {link: '##', title: '留学规划'}]
}];

// const handleClick = function (nav, index, e) {
//   if (nav && nav.subMenu) {
//     // 有二级菜单的链接点击了
//   } else {
//     e.preventDefault();
//     console.log('点击的链接为：', nav);
//     //产生路由
//
//
//     // do something
//     // this.handleToggle(); // 关闭整个下拉菜单
//   }
// };

const menuInstance = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  handleClick : function (nav, index, e) {
  if (nav && nav.subMenu) {
    // 有二级菜单的链接点击了
  } else {
    e.preventDefault();
    console.log('点击的链接为：', nav);
    //产生路由
    console.log('链接是: ', nav.link);
    this.path = 'Categories' + nav.link;
    this.context.router.push(this.path);

    // do something
    // this.handleToggle(); // 关闭整个下拉菜单
  }
  },

  componentDidMount: function () {

  },

  render: function () {
    return (

      <Menu className="menu" cols={4} data={data} onSelect={this.handleClick}/>
    );
  }
});


export default menuInstance;
