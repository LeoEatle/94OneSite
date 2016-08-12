/**
 * Created by leoeatle on 16/8/5.
 */
import React,{Component} from 'react';
import {
  Col,
  Row,
  Grid,
  Image,
  Label
} from 'react-bootstrap';

import Paper from 'material-ui/Paper';
import {
  Slider,
  Breadcrumb
} from 'amazeui-react';
import ProductInstance from '../components/ProductInstance';
import $ from 'jquery';



const ServiceDetail = React.createClass({
  //下面这个只是临时的数据
  users: {
    user1: {
      userid: '1',
      avatarUrl: '../i/teenker/u6.png',
      userName: '墨逆Moni',
      userTitle: '造型师/化妆讲师',
      userDescription: '服装设计专业毕业,善用设计的思维做蛋糕。对美食有极具艺术家的创造力,对食物有挑剔的味蕾,从而筛选出新鲜美味的食材。用设计的思维做蛋糕,用蛋糕做设计。',
      userPicture: [
        '../i/douban/2.jpg',
        '../i/douban/3.jpg',
        '../i/douban/4.jpg',
        '../i/douban/4.jpg'
      ],
      userService: [
        {
          "id" : '1:1',
          "imgUrl" : '../i/zhihu/1.jpg',
          "name" : '食物产品摄影',
          "description" : '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
          "price" : 100
        },
        {
          "id" : '1:2',
          "imgUrl" : '../i/zhihu/2.jpg',
          "name" : '超细致糖霜饼干礼盒',
          "description" : '糖霜饼干 送礼超精致 一组四块礼盒装',
          "price" : 100
        },
        {
          "id" : '1:3',
          "imgUrl" : '../i/zhihu/3.jpg',
          "name" : '基础糖霜饼干体验课',
          "description" : '从零开始教学,饼干制坯、铺面,糖霜制作',
          "price" : 100
        }
      ]
    },
    user2: {
      userid: '2',
      avatarUrl: '../i/teenker/u7.png',
      userName: '柚子',
      userTitle: '插画师',
      userDescription: '[关于柚子]Something about me \n 将天真画在纸上的插画师 \n 爱生活 爱绘画 爱一切美好的事物 \n 柚子是一个很注重生活品质的人 \n 所以画材上一直追求最好的 ',
      userPicture: [
        '../i/douban/2.jpg',
        '../i/douban/3.jpg',
        '../i/douban/4.jpg',
        '../i/douban/4.jpg'
      ],
      userService: [
        {
          "id" : '1:1',
          "imgUrl" : '../i/zhihu/1.jpg',
          "name" : '食物产品摄影',
          "description" : '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
          "price" : 100
        },
        {
          "id" : '1:2',
          "imgUrl" : '../i/zhihu/2.jpg',
          "name" : '超细致糖霜饼干礼盒',
          "description" : '糖霜饼干 送礼超精致 一组四块礼盒装',
          "price" : 100
        },
        {
          "id" : '1:3',
          "imgUrl" : '../i/zhihu/3.jpg',
          "name" : '基础糖霜饼干体验课',
          "description" : '从零开始教学,饼干制坯、铺面,糖霜制作',
          "price" : 100
        }
      ]
    },
    user3: {
      userid: '1',
      avatarUrl: '../i/teenker/u6.png',
      userName: '墨逆Moni',
      userTitle: '造型师/化妆讲师',
      userDescription: '服装设计专业毕业,善用设计的思维做蛋糕。对美食有极具艺术家的创造力,对食物有挑剔的味蕾,从而筛选出新鲜美味的食材。用设计的思维做蛋糕,用蛋糕做设计。',
      userPicture: [
        '../i/douban/2.jpg',
        '../i/douban/3.jpg',
        '../i/douban/4.jpg',
        '../i/douban/4.jpg'
      ],
      userService: [
        {
          "id" : '1:1',
          "imgUrl" : '../i/zhihu/1.jpg',
          "name" : '食物产品摄影',
          "description" : '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
          "price" : 100
        },
        {
          "id" : '1:1',
          "imgUrl" : '../i/taobaojpg/3.jpg',
          "name" : '云怡设计',
          "description" : '专业纯手工签名设计',
          "price" : 100
        },
        {
          "id" : '1:1',
          "imgUrl" : '../i/taobaojpg/4.jpg',
          "name" : '云怡设计',
          "description" : '专业纯手工签名设计',
          "price" : 100
        },
        {
          "id" : '1:1',
          "imgUrl" : '../i/taobaojpg/5.jpg',
          "name" : '云怡设计',
          "description" : '专业纯手工签名设计',
          "price" : 100
        }
      ]
    },
  },
  services: {
    service1: {
      //冒号前是userid,冒号后面是该user下面提供的服务id
      serviceid:'1:1',
      serviceName: '食物产品摄影',
      serviceDate: '提前2星期预约-14天内出片通过邮件发送',
      serviceAddress: '线上沟通,线下地点南京可面谈',
      serviceDetail: '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
      serviceContent: '一个产品精修3~5张同一场景不同角度的成品片',
      serviceSellPrice: '1500',
      serviceOriginPrice: '2000',
      pictureUrl: [
        '../i/zhihu/1.jpg',
        '../i/zhihu/2.jpg',
        '../i/zhihu/3.jpg',
        '../i/zhihu/4.jpg'
      ],
      comment: [
        {
          commentid: '2',
          commentAvatarUrl:'../i/zhihu/avatar/1.jpg',
          commentUser: '冬V大小姐',
          commentDate: '2015-11-12',
          commentContent: '给男票做的蛋糕,视频跟着做的...做出来很成功!!男票全部吃完了!',
          commentService: '食物产品摄影'
        }
      ]

    },
    service2: {
      //冒号前是userid,冒号后面是该user下面提供的服务id
      serviceid:'1:1',
      serviceName: '儿童插画约稿',
      serviceDate: '绘制时间视绘画复杂程度而定',
      serviceAddress: '手绘作品包邮或扫描文件,板绘的作品邮件发送',
      serviceDetail: '手绘水彩儿童插画 价格是要根据画面大小和复杂精细程度而定 价格区间在80到100元不等',
      serviceContent: '手绘水彩儿童插画',
      serviceSellPrice: '80',
      serviceOriginPrice: '1000',
      pictureUrl: [
        '../i/zhihu/1.jpg',
        '../i/zhihu/2.jpg',
        '../i/zhihu/3.jpg',
        '../i/zhihu/4.jpg'
      ],
      comment: [
        {
          commentid: '2',
          commentAvatarUrl:'../i/zhihu/avatar/1.jpg',
          commentUser: '冬V大小姐',
          commentDate: '2015-11-12',
          commentContent: '画的很好看!',
          commentService: '儿童插画约稿'
        }
      ]

    },
    service3: {
      //冒号前是userid,冒号后面是该user下面提供的服务id
      serviceid:'1:1',
      serviceName: '食物产品摄影',
      serviceDate: '提前2星期预约-14天内出片通过邮件发送',
      serviceAddress: '线上沟通,线下地点南京可面谈',
      serviceDetail: '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
      serviceContent: '一个产品精修3~5张同一场景不同角度的成品片',
      serviceSellPrice: '1500',
      serviceOriginPrice: '2000',
      pictureUrl: [
        '../i/zhihu/1.jpg',
        '../i/zhihu/2.jpg',
        '../i/zhihu/3.jpg',
        '../i/zhihu/4.jpg'
      ],
      comment: [
        {
          commentid: '2',
          commentAvatarUrl:'../i/zhihu/avatar/1.jpg',
          commentUser: '冬V大小姐',
          commentDate: '2015-11-12',
          commentContent: '给男票做的蛋糕,视频跟着做的...做出来很成功!!男票全部吃完了!',
          commentService: '食物产品摄影'
        }
      ]

    }
  },


  getInitialState(){
    return ({
      user: {
        userid: '1',
        avatarUrl: '../i/teenker/u6.png',
        userName: '墨逆Moni',
        userTitle: '造型师/化妆讲师',
        userDescription: '服装设计专业毕业,善用设计的思维做蛋糕。'+ '\n'+' 对美食有极具艺术家的创造力,对食物有挑剔的味蕾,从而筛选出新鲜美味的食材。\n 用设计的思维做蛋糕,用蛋糕做设计。',
        userPicture: [
          '../i/douban/2.jpg',
          '../i/douban/3.jpg',
          '../i/douban/4.jpg',
          '../i/douban/4.jpg'
        ],
        userService: [
          {
            "id" : '1:1',
            "imgUrl" : '../i/zhihu/1.jpg',
            "name" : '食物产品摄影',
            "description" : '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
            "price" : 100
          },
          {
            "id" : '1:2',
            "imgUrl" : '../i/zhihu/2.jpg',
            "name" : '超细致糖霜饼干礼盒',
            "description" : '糖霜饼干 送礼超精致 一组四块礼盒装',
            "price" : 100
          },
          {
            "id" : '1:3',
            "imgUrl" : '../i/zhihu/3.jpg',
            "name" : '基础糖霜饼干体验课',
            "description" : '从零开始教学,饼干制坯、铺面,糖霜制作',
            "price" : 100
          }
        ]
      },
      service: {
        //冒号前是userid,冒号后面是该user下面提供的服务id
        serviceid:'1:1',
        serviceName: '食物产品摄影',
        serviceDate: '提前2星期预约-14天内出片通过邮件发送',
        serviceAddress: '线上沟通,线下地点南京可面谈',
        serviceDetail: '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
        serviceContent: '一个产品精修3~5张同一场景不同角度的成品片',
        serviceSellPrice: '1500',
        serviceOriginPrice: '2000',
        pictureUrl: [
          '../i/zhihu/1.jpg',
          '../i/zhihu/2.jpg',
          '../i/zhihu/3.jpg',
          '../i/zhihu/4.jpg'
        ],
        comment: [
          {
            commentid: '2',
            commentAvatarUrl:'../i/zhihu/avatar/1.jpg',
            commentUser: '冬V大小姐',
            commentDate: '2015-11-12',
            commentContent: '给男票做的蛋糕,视频跟着做的...做出来很成功!!男票全部吃完了!',
            commentService: '食物产品摄影'
          }
        ]

      }

    });
  },

  handleBread(){
    this.path = 'details/' + this.state.user.userid;
    console.log(this.props.params.serviceid);
    switch (this.props.params.serviceid) {
      case '1':
        this.state.service = this.services.service1;
        break;
      case '2':
        this.state.service = this.services.service2;
        console.log(this.services.service2);
        break;
      case '3':
        this.state.service = this.services.service3;
        break;
    }

  },

  //在componentWillMount里面写跳转逻辑
  componentWillMount(){

  },

  componentDidMount(){

    switch (this.props.params.userid){
      case '1':
        this.state.user = this.users.user1;
        break;
      case '2':
        this.state.user = this.users.user2;
        break;
      case '3':
        this.state.user = this.users.user3;
        break;
    }
    console.log($('.userDescription>p').html());
    $('.userDescription>p').html().replace(/\n/g,'<br />')
  },

  render(){
    return(
       <Grid>
         <Row>
           <Breadcrumb>
             <Breadcrumb.Item href="#/index">首页</Breadcrumb.Item>
             <Breadcrumb.Item onClick={this.handleBread()}>{this.state.user.userName}</Breadcrumb.Item>
             <Breadcrumb.Item active>{this.state.service.serviceName}</Breadcrumb.Item>
           </Breadcrumb>
         </Row>
         <Row className="productContent">
           <Col sm={12} md={6} className="service">
             <h1 className="detailTitle">单子介绍</h1>

             <Row className="serviceRow">
               <h1 className="titleBorder serviceTitle">{this.state.service.serviceName}</h1>
             </Row>

             <Row>

               <div   className="servicePictures" >
                 <Slider theme='a5'>
                   {this.state.service.pictureUrl.map(
                     (url, index)=>{
                       return (
                         <Slider.Item key={index} >
                           <img src={url}/>
                         </Slider.Item>
                       )
                     }
                   )}
                 </Slider>
               </div>
             </Row>

             <Row className="serviceRow">
               <p className="serviceDate"><Label className="label_theme">时间</Label>{this.state.service.serviceDate}</p>
               <p className="serviceAddress"><Label className="label_theme">地址</Label>{this.state.service.serviceAddress}</p>
             </Row>
             <Row className="serviceRow">
               <h1 className="titleBorder">特色介绍</h1>
               <p className="serviceDetail">
                 {this.state.service.serviceDetail}
               </p>
               <h1 className="titleBorder">服务内容</h1>
               <p className="serviceContent">
                 {this.state.service.serviceContent}
               </p>
             </Row>
             <Row className="serviceRow">
               <h1 className="titleBorder">价格</h1>
               <p className="servicePrice">
                 <span>优惠价</span>
                 {this.state.service.serviceSellPrice}
               </p>
             </Row>
             <Row className="commentRow">
               <h1 className="titleBorder">用户评论</h1>
               {this.state.service.comment.map(
                 (comment, index)=>{
                   return (
                     <Row key={index} className="commentList">

                       <Col xs ={3} >
                         <Image className="commentAvatar" src={comment.commentAvatarUrl}circle />
                       </Col>
                       <Col xs={9} className="commentContent">
                         <Row className="commentHeader">
                           <span className="commentUser textTheme">{comment.commentUser}</span>
                           <span className="commentDate" style={{float: "right"}}>{comment.commentDate}</span>
                         </Row>
                         <Row>
                           <p>
                             {comment.commentContent}
                           </p>
                         </Row>
                         <Row>
                           <span>购买的服务: </span><span>{comment.commentService}</span>
                         </Row>
                       </Col>
                     </Row>
                   )
                 }
               )}

             </Row>
           </Col>
           <Col sm={12} md={6} className="userDetail">
             <h1 className="detailTitle">个人简介</h1>
              <Row>
                <Col className="userAvatar" sm={6} smOffset={3}>
                  <Image src={this.state.user.avatarUrl} circle/>
                  <h1 className="userName">{this.state.user.userName}</h1>
                  <p className="userTitle">{this.state.user.userTitle}</p>
                </Col>
                <Col className="userHeader" sm={12}>

                </Col>
              </Row>
             <Row>
               <Col className="userDescription" sm={12}>
                 <h1>简介:</h1>
                 <p>{this.state.user.userDescription}</p>
               </Col>
             </Row>
             <Row>
               <Col className="userPicture" sm={12}>
                 <Slider theme="a5" >
                   {this.state.user.userPicture.map(function (url, i) {
                     return(
                       <Slider.Item key={i}>
                         <img src={url}/>
                       </Slider.Item>
                     )
                   })}
                 </Slider>
               </Col>
             </Row>
             {/*other service */}
             <Row>
               <h1 className="titleBorder">我的其它服务</h1>
               {this.state.user.userService.map((product, index) => {
                 return (<ProductInstance md={6} key={index} product={product}></ProductInstance>);
               })}
             </Row>
           </Col>

         </Row>
       </Grid>
    );
  }
});

export default ServiceDetail;
