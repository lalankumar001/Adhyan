import './App.css';
import "./Components/NavBar";
import Navbar from './Components/NavBar';
import Home from './Components/Home'
import Login from './Components/Login';
import { Redirect, Route, Switch } from 'react-router';
import Contactus from './Components/Contactus';
import Register from './Components/Register';
// Components of HOme page like bca and btech
import BcaAllPage from './Components/BcaAllPage';
import BtechAllPage from './Components/BtechAllPage';



// All Bca Subject Component  
// Bca fist sem subjects and practicals components
import BcaMath_1 from './Components/BcaAllSub/BcaMath_1';
import BcaTechnicalCommunication from './Components/BcaAllSub/BcaTechnicalCommunication';
import BcaCprogramming from './Components/BcaAllSub/BcaCprogramming';
import BcaComputerIt from './Components/BcaAllSub/BcaComputerIt';
import BcaPhysics from './Components/BcaAllSub/BcaPhysics';
import BcaPractical_1 from './Components/BcaAllSub/BcaPractical_1';
import BcaPractical_2 from './Components/BcaAllSub/BcaPractical_2';
// Bca second sem subjects and practicals components
import BcaMath_2 from './Components/BcaAllSub/BcaMath_2';
import BcaPrincipleOfManagement from './Components/BcaAllSub/BcaPrincipleOfManagement';
import BcaDE from './Components/BcaAllSub/BcaDE';
import BcaDS from './Components/BcaAllSub/BcaDS';
import BcaDBMS from './Components/BcaAllSub/BcaDBMS';
import BcaPractical_3 from './Components/BcaAllSub/BcaPractical_3';
import BcaPractical_4 from './Components/BcaAllSub/BcaPractical_4';
// Bca third sem subjects and practicals components
import BcaMath_3 from './Components/BcaAllSub/BcaMath_3';
import BcaCA from './Components/BcaAllSub/BcaCA';
import BcaFEDT from './Components/BcaAllSub/BcaFEDT';
import BcaPOA from './Components/BcaAllSub/BcaPOA';
import BcaProgrammingCPP from './Components/BcaAllSub/BcaProgrammingCPP';
import BcaPractical_5 from './Components/BcaAllSub/BcaPractical_5';
import BcaPractical_6 from './Components/BcaAllSub/BcaPractical_6';
// Bca fourth sem subjects and practicals components
import BcaMath_4 from './Components/BcaAllSub/BcaMath_4';
import BcaWebTech from './Components/BcaAllSub/BcaWebTech';
import BcaJava from './Components/BcaAllSub/BcaJava';
import BcaSE from './Components/BcaAllSub/BcaSE';
import BcaCN from './Components/BcaAllSub/BcaCN';
import BcaPractical_7 from './Components/BcaAllSub/BcaPractical_7';
import BcaPractical_8 from './Components/BcaAllSub/BcaPractical_8';
// Bca fifth sem subjects and practicals components
import BcaOS from './Components/BcaAllSub/BcaOS';
import BcaCG from './Components/BcaAllSub/BcaCG';
import BcaECOM from './Components/BcaAllSub/BcaECOM';
import BcaST from './Components/BcaAllSub/BcaST';
import BcaMicroprocessor from './Components/BcaAllSub/BcaMicroprocessor';
import BcaACN from './Components/BcaAllSub/BcaACN';
import BcaWebProgramPHP from './Components/BcaAllSub/BcaWebProgramPHP';
import BcaBE from './Components/BcaAllSub/BcaBE';
import BcaPractical_9 from './Components/BcaAllSub/BcaPractical_9';
// Bca sixth sem subjects and practicals components
import BcaDataWareHousing from './Components/BcaAllSub/BcaDataWareHousing';
import BcaMobileComputing from './Components/BcaAllSub/BcaMobileComputing';
import BcaLinux from './Components/BcaAllSub/BcaLinux';
import BcaMultimedia from './Components/BcaAllSub/BcaMultimedia';
import BcaBioInformatics from './Components/BcaAllSub/BcaBioInformatics';
import BcaAI from './Components/BcaAllSub/BcaAI';
import BcaNetworkSecurity from './Components/BcaAllSub/BcaNetworkSecurity';
import BcaNetworkProgramming from './Components/BcaAllSub/BcaNetworkProgramming';
import BcaPractical_10 from './Components/BcaAllSub/BcaPractical_10';
import BcaSyllabusUpto_2021 from './Components/BcaAllSub/BcaSyllabusUpto_2021';
import BcaFirstSem from './Components/BcaFirstSem';
import BcaSecondSem from './Components/BcaSecondSem';
import BcaThirdSem from './Components/BcaThirdSem';
import BcaFourthSem from './Components/BcaFourthSem';
import BcaFifthSem from './Components/BcaFifthSem';
import BcaSixthSem from './Components/BcaSixthSem';
import BcaAllMcq from './Components/BcaAllMcq';
import BcaAllPracticals from './Components/BcaAllPracticals';
import BcaPreviousYearQuesPaper from './Components/BcaPreviousYearQuesPaper';

// mini navbar item like mcq items computer graphics mcq page import here
import CGMcq from './Components/BcaAllSubMCQ/CGMcq';
import OSMcq from './Components/BcaAllSubMCQ/OSMcq';
import Math_1Mcq from './Components/BcaAllSubMCQ/Math_1Mcq';
import CProgramMcq from './Components/BcaAllSubMCQ/CProgramMcq';
import Computer_ItMcq from './Components/BcaAllSubMCQ/Computer_ItMcq';
import WebTech_mcq from './Components/BcaAllSubMCQ/WebTech_mcq';
import TC_mcq from './Components/BcaAllSubMCQ/TC_mcq';
import Math_2Mcq from './Components/BcaAllSubMCQ/Math_2Mcq';
import WBProgramMcq from './Components/BcaAllSubMCQ/WBProgramMcq';
import DSMcq from './Components/BcaAllSubMCQ/DSMcq';
import DBMSMcq from './Components/BcaAllSubMCQ/DBMSMcq';
import FEDTMcq from './Components/BcaAllSubMCQ/FEDTMcq';
import CNMcq from './Components/BcaAllSubMCQ/CNMcq';
import CAMcq from './Components/BcaAllSubMCQ/CAMcq';
import CPlusPlusMcq from './Components/BcaAllSubMCQ/CPlusPlusMcq';
import PomMcq from './Components/BcaAllSubMCQ/PomMcq';
import JavaMcq from './Components/BcaAllSubMCQ/JavaMcq';
import STMcq from './Components/BcaAllSubMCQ/STMcq';
import AIMcq from './Components/BcaAllSubMCQ/AIMcq';
import NetworkSmcq from './Components/BcaAllSubMCQ/NetworkSmcq';
import POAMcq from './Components/BcaAllSubMCQ/POAMcq';
import LinuxMcq from './Components/BcaAllSubMCQ/LinuxMcq';
import DWDMMcq from './Components/BcaAllSubMCQ/DWDMMcq';
import EComMcq from './Components/BcaAllSubMCQ/EComMcq';

// all previour year question page imported here
import PyearQmath_1 from './Components/PreviousyearQpaper/PyearQmath_1';
import PyearQcprogramming from './Components/PreviousyearQpaper/PyearQcprogramming';
import PyearQComputerandIT from './Components/PreviousyearQpaper/PyearQComputerandIT';
import PyearQwebtec from './Components/PreviousyearQpaper/PyearQwebtec';
import PyearQtc from './Components/PreviousyearQpaper/PyearQtc';
import PyearQmath_2 from './Components/PreviousyearQpaper/PyearQmath_2';
import PyearQWBprogramming from './Components/PreviousyearQpaper/PyearQWBprogramming';
import PyearQDs from './Components/PreviousyearQpaper/PyearQDs';
import PyearQDbms from './Components/PreviousyearQpaper/PyearQDbms';
import PyearQCN from './Components/PreviousyearQpaper/PyearQCN';
import PyearQFedt from './Components/PreviousyearQpaper/PyearQFedt';
import PyearQCa from './Components/PreviousyearQpaper/PyearQCa';
import PyearQOOP from './Components/PreviousyearQpaper/PyearQOOP';
import PyearQPmanagement from './Components/PreviousyearQpaper/PyearQPmanagement';
import PyearQJava from './Components/PreviousyearQpaper/PyearQJava';
import PyearQSE from './Components/PreviousyearQpaper/PyearQSE';
import PyearQAI from './Components/PreviousyearQpaper/PyearQAI';
import PyearQNS from './Components/PreviousyearQpaper/PyearQNS';
import PyearQPa from './Components/PreviousyearQpaper/PyearQPa';
import PyearQDHDM from './Components/PreviousyearQpaper/PyearQDHDM';
import PyearQEcom from './Components/PreviousyearQpaper/PyearQEcom';
import PyearQoS from './Components/PreviousyearQpaper/PyearQoS';
import PyearQLinux from './Components/PreviousyearQpaper/PyearQLinux';
import PyearQCG from './Components/PreviousyearQpaper/PyearQCG';
import PreviousYpaperAll from './Components/PreviousyearQpaper/PreviousYpaperAll';
import PyearQIot from './Components/PreviousyearQpaper/PyearQIot';



function App() {
  return (
    <div className="App">
      <Navbar />
  
      <Switch>
        <Route exact path ="/" component={Home} />
        {/* Bca all subjects and practicals components */}
        <Route exact path ="/Contact/BcaAllPage" component={BcaAllPage} />
        <Route exact path ="/Contact/BcaAllPage/BcaSyllabusUpto_2021" component={BcaSyllabusUpto_2021} /> 
        <Route exact path ="/Contact/BcaAllPage/BcaMath_1" component={BcaMath_1} />
        <Route exact path ="/Contact/BcaAllPage/BcaTechnicalCommunication" component={BcaTechnicalCommunication} />
        <Route exact path ="/Contact/BcaAllPage/BcaCprogramming" component={BcaCprogramming} />
        <Route exact path ="/Contact/BcaAllPage/BcaComputerIt" component={BcaComputerIt} />
        <Route exact path ="/Contact/BcaAllPage/BcaPhysics" component={BcaPhysics} />
        <Route exact path ="/Contact/BcaAllPage/BcaPractical_1" component={BcaPractical_1} />
        <Route exact path ="/Contact/BcaAllPage/BcaPractical_2" component={BcaPractical_2} />
        <Route exact path ="/Contact/BcaAllPage/BcaMath_2" component={BcaMath_2} />
        <Route exact path ="/Contact/BcaAllPage/BcaPrincipleOfManagement" component={BcaPrincipleOfManagement} />
        <Route exact path ="/Contact/BcaAllPage/BcaDE" component={BcaDE} />
        <Route exact path ="/Contact/BcaAllPage/BcaDS" component={BcaDS} />
        <Route exact path ="/Contact/BcaAllPage/BcaDBMS" component={BcaDBMS} />
        <Route exact path ="/Contact/BcaAllPage/BcaPractical_3" component={BcaPractical_3} />
        <Route exact path ="/Contact/BcaAllPage/BcaPractical_4" component={BcaPractical_4} />
        <Route exact path ="/Contact/BcaAllPage/BcaMath_3" component={BcaMath_3} />
        <Route exact path ="/Contact/BcaAllPage/BcaCA" component={BcaCA} />
        <Route exact path ="/Contact/BcaAllPage/BcaFEDT" component={BcaFEDT} />
        <Route exact path ="/Contact/BcaAllPage/BcaPOA" component={BcaPOA} />
        <Route exact path ="/Contact/BcaAllPage/BcaProgrammingCPP" component={BcaProgrammingCPP} />
        <Route exact path ="/Contact/BcaAllPage/BcaPractical_5" component={BcaPractical_5} />
        <Route exact path ="/Contact/BcaAllPage/BcaPractical_6" component={BcaPractical_6} />
        <Route exact path ="/Contact/BcaAllPage/BcaMath_4" component={BcaMath_4} />
        <Route exact path ="/Contact/BcaAllPage/BcaWebTech" component={BcaWebTech} />
        <Route exact path ="/Contact/BcaAllPage/BcaJava" component={BcaJava} />
        <Route exact path ="/Contact/BcaAllPage/BcaSE" component={BcaSE} />
        <Route exact path ="/Contact/BcaAllPage/BcaCN" component={BcaCN} />
        <Route exact path ="/Contact/BcaAllPage/BcaPractical_7" component={BcaPractical_7} />
        <Route exact path ="/Contact/BcaAllPage/BcaPractical_8" component={BcaPractical_8} />
        <Route exact path ="/Contact/BcaAllPage/BcaOS" component={BcaOS} />
        <Route exact path ="/Contact/BcaAllPage/BcaCG" component={BcaCG} />
        <Route exact path ="/Contact/BcaAllPage/BcaECOM" component={BcaECOM} />
        <Route exact path ="/Contact/BcaAllPage/BcaST" component={BcaST} />
        <Route exact path ="/Contact/BcaAllPage/BcaMicroprocessor" component={BcaMicroprocessor} />
        <Route exact path ="/Contact/BcaAllPage/BcaACN" component={BcaACN} />
        <Route exact path ="/Contact/BcaAllPage/BcaWebProgramPHP" component={BcaWebProgramPHP} />
        <Route exact path ="/Contact/BcaAllPage/BcaBE" component={BcaBE} />
        <Route exact path ="/Contact/BcaAllPage/BcaPractical_9" component={BcaPractical_9} />
        <Route exact path ="/Contact/BcaAllPage/BcaDataWareHousing" component={BcaDataWareHousing} />
        <Route exact path ="/Contact/BcaAllPage/BcaMobileComputing" component={BcaMobileComputing} />
        <Route exact path ="/Contact/BcaAllPage/BcaLinux" component={BcaLinux} />
        <Route exact path ="/Contact/BcaAllPage/BcaMultimedia" component={BcaMultimedia} />
        <Route exact path ="/Contact/BcaAllPage/BcaBioInformatics" component={BcaBioInformatics} />
        <Route exact path ="/Contact/BcaAllPage/BcaAI" component={BcaAI} />
        <Route exact path ="/Contact/BcaAllPage/BcaNetworkSecurity" component={BcaNetworkSecurity} />
        <Route exact path ="/Contact/BcaAllPage/BcaNetworkProgramming" component={BcaNetworkProgramming} />
        <Route exact path ="/Contact/BcaAllPage/BcaPractical_10" component={BcaPractical_10} />

{/* Btech all subjects components */}
        <Route exact path ="/Contact/BtechAllpage" component={BtechAllPage} />


{/* Bca Mini Navbar all components here like bca first sem , second ,third,fourth, fifth and six sem */}
<Route exact path ="/Contact/BcaAllPage/BcaFirstSem" component={BcaFirstSem} />
<Route exact path ="/Contact/BcaAllPage/BcaSecondSem" component={BcaSecondSem} />
<Route exact path ="/Contact/BcaAllPage/BcaThirdSem" component={BcaThirdSem} />
<Route exact path ="/Contact/BcaAllPage/BcaFourthSem" component={BcaFourthSem} />
<Route exact path ="/Contact/BcaAllPage/BcaFifthSem" component={BcaFifthSem} />
<Route exact path ="/Contact/BcaAllPage/BcaSixthSem" component={BcaSixthSem} />
<Route exact path ="/Contact/BcaAllPage/BcaAllPracticals" component={BcaAllPracticals} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq" component={BcaAllMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaPreviousYearQuesPaper" component={BcaPreviousYearQuesPaper} />

{/* All BCA mcq page components here */}
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/Math_1Mcq" component={Math_1Mcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/CProgramMcq" component={CProgramMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/Computer_ItMcq" component={Computer_ItMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/WebTech_mcq" component={WebTech_mcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/TC_mcq" component={TC_mcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/Math_2Mcq" component={Math_2Mcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/WBProgramMcq" component={WBProgramMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/DSMcq" component={DSMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/DBMSMcq" component={DBMSMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/FEDTMcq" component={FEDTMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/CNMcq" component={CNMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/CAMcq" component={CAMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/CPlusPlusMcq" component={CPlusPlusMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/PomMcq" component={PomMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/JavaMcq" component={JavaMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/STMcq" component={STMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/AIMcq" component={AIMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/NetworkSmcq" component={NetworkSmcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/POAMcq" component={POAMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/OSMcq" component={OSMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/LinuxMcq" component={LinuxMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/CGMcq" component={CGMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/DWDMMcq" component={DWDMMcq} />
<Route exact path ="/Contact/BcaAllPage/BcaAllMcq/EComMcq" component={EComMcq} />
{/* all Previous year question pages imported here */}
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQmath_1" component={PyearQmath_1} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQcprogramming" component={PyearQcprogramming} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQComputerandIT" component={PyearQComputerandIT} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQwebtec" component={PyearQwebtec} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQtc" component={PyearQtc} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQmath_2" component={PyearQmath_2} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQWBprogramming" component={PyearQWBprogramming} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQDs" component={PyearQDs} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQDbms" component={PyearQDbms} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQFedt" component={PyearQFedt} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQCN" component={PyearQCN} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQCa" component={PyearQCa} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQOOP" component={PyearQOOP} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQPmanagement" component={PyearQPmanagement} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQJava" component={PyearQJava} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQSE" component={PyearQSE} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQAI" component={PyearQAI} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQNS" component={PyearQNS} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQPa" component={PyearQPa} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQoS" component={PyearQoS} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQLinux" component={PyearQLinux} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQCG" component={PyearQCG} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQDHDM" component={PyearQDHDM} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQEcom" component={PyearQEcom} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PyearQIot" component={PyearQIot} />
<Route exact path ="/Contact/BcaAllPage/PreviousyearQpaper/PreviousYpaperAll" component={PreviousYpaperAll} />



        <Route exact path ="/Contact" component={Contactus} />
        <Route exact path ="/Register" component={Register} />
        <Route exact path ="/Login" component={Login} />
        <Redirect to="/" />
      </Switch>


    </div>
  );
}

export default App;
