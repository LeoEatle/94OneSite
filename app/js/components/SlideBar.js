/**
 * Created by leoeatle on 16/8/3.
 */
import React,{Component} from 'react';
import {
  ListGroup,
  ListGroupItem,
  Button,
} from 'react-bootstrap';
import {
  Icon
} from 'amazeui-react';

const SlideBar = React.createClass({
  getInitialState: function () {
    return ({
      items: [
        {
          name: "云怡设计",
          price: 100
        },
        {
          name: "绿舒衣装",
          price: 100
        },
        {
          name: "年轻人装修",
          price: 100
        }
      ]
    })
  },
  //添加一个商品到购物车
  addItem: function (item) {
    const nextItems = this.state.items.concat([item]);
    this.setState({
      items: nextItems
    });
  },
  //从购物车删除一个商品
  deleteItem: function (index) {
    const nextItems = this.state.items.splice(index, 1);
    this.setState({
      items: nextItems
    });
  },
  totalPrice: function () {
    let sum = 0;
    this.state.items.map(
      (item)=>{
        sum = sum + item.price;
      }
    )
    return sum;
  },

  render: function () {
    const chart_list = {
      marginTop: "40px"
    };
    const chart_title = {
      borderLeft: "10px solid orange",
      paddingLeft: "10px",
      paddingBottom: '10px',
      borderBottom: '1px solid #eee'
    };
    return(
      <div style={chart_list}>
        <div className="page-header">
          <h1 >待选清单</h1>
        </div>
        <div>
          <ul>
            <li className='chart_list'>产品名称<span className="price_head">商品价格</span></li>
            {this.state.items.map(
              (item, index)=>{
                return (<li className='chart_list' key={index} ><a>{item.name}</a><Icon icon="trash-o"   /><span className="chart_price">{item.price}</span> </li>);
              }
            )}
            <li className='chart_list'>总共是<span style={{color: 'red'}} className="price_head">{this.totalPrice()}元</span></li>
          </ul>
          <Button bsStyle="default" className="pay_button" >进入支付页面</Button>
        </div>
      </div>
    );
  }
});

export default SlideBar;
