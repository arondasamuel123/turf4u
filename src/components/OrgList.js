import React from 'react';
import OrgCard from './OrgCard';

const OrgList = ({orgs, isLoading, fetchOrgs}) => {
  
 
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
