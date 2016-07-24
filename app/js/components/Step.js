/**
 * Created by leoeatle on 16/7/22.
 */
import React,{Component} from 'react';
import {
  AvgGrid,
  Thumbnail
} from 'amazeui-react';



const Step_Component = React.createClass(
{
  render: function () {
    return (
      <AvgGrid sm={3}>
       <Thumbnail
        caption="约会礼仪咨询"
        src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/>
      <Thumbnail
        caption="图片标题 #1"
        src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/>
      <Thumbnail
        caption="着装设计"
        src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/>
      <Thumbnail
        caption="专业摄影"
        src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/>
      </AvgGrid>
    );
  }
});

export default Step_Component;
