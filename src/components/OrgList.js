import React, { useEffect, useRef, useState } from 'react';
import OrgCard from './OrgCard';

const OrgList = () => {
  const [orgs, setOrgs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useRef(true);
  const fetchOrgs = async () => {
   
    try {
        setIsLoading(true)
        const url = '/api/orgs';
        const response = await fetch(url)
        const json = await response.json()
        if(isMounted) {
          setOrgs(json.orgs)
          setIsLoading(false)
        } 
        
    } catch (error) {
        console.log(error);
        setIsLoading(false);
    }
  }
  useEffect(() => {
        fetchOrgs();

      return () => {
        isMounted.current = false;
      }
  }, []);

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  return (
    <div className="flex sm:flex-wrap md:flex-wrap justify-center mt-10 mx-auto p-8">
      {orgs.map(org => {
        return (
          <OrgCard
            key={org.id}
            id={org.id}
            orgName={org.organization_name}
            orgLocation={org.organization_location}
            orgEmail={org.organization_email}
            contactNumber={org.contact_number}
            fetchOrgs={fetchOrgs}
          />
        );
      })}
    </div>
  );
};

export default OrgList;
