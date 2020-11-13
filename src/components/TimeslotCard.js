import React from 'react';
import { Link } from 'react-router-dom';
import clock from '../images/clock.svg';

const TimeslotCard = ({ id, startTime, stopTime, price }) => {
  return (
    <div className="flex bg-teal-100 rounded-lg overflow-hidden shadow-lg mb-6 mr-8">
      <div className=" mt-6">
        <img src={clock} alt="clock" />
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-500 text-base py-1 px-10">
          {' '}
          Start Time:
          <span className="text-teal-800 ml-3 font-normal">{startTime}</span>
        </p>
        <p className="text-gray-500 text-base py-1 px-10">
          Stop Time:
          <span className="text-teal-800 ml-3 font-normal">{stopTime}</span>
        </p>
        <p className="text-gray-500 text-base py-1 px-10">
          Price:
          <span className="ml-3 font-normal text-teal-800">{price}</span>
        </p>
        <div className="px-10 pt-4 pb-2">
          <Link
            className="inline-block rounded-lg text-sm  py-2 px-4 mr-2 uppercase tracking-wider font-semibold bg-teal-500 text-white focus:outline-none focus:shadow-outline"
            to={`/view/${id}`}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TimeslotCard;
