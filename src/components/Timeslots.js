import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useOrg } from '../misc/custom-hook';
import TimeslotCard from './TimeslotCard';

const Timeslots = () => {
  const [timeslots, setTimeslots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line prefer-const
  let { id } = useParams();
  // eslint-disable-next-line prefer-const
  let { pitchId } = useOrg(id);
  useEffect(() => {
    const url = `/api/turf/${pitchId}/timeslots`;
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setIsLoading(false);
        setTimeslots(json.timeslots);
      });
  }, [pitchId]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="flex flex-wrap justify-evenly p-10">
      {timeslots.length === 0 ? (
        <div>
          <span>
            {' '}
            <h3 className="text-xl text-teal-800 font-semibold">
              No Timeslots created
            </h3>
          </span>
        </div>
      ) : (
        timeslots.map(timeslot => {
          return (
            <TimeslotCard
              key={timeslot.id}
              id={timeslot.id}
              startTime={timeslot.start_time}
              stopTime={timeslot.stop_time}
              price={timeslot.price}
            />
          );
        })
      )}
    </div>
  );
};

export default Timeslots;
