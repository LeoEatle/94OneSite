import React, { Component } from 'react';
import {
  render,
} from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory,
  Link,

} from 'react-router';


var RouteHandler = Router.RouteHandler;

import {
  Header

} from 'amazeui-react';


import SiteFooter from './components/SiteFooter';
import MenuInstance from './components/MenuInstance';

class App extends Component {
  render() {
    return (
      <div className="ask-page">
        <Header title="94一站" className="brand_title" />
        <MenuInstance />
        <main className="ask-main">
          {this.props.children}
        </main>
        <SiteFooter />
      </div>
    );
  }
}

// Pages
import Index from './pages/Index';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Painting from './pages/Painting';
import Category from './pages/Category';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/painting" component={Painting} />
      <Route path="/Categories/:category" component={Category} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
