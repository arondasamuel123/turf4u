import React, { useCallback, useState } from 'react';
import organization from '../images/organization-chart.svg';
import AddTurf from './AddTurf';
import TurfModal from './TurfModal';

const OrgCard = ({ id, contactNumber, orgEmail, orgLocation, orgName, fetchOrgs }) => {
  const [turf, setTurf] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchTurf = useCallback( async () => {
    setIsLoading(true);
    const url = `/api/orgs/${id}/turfs`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      setIsLoading(false);
      if(json.pitch === null) {
        return;
      }
      setTurf(json.pitch);

    } catch(error) {
      setIsLoading(false);
    }
},[id])

  return (
    <div className="max-w-sm bg-teal-100 rounded-lg overflow-hidden shadow-lg mb-8 mr-8">
      <img
        className=" pt-5 w-full"
        src={organization}
        alt="organization_profile"
      />
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2 text-center">{orgName}</div>
        <p className="text-gray-500 text-base py-1 px-10">
          {' '}
          Email:
          <span className="text-teal-800 ml-3 font-normal">{orgEmail}</span>
        </p>
        <p className="text-gray-500 text-base py-1 px-10">
          Location:
          <span className="text-teal-800 ml-3 font-normal">{orgLocation}</span>
        </p>
        <p className="text-gray-500 text-base py-1 px-10">
          Phone Number:
          <span className="ml-3 font-normal text-teal-800">
            {contactNumber}
          </span>
        </p>
        <div className="flex px-6 pt-4 pb-2">
          <TurfModal id={id} orgName={orgName} turf={turf} isLoading={isLoading}  fetchTurf={fetchTurf} />

          <AddTurf id={id} orgName={orgName} fetchTurf={fetchTurf} fetchOrgs={fetchOrgs} />
        </div>
      </div>
    </div>
  );
};

export default OrgCard;
