import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TurfCard from './TurfCard';
import { useOrg } from '../misc/custom-hook';

const TurfList = () => {
  const [turfs, setTurfs] = useState([]);
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
        setTurfs(json.pitches);
        // console.log(json.org.organization_name)
      });
  }, [id]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      <div className="mt-5 mx-10">
        <h3 className="text-teal-400 font-bold text-center text-3xl">
          Available Turfs:{turfs.length}
        </h3>
      </div>

      <div className="flex flex-wrap  mx-56 mt-6">
        {turfs.length === 0 ? (
          <div className="text-center">
            <p className="font-semibold  text-teal-300 text-xl text-center mt-5 ">
              No turfs available
            </p>
          </div>
        ) : (
          turfs.map(turf => {
            return (
              <TurfCard
                key={turf.id}
                id={turf.id}
                pitches={turf.pitches}
                changingRooms={turf.changing_rooms}
                lockersAvailable={turf.lockers}
                benches={turf.benches}
                orgName={orgName}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default TurfList;
