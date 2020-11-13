import React from 'react';
import { Link } from 'react-router-dom';
import pitch from '../images/soccer.svg';

const TurfCard = ({
  id,
  pitches,
  lockersAvailable,
  changingRooms,
  benches,
  orgName,
}) => {
  return (
    <div className=" max-w-xs bg-teal-100 rounded-lg overflow-hidden shadow-lg mb-8 mr-8">
      <img className="w-full" src={pitch} alt="turf" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 pl-10 ">{orgName}</div>
        <p className="text-gray-500 text-base py-1 px-10">
          {' '}
          Pitches:
          <span className="text-teal-800 ml-3 font-normal">{pitches}</span>
        </p>
        <p className="text-gray-500 text-base py-1 px-10">
          Lockers Available:
          <span className="text-teal-800 ml-3 font-normal">
            {lockersAvailable}
          </span>
        </p>
        <p className="text-gray-500 text-base py-1 px-10">
          Changing Rooms:
          <span className="ml-3 font-normal text-teal-800">
            {changingRooms}
          </span>
        </p>
        <p className="text-gray-500 text-base py-1 px-10">
          Benches:
          <span className="ml-3 font-normal text-teal-800">{benches}</span>
        </p>
      </div>
      <div className="flex justify-evenly mb-6 mt-4">
        <Link
          className="inline-block rounded-lg text-sm  py-2 px-4 mr-2 uppercase tracking-wider font-semibold bg-teal-500 text-white focus:outline-none focus:shadow-outline"
          to={`/view-slots/${id}`}
        >
          View Slots
        </Link>
        <Link
          className="inline-block rounded-lg text-sm  py-2 px-4 mr-2 uppercase tracking-wider bg-transparent hover:bg-gray-500 text-gray-800 font font-semibold hover:text-gray-400  border border-gray-700 hover:border-transparent"
          to={`/view-slots/${id}`}
        >
          Create Slots
        </Link>
      </div>
    </div>
  );
};

export default TurfCard;
