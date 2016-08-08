/**
 * Created by leoeatle on 16/8/1.
 */
import React from 'react';

import{
  Thumbnail,
  Button,
  Col
} from 'react-bootstrap';

import {
  Icon
} from 'amazeui-react'


const ProductInstance = React.createClass({
  //这个函数是为了获取拼接URL
  geturl: function () {
    let userid = this.props.product.id.split(":")[0];
    let serviceid = this.props.product.id.split(":")[1];
    return ('#/details/' + userid + '/' + serviceid);
  },


  render: function () {
    const span_style = {

    }
    return (

      <Col className="productInstance" md={3} xs={6}>
        <Thumbnail className="thumbnail" href={this.geturl()} src={this.props.product.imgUrl} alt={this.props.product.name}>

        </Thumbnail>
        <h3>{this.props.product.name}</h3>
        <p>{this.props.product.description}</p>
        <p>
          <span><Icon icon="star" button/>  加入收藏</span>
        </p>
      </Col>

    );
  }
});

export default ProductInstance;
