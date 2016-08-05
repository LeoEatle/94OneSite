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
  render: function () {
    const span_style = {
      
    }
    return (
      <Col md={3} xs={6}>
        <Thumbnail className="thumbnail" src={this.props.product.imgUrl} alt={this.props.product.name}>
          <h3>{this.props.product.name}</h3>
          <p>{this.props.product.description}</p>
          <p>
            <span><Icon icon="star" button  />  加入收藏</span>
          </p>
        </Thumbnail>
      </Col>
    );
  }
});

export default ProductInstance;
