/**
 * Created by leoeatle on 16/7/21.
 */

import React from 'react';
import {
  Container,
  Grid,
  Col,
  Button,
  AvgGrid,
  Thumbnail
} from 'amazeui-react';
import {
  Step_Component
} from '../components/Step'


class Category extends React.Component {
  render() {
    const imgUrl = '../i/kongge/Meeting.jpg';
    const title_image_style = {
      backgroundImage: 'url(' + imgUrl + ')',
      width: '100%',
      height: '15em',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    const center_style ={
      textAlign: "center"
    }
    const flex_style={
      display: 'flex',
      justifyContent: 'center'
    }
    const taolu_title={
      borderBottom: "1px solid",
      
    }


    return (
      <Container>
        <div className="title_image" style={title_image_style}>

        </div>
        <h2>这里是{this.props.params.category}</h2>

        <Grid className="content">
          <Col sm={12} md={8} >
            <h3 style={taolu_title}>约会计划<span style={{marginLeft: "1em"}}>Meeting Plan</span></h3>
            <Grid className="taolu_content">
              <Col sm={12} md={4}>
                <div>计划内容</div>
              </Col>
              <Col sm={12} md={8}>
                <div>此服务适用于计划约会的服装、地点、礼仪等。将有经验丰富的人士进行全方位定制化指导，技艺高超，服务周到。</div>
              </Col>
            </Grid>

            <Grid className="taolu_content">
              <Col sm={12} md={4}>
                <div>计划步骤</div>
              </Col>
              <Col sm={12} md={8}>
                <Grid>
                  <Col sm={4}>
                    <Thumbnail
                      caption ={'礼仪咨询'}
                      src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/>
                  </Col>
                  <Col sm={4}>
                    <Thumbnail
                      caption ={'专业摄影'}
                      src="http://s.amazeui.org/media/i/demos/bing-2.jpg"/>
                  </Col>
                  <Col sm={4}>
                    <Thumbnail
                      caption ={'着装设计'}
                      href="#"
                      src="http://s.amazeui.org/media/i/demos/bing-3.jpg"/>
                  </Col>
                </Grid>
              </Col>
            </Grid>
          </Col>


          <Col sm={12} md={4} className="buy_content">
            <h3 className="taolu_title">马上预定<span style={{marginLeft: "1em"}}>Buy it Now!</span></h3>
            <div>推荐场景: <span>表白等</span></div>

            <div style={flex_style}><Button amStyle="success" round style={{marginTop: "1em"}}>立即预定</Button></div>
          </Col>


        </Grid>

      </Container>
    );
  }
}

export default Category;
