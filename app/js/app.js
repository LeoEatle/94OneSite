import React, { Component } from 'react';
import {
  render,
} from 'react-dom';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory,
  

} from 'react-router';


import SiteFooter from './components/SiteFooter';
import MenuInstance from './components/MenuInstance';
import Navbar_bs from './components/Navbar_bs'


class App extends Component {
  render() {
    return (
      <div className="ask-page">
        <Navbar_bs></Navbar_bs>
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
