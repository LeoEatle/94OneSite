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
import SiteFooter from '../components/SiteFooter';
import Navbar_bs from '../components/Navbar_bs';


const Index = React.createClass({
  render() {
    //const imgUrl = '../i/kongge/index1.jpg';
    const data = {
      "hotSell":[
        {
          "imgUrl" : '../i/taobaojpg/2.jpg',
          "name" : '云怡设计',
          "description" : '专业纯手工签名设计',
          "price" : 100
        },
        {
          "imgUrl" : '../i/taobaojpg/3.jpg',
          "name" : '云怡设计',
          "description" : '专业纯手工签名设计',
          "price" : 100
        },
        {
          "imgUrl" : '../i/taobaojpg/4.jpg',
          "name" : '云怡设计',
          "description" : '专业纯手工签名设计',
          "price" : 100
        },
        {
          "imgUrl" : '../i/taobaojpg/5.jpg',
          "name" : '云怡设计',
          "description" : '专业纯手工签名设计',
          "price" : 100
        }
      ]
    };
    // const backimg_style ={
    //   backgroundImage: 'url(' + imgUrl + ')',
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    // }
    let index = 0;
    console.log(data.hotSell);
    // let productNodes = data.hotSell.map(function (product, index){
    //   return (<Product key={index} product={product}></Product>);
    // });


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
          </Col>
          <Col md={4} xs={12} className="slideBar">

          </Col>
        </Row>
      </Grid>


    );
  }
});

export default Index;
