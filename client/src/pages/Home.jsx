import React,{useState,useEffect} from 'react'

import {DisplayCampaigns} from '../components';
import { useStateContext } from '../context'

const home = () => {
  const [isLoading,setIsloading]=useState(false);
  const [campaigns,setCampaigns]=useState([]);

  const {address,contract,getCampaigns}=
  useStateContext();

  const fetchCampaigns= async()=>{
    setIsloading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsloading(false);
     
  }

  useEffect(()=>{
    if(contract)  fetchCampaigns();
  },[address,contract]);
  return (
    <DisplayCampaigns
    title="All Campaigns"
    isLoading={isLoading}
    campaigns={campaigns}
    />
  )
}

export default home
