import React from 'react';
import {
  Col,
  Row,
  Grid,
  PageHeader,
  Image,
  Button

} from  'react-bootstrap';

import ProductInstance from '../components/ProductInstance';
import SlideBar from '../components/SlideBar';

const Index = React.createClass({


  render() {
    //const imgUrl = '../i/kongge/index1.jpg';
    const data = {
      "hotSell":[
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
      ],
      "Recommand":[
        {
          "id" : '1:1',
          "imgUrl": '../i/taobaojpg/6.jpg',
          "name": '绿舒衣装',
          "description": '年轻人的第一次装修',
          "price" : 150
        },
        {
          "id" : '1:1',
          "imgUrl": '../i/taobaojpg/7.jpg',
          "name": '绿舒衣装',
          "description": '年轻人的第一次装修',
          "price" : 150
        },
        {
          "id" : '1:1',
          "imgUrl": '../i/taobaojpg/8.jpg',
          "name": '绿舒衣装',
          "description": '年轻人的第一次装修',
          "price" : 150
        },
        {
          "id" : '1:1',
          "imgUrl": '../i/taobaojpg/9.jpg',
          "name": '绿舒衣装',
          "description": '年轻人的第一次装修',
          "price" : 150
        }
      ],
      "HighScore":[
        {
          "id" : '1:1',
          "imgUrl": '../i/taobaojpg/10.jpg',
          "name": '绿舒衣装',
          "description": '年轻人的第一次装修',
          "price" : 150
        },
        {
          "id" : '1:1',
          "imgUrl": '../i/taobaojpg/11.jpg',
          "name": '绿舒衣装',
          "description": '年轻人的第一次装修',
          "price" : 150
        },
        {
          "id" : '1:1',
          "imgUrl": '../i/taobaojpg/12.jpg',
          "name": '绿舒衣装',
          "description": '年轻人的第一次装修',
          "price" : 150
        },
        {
          "id" : '1:1',
          "imgUrl": '../i/taobaojpg/13.jpg',
          "name": '绿舒衣装',
          "description": '年轻人的第一次装修',
          "price" : 150
        }
      ],
      "OnSale":[
        {
          "id" : '1:1',
          "imgUrl": '../i/taobaojpg/14.jpg',
          "name": '绿舒衣装',
          "description": '年轻人的第一次装修',
          "price" : 150
        },
        {
          "id" : '1:1',
          "imgUrl": '../i/taobaojpg/15.jpg',
          "name": '绿舒衣装',
          "description": '年轻人的第一次装修',
          "price" : 150
        },
        {
          "id" : '1:1',
          "imgUrl": '../i/taobaojpg/16.jpg',
          "name": '绿舒衣装',
          "description": '年轻人的第一次装修',
          "price" : 150
        },
        {
          "id" : '1:1',
          "imgUrl": '../i/taobaojpg/17.jpg',
          "name": '绿舒衣装',
          "description": '年轻人的第一次装修',
          "price" : 150
        }
      ]


    };

    let index = 0;
    console.log(data.hotSell);



    return (
      <Grid>
        <Row>
          <Col md={8} xs={12} className="indexContent">
            <Row className="hotSell">
              <PageHeader>热销产品 <small>点击图片查看更多</small></PageHeader>
              {data.hotSell.map((product, index) => {
                return (<ProductInstance key={index} product={product}></ProductInstance>);
              })}
            </Row>
            <Row className="Recommand">
              <PageHeader>推荐产品 <small>点击图片查看更多</small></PageHeader>
              {data.Recommand.map((product, index) => {
                return (<ProductInstance key={index} product={product}></ProductInstance>);
              })}
            </Row>
            <Row className="HighScore">
              <PageHeader>评价最高 <small>点击图片查看更多</small></PageHeader>
              {data.HighScore.map((product, index) => {
                return (<ProductInstance key={index} product={product}></ProductInstance>);
              })}
            </Row>
            <Row className="hotSell">
              <PageHeader>优惠产品 <small>点击图片查看更多</small></PageHeader>
              {data.OnSale.map((product, index) => {
                return (<ProductInstance key={index} product={product}></ProductInstance>);
              })}
            </Row>

          </Col>
          <Col md={4} xs={12} className="slideBar" >
            <SlideBar></SlideBar>
          </Col>
        </Row>
      </Grid>


    );
  }
});

export default Index;
