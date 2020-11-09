import React, { useCallback, useState } from 'react';

const AddTurf = () => {
  const [turfName, setturfName] = useState('');
  const [pitches, setPitches] = useState(0);

  const onInputTurfChange = useCallback(ev => {
    setturfName(ev.target.value);
  }, []);
  const onInputPitchesChange = useCallback(ev => {
    setPitches(ev.target.value);
  }, []);

  const onCreateTurf = () => {
    fetch('/api/add-turf', {
      method: 'POST',
      body: JSON.stringify({
        turf_name: turfName,
        pitches,
        createdAt: new Date().toLocaleDateString(),
      }),
    })
      .then(res => res.json())
      .then(json => {
        setturfName('');
        setPitches(0);
        console.log('Turf Added', json);
      })
      .catch(err => {
        console.log('Error occured', err.message);
      });
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-20">
      <h3 className="text-gray-800 text-center text-2xl font-bold">
        Create a Turf
      </h3>
      <form className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-5">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="turf-name"
          >
            <input
              className="appearance-none rounded w-full px-3 py-2 border focus:outline-none focus:shadow-outline-teal placeholder-gray-500 focus:border-teal-700 sm:text-sm sm:leading-5"
              value={turfName}
              id="turf-name"
              placeholder="Turf Name"
              onChange={onInputTurfChange}
            />
          </label>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="no-of-pitches"
          >
            <input
              className="appearance-none rounded w-full px-3 py-2 border focus:outline-none focus:shadow-outline-teal placeholder-gray-500 focus:border-teal-700 sm:text-sm sm:leading-5"
              value={pitches}
              id="no-of-pitches"
              placeholder="No.of pitches"
              onChange={onInputPitchesChange}
              type="number"
            />
          </label>
        </div>
        <div className="mb-6">
          <button
            onClick={onCreateTurf}
            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="button"
          >
            Add Turf
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTurf;
