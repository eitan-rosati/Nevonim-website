import React, {Component} from 'react';
import './ServiceProviderPage.css';
import Providerheader from './ServiceProviderPageComponents/Providerheader'
import ProviderOpportunities from './ServiceProviderPageComponents/ProviderOpportunities'
import OppDetails from './ServiceProviderPageComponents/OppDetails'
import SiteNavbar from './GlobalComponents/UserNavbar';

class ServiceProviderPage extends Component {

  render(){
    return( 
    <div className = "ServiceProviderPage">
      <SiteNavbar/>
      <Providerheader/>
      <ProviderOpportunities/>
      <OppDetails/>
    </div>
    )
  }
}


export default ServiceProviderPage;