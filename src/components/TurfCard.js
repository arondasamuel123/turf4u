import React from 'react';
import pitch from '../images/soccer.svg';

const TurfCard = ({ id, pitches, lockersAvailable, changingRooms, benches }) => {
  return (
    <div className="max-w-xs bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-8 mr-8">
      <img className="w-full" src={pitch} alt="turf" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 ">
          {id}
        </div>
        <p className="text-gray-700 text-base">Pitches:{pitches}</p>
        <p className="text-gray-700 text-base">Lockers Avaiable:{lockersAvailable}</p>
        <p className="text-gray-700 text-base">Changing Rooms:{changingRooms}</p>
        <p className="text-gray-700 text-base">Benches to sit on:{benches}</p>
      </div>
      <div className="flex px-6 pt-4 pb-2">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Book Now
        </button>
        <button
          type="button"
          className="bg-transparent hover:bg-gray-500 text-gray-800 font font-semibold hover:text-gray-400 py-2 px-4 border border-gray-700 hover:border-transparent rounded-full ml-4"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default TurfCard;
