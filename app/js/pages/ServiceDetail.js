/**
 * Created by leoeatle on 16/8/5.
 */
import React,{Component} from 'react';
import {
  Col,
  Row,
  Grid,
  Image
} from 'react-bootstrap';

import Paper from 'material-ui/Paper';
import {Slider} from 'amazeui-react';
import ProductInstance from '../components/ProductInstance';


const ServiceDetail = React.createClass({
  getInitialState(){
    return ({
      user: {
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


  render(){
    return(
       <Grid>
         <Row className="productContent">
           <Col sm={12} md={6} className="userDetail">
              <Row>
                <Col className="userAvatar" sm={12} md={8}>
                  <Image src={this.state.user.avatarUrl} circle/>
                </Col>
                <Col className="userHeader" sm={12} md={4}>
                  <h1 className="userName">{this.state.user.userName}</h1>
                  <p className="userTitle">{this.state.user.userTitle}</p>
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
                 <Slider>
                   {this.state.user.userPicture.map(function (url, i) {
                     return(
                       <Slider.Item key={i} thumbnail={url}>
                         <img src={url}/>
                       </Slider.Item>
                     )
                   })}
                 </Slider>
               </Col>
             </Row>
             {/*other service */}
             <Row>

               { console.log(this.state.user.userService)}
               {this.state.user.userService.map((product, index) => {
                 return (<ProductInstance key={index} product={product}></ProductInstance>);
               })}
             </Row>
           </Col>
           <Col sm={12} md={6} className="service">
             <Row>
               <Col className="servicePictures" >
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
               </Col>
             </Row>
             <Row>
               <Col sm={12}>
                    <h1 className="serviceTitle">{this.state.service.serviceName}</h1>
               </Col>
             </Row>
             <Row>
               <p className="serviceDate">{this.state.service.serviceDate}</p>
               <p className="serviceAddress">{this.state.service.serviceAddress}</p>
             </Row>
             <Row>
               <h1>特色介绍</h1>
               <p className="serviceDetail">
                 {this.state.service.serviceDetail}
               </p>
               <h1>服务内容</h1>
               <p className="serviceContent">
                 {this.state.service.serviceContent}
               </p>
             </Row>
             <Row>
               <h1>价格</h1>
               <p className="servicePrice">
                 <span>优惠价</span>
                 {this.state.service.serviceSellPrice}
               </p>
             </Row>
             <Row>
               {this.state.service.comment.map(
                 (comment, index)=>{
                   return (
                     <Row key={index}>
                       <Col sm={4} className="commentAvatar">
                          <Image src={comment.commentAvatarUrl}circle />
                       </Col>
                       <Col sm={8} >
                          <Row className="commentHeader">
                            <span className="commentUser">{comment.commentUser}</span>
                            <span className="commentDate">{comment.commentDate}</span>
                          </Row>
                         <Row className="commentContent">
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
         </Row>
       </Grid>
    );
  }
});

export default ServiceDetail;
