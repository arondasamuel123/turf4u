import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TurfCard from './TurfCard';
import { useOrg } from '../misc/custom-hook';

const TurfList = () => {
  const [turf, setTurf] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  // eslint-disable-next-line prefer-const
  let { id } = useParams();
  const { orgName } = useOrg(id);

  useEffect(() => {
    const url = `/api/orgs/${id}/turfs`;
    // const url = `/api/orgs/${id}`
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setIsLoaded(true);
        setTurf(json.pitch);
        // console.log(json.org.organization_name)
      });
  }, [id]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      <div className="flex flex-wrap  mx-56 mt-6">
        {!turf.pitches ? (
          <div className="text-center">
            <p className="font-semibold  text-teal-800 text-xl text-center mt-5 ">
              No turf created
            </p>
          </div>
        ) : (
          <TurfCard
            key={turf.id}
            id={turf.id}
            pitches={turf.pitches}
            changingRooms={turf.changing_rooms}
            lockersAvailable={turf.lockers}
            benches={turf.benches}
            orgName={orgName}
          />
        )}
      </div>
    </div>
  );
};

export default TurfList;
