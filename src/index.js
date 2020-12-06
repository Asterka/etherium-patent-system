import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.scss';
import CreationPage from './components/pages/CreationPage';
import BulmaTest from './components/BulmaTest';
import Sidebar from './components/Sidebar';
import BreadCrumbs from './components/BreadCrumbs';
import HeaderMain from './components/HeaderMain';
import StickyFooter from './components/StickyFooter';
import MyPatentsPage from './components/pages/MyPatentsPage';

ReactDOM.render(
  <React.StrictMode>
    <Sidebar/>
    <BreadCrumbs previousPage={"my patents"} nextPage={"create patent"}/>
    <HeaderMain name={"Create your patent"}/>
    <MyPatentsPage/>
    <StickyFooter/>
  </React.StrictMode>,
  document.getElementById('root')
);

