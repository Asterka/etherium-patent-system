import {React, useState, useEffect} from 'react'
import CreationPage from './pages/CreationPage';
import Sidebar from './Sidebar';
import BreadCrumbs from './BreadCrumbs';
import HeaderMain from './HeaderMain';
import StickyFooter from './StickyFooter';
import MyPatentsPage from './pages/MyPatentsPage';
import TopPatentsPage from './pages/TopPatentsPage';
import {ABI, ADDRESS} from './config';

import {
    BrowserRouter as Router,
    Switch,
    StaticRouter,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import ConnectMetamask from './ConnectMetamask';

const Web3 = require('web3');
  
async function loadBlockchainData() {
    let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
    const patentContract = new web3.eth.Contract(ABI, ADDRESS);
    let myAccountAddress = await web3.eth.getAccounts();

    return {myAccountAddress: myAccountAddress[0], web3: { web3, patentContract}};
};

    //await patentContract.methods.createPatent(account, "test", "Askar khabibullin", "Will Smith","Innopolis", "Test patent", "https://example.com", "Russia").send({"from":account});
    //(address _owner, string memory _inventor, string memory _applicantsName, string memory _agentName, string memory _registrationAddress, string memory _title, string memory _link, string memory _country
async function getMyPatents(web3, patentContract) {
    let res = await patentContract.methods.getPatents().call();
    return res;
};

export default function App() {
    const [myName, setMyName] = useState("");
    const [myPatents, setMyPatents] = useState([]);
    const [topPatents, setTopPatents] = useState([]);
    const [web3instance, setWeb3Instance] = useState(null);
    const [locationName, setLocationName] = useState("My patents");
    const [breadCrumbsMain, setBreadCrumbsMain] = useState("my patents");
    const [queue, setQueue] = useState("");
    
    useEffect(() => {
        loadBlockchainData()
        .then(
            (res)=>{
                setMyName(res.myAccountAddress);
                setWeb3Instance(res.web3);

                getMyPatents(res.web3.web3, res.web3.patentContract).then((my_patents)=>{
                    console.log(my_patents[0].owner + " " + myName);
                    const top = my_patents;
                    my_patents = my_patents.filter((element)=>{
                        if(element.owner === res.myAccountAddress){
                            return element;
                        }
                    });
                    setMyPatents(my_patents);
                    setTopPatents(top);
                });
            })
        
    }, [])
    return (
        <>
        <Router basename="etherium-patent-system">
        <Sidebar myName={myName} locationName={locationName} setLocationName={setLocationName} setBreadCrumbsMain={setBreadCrumbsMain} setQueue={setQueue}/>
        <BreadCrumbs previousPage={breadCrumbsMain} nextPage={"creation"} loadBlockchainData={loadBlockchainData}/>
        <HeaderMain name={locationName}/>
            <Switch>
                <Route path={`/creation`}>
                    <CreationPage web3instance={web3instance} myName={myName}/>
                </Route>
                <Route path={`/my_patents`}>
                    <MyPatentsPage queue={queue} setQueue={setQueue} data={myPatents}/>
                </Route>
                <Route path={`/top_patents`}>
                    <TopPatentsPage queue={queue} setQueue={setQueue} data={topPatents}/>
                </Route>
            </Switch>
        </Router>
        
    </>
    )
}
