import React from 'react'
import CreationPage from './pages/CreationPage';
import BulmaTest from './BulmaTest';
import Sidebar from './Sidebar';
import BreadCrumbs from './BreadCrumbs';
import HeaderMain from './HeaderMain';
import StickyFooter from './StickyFooter';
import MyPatentsPage from './pages/MyPatentsPage';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function App() {
    return (
        <>
        <Sidebar/>
        <BreadCrumbs previousPage={"my patents"} nextPage={"creation"}/>
        <HeaderMain name={"My patents"}/>
        <Router>
            <Switch>
            <Route path="/creation">
                <CreationPage />
            </Route>
            <Route path="/my_patents">
                <MyPatentsPage/>
            </Route>
            </Switch>
        </Router>
        <StickyFooter/>
    </>
    )
}
