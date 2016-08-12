/**
 * Created by leoeatle on 16/8/12.
 */
import React, {Component} from 'react';
import $ from 'jquery';


const data = [{
  link: '##',
  title: '设计',
  subCols: 3,
  subMenu: [{link: 'Painting', title: '绘图'}, {link: '##', title: '手工'}, {link: '##', title: '家居'}]
}, {
  link: '##',
  title: '玄学',
  subCols: 3,
  subMenu: [{link: '##', title: '占星'}, {link: '##', title: '血型'}]
}, {
  link: '#c3',
  title: '视听',
  subCols: 4,
  subMenu: [{link: '##', title: '视频'}, {link: '##', title: '对话'}]
}, {
  link: '##',
  title: '套路',
  subCols: 3,
  subMenu: [{link: '/Meeting', title: '约会着装设计'}, {link: '/Review', title: '面试着装设计'}, {link: '/House', title: '家居着装设计'}]
}, {
  link: '##',
  title: '上门',
  subCols: 3,
  subMenu: [{link: '##', title: '代办'}, {link: '##', title: '家教'}, {link: '##', title: '化妆'}]
}, {
  link: '##',
  title: '摄影',
  subCols: 3,
  subMenu: [{link: '##', title: '摄影'}, {link: '##', title: '拍图'}, {link: '##', title: '修图'}]
}, {
  link: '##',
  title: '咨询',
  subCols: 3,
  subMenu: [{link: '##', title: '职业规划'}, {link: '##', title: '恋爱'}, {link: '##', title: '留学规划'}]
}];


const  CircleMenu = React.createClass({
  getInitialState(){
    return {
      activated: false
    }
  },



  toggleMenu(event){
    console.log(event.currentTarget);
    let circle = event.currentTarget;
    if ($(circle).children('ul').hasClass('activated')) {
      $(circle).children('ul').removeClass('activated');
      this.setState({
        activated: false
      });
      return 0;
    }

    if (this.state.activated) {
      $('.subTitle').removeClass('activated');
      this.setState(
        {
          activated: false
        }
      );
    }
    $(circle).children('ul').addClass('activated');
    this.setState({
      activated: true
    });
  },


  // componentDidMount(){
  //   $('.menuCircle').click(
  //     (event)=>{
  //       console.log($(event.target));
  //     }
  //   )
  // },


  render(){

    return(
      <div className="menuRow">
        <div className="menuWrapper">
          {data.map(
            (mainTitle, index) => {
              return (
                <div key={index} className="menuCircle" onClick={this.toggleMenu}>
                  <p>{mainTitle.title}</p>
                  <ul className="subTitle">
                    {mainTitle.subMenu.map(
                      (subTitle, index)=>{
                        return(
                          <li key={index}>
                            <a href={subTitle.link}>
                              <b>
                                {subTitle.title}
                              </b>
                            </a>
                          </li>
                        )
                      }
                    )}
                  </ul>
                </div>
              );
            }
          )}
        </div>
      </div>
    )
  }
});


export default CircleMenu;
