import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useOrg } from '../misc/custom-hook';
import CreateSlot from './CreateSlot';
// import CreateSlot from './CreateSlot';
import TimeslotCard from './TimeslotCard';

const Timeslots = () => {
  const [timeslots, setTimeslots] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line prefer-const
  let { id } = useParams();
  // eslint-disable-next-line prefer-const
  let { pitchId } = useOrg(id);

  const fetchTurfs = useCallback(async () => {
    setIsLoading(true);
    const url = `/api/turf/${pitchId}/timeslots`;
    try {
      const response = await fetch(url);
      const turfs = await response.json();
      setIsLoading(false);
      setTimeslots(turfs.timeslots);
    } catch (err) {
      setIsLoading(false);
    }
  }, [pitchId]);

  useEffect(() => {
    fetchTurfs();
  }, [fetchTurfs]);

  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (timeslots.length === 0) {
    return (
      <div>
        <div className="relative">
          <div className="mr-3  absolute top-0 right-0">
            <CreateSlot fetchTurfs={fetchTurfs} />
          </div>
        </div>
        <div className=" pt-56">
          <span>
            <h3 className="text-center text-2xl text-teal-800 font-semibold">
              No Timeslots created
            </h3>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-10">
      <div className="relative mb-6">
        <div className="mr-3 absolute top-0 right-0">
          <CreateSlot fetchTurfs={fetchTurfs} />
        </div>
      </div>

      <div className="flex flex-wrap justify-center p-10">
        {timeslots.map(timeslot => {
          return (
            <TimeslotCard
              key={timeslot.id}
              id={timeslot.id}
              startTime={timeslot.start_time}
              stopTime={timeslot.stop_time}
              price={timeslot.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Timeslots;
