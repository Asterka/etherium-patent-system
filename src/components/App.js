import {React, useState} from 'react'
import CreationPage from './pages/CreationPage';
import BulmaTest from './BulmaTest';
import Sidebar from './Sidebar';
import BreadCrumbs from './BreadCrumbs';
import HeaderMain from './HeaderMain';
import StickyFooter from './StickyFooter';
import MyPatentsPage from './pages/MyPatentsPage';
import TopPatentsPage from './pages/TopPatentsPage';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function App() {
    const [locationName, setLocationName] = useState("My patents");
    const [breadCrumbsMain, setBreadCrumbsMain] = useState("my patents");
    const [queue, setQueue] = useState("");
    return (
        <>
        <Router>
        <Sidebar locationName={locationName} setLocationName={setLocationName} setBreadCrumbsMain={setBreadCrumbsMain}/>
        <BreadCrumbs previousPage={breadCrumbsMain} nextPage={"creation"}/>
        <HeaderMain name={locationName}/>
            <Switch>
            <Route path="/creation">
                <CreationPage />
            </Route>
            <Route path="/my_patents">
                <MyPatentsPage queue={queue} setQueue={setQueue}/>
            </Route>
            <Route path="/top_patents">
                <TopPatentsPage queue={queue} setQueue={setQueue}/>
            </Route>
            </Switch>
        <StickyFooter/>
        </Router>
    </>
    )
}
