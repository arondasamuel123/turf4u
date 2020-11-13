import React, { useEffect, useState } from 'react';
import OrgCard from './OrgCard';

const OrgList = () => {
  const [orgs, setOrgs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const url = '/api/orgs';
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setIsLoading(false);
        setOrgs(json.orgs);
      })
      .catch(err => {
        console.log(err);
      });
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
          />
        );
      })}
    </div>
  );
};

export default OrgList;
