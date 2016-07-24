import React from 'react';
import {
  Container,
} from 'amazeui-react';

class Index extends React.Component {
  render() {
    const imgUrl = '../i/kongge/index1.jpg';
    const backimg_style ={
      backgroundImage: 'url(' + imgUrl + ')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }

    return (
      <div className = "welcome_style">

          <h1>欢迎来到94一站!</h1>
          <h2>体验技能售卖的乐趣。</h2>

      </div>
    );
  }
}

export default Index;
