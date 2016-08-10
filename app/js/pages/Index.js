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
        },
        {
          "id" : '1:1',
          "imgUrl" : '../i/zhihu/4.jpg',
          "name" : '食物产品摄影',
          "description" : '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
          "price" : 100
        },
      ],
      "Recommand":[
        {
          "id" : '1:1',
          "imgUrl" : '../i/zhihu/1.jpg',
          "name" : '食物产品摄影',
          "description" : '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
          "price" : 100
        },
        {
          "id" : '1:1',
          "imgUrl" : '../i/zhihu/1.jpg',
          "name" : '食物产品摄影',
          "description" : '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
          "price" : 100
        },
        {
          "id" : '1:1',
          "imgUrl" : '../i/zhihu/1.jpg',
          "name" : '食物产品摄影',
          "description" : '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
          "price" : 100
        },
        {
          "id" : '1:1',
          "imgUrl" : '../i/zhihu/1.jpg',
          "name" : '食物产品摄影',
          "description" : '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
          "price" : 100
        }
      ],
      "HighScore":[
        {
          "id" : '1:1',
          "imgUrl" : '../i/zhihu/1.jpg',
          "name" : '食物产品摄影',
          "description" : '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
          "price" : 100
        },
        {
          "id" : '1:1',
          "imgUrl" : '../i/zhihu/1.jpg',
          "name" : '食物产品摄影',
          "description" : '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
          "price" : 100
        },
        {
          "id" : '1:1',
          "imgUrl" : '../i/zhihu/1.jpg',
          "name" : '食物产品摄影',
          "description" : '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
          "price" : 100
        },
        {
          "id" : '1:1',
          "imgUrl" : '../i/zhihu/1.jpg',
          "name" : '食物产品摄影',
          "description" : '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
          "price" : 100
        }
      ],
      "OnSale":[
        {
          "id" : '1:1',
          "imgUrl" : '../i/zhihu/1.jpg',
          "name" : '食物产品摄影',
          "description" : '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
          "price" : 100
        },
        {
          "id" : '1:1',
          "imgUrl" : '../i/zhihu/1.jpg',
          "name" : '食物产品摄影',
          "description" : '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
          "price" : 100
        },
        {
          "id" : '1:1',
          "imgUrl" : '../i/zhihu/1.jpg',
          "name" : '食物产品摄影',
          "description" : '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
          "price" : 100
        },
        {
          "id" : '1:1',
          "imgUrl" : '../i/zhihu/1.jpg',
          "name" : '食物产品摄影',
          "description" : '根据拍摄产品依据客户需求,构思,完成有想法有表现力的摄影作品',
          "price" : 100
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
                return (<ProductInstance md={3} key={index} product={product}></ProductInstance>);
              })}
            </Row>
            <Row className="Recommand">
              <PageHeader>推荐产品 <small>点击图片查看更多</small></PageHeader>
              {data.Recommand.map((product, index) => {
                return (<ProductInstance md={3} key={index} product={product}></ProductInstance>);
              })}
            </Row>
            <Row className="HighScore">
              <PageHeader>评价最高 <small>点击图片查看更多</small></PageHeader>
              {data.HighScore.map((product, index) => {
                return (<ProductInstance md={3} key={index} product={product}></ProductInstance>);
              })}
            </Row>
            <Row className="hotSell">
              <PageHeader>优惠产品 <small>点击图片查看更多</small></PageHeader>
              {data.OnSale.map((product, index) => {
                return (<ProductInstance md={3} key={index} product={product}></ProductInstance>);
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
