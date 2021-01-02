import React, { useEffect, useState } from 'react';
import OrgList from './OrgList';

const Home = () => {
  const [orgs, setOrgs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const isMounted = useRef(true);
  const fetchOrgs = async () => {
   
    try {
        setIsLoading(true)
        const url = '/api/orgs';
        const response = await fetch(url)
        const json = await response.json()
       
          setOrgs(json.orgs)
          setIsLoading(false)
        

    } catch (error) {
        console.log(error);
        setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchOrgs();
  },[])
  if(orgs.length === 0) {
    return <div>No Organizations created</div>
  }
  return <div>
    <OrgList orgs={orgs} isLoading={isLoading} fetchOrgs={fetchOrgs}/>
        </div>;
};

export default Home;
