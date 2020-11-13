import React, { useCallback, useState } from 'react';

const AddTurf = ({ id, orgName }) => {
  const [showModal, setShowModal] = useState(false);
  const [turf, setTurf] = useState({
    pitches: 0,
    changing_rooms: 0,
    lockers: 'None',
    benches: 0,
    orgId: id,
  });
  const onInputChange = useCallback(
    e => {
      setTurf({
        ...turf,
        [e.target.name]: e.target.value,
      });
    },
    [turf]
  );

  const onCreateTurf = () => {
    fetch(`/api/orgs/${id}/create`, {
      method: 'POST',
      body: JSON.stringify({
        pitches: turf.pitches,
        changing_rooms: turf.changing_rooms,
        lockers: turf.lockers,
        benches: turf.benches,
      }),
    })
      .then(res => res.json())
      .then(json => {
        setTurf({
          pitches: 0,
          changing_rooms: 0,
          lockers: 'None',
          benches: 0,
        });
        setShowModal(false);
        console.log('Turf Added', json);
      })
      .catch(err => {
        console.log('Error occured', err.message);
      });
  };

  return (
    <>
      <button
        type="button"
        style={{ transition: 'all .15s ease' }}
        onClick={() => setShowModal(true)}
        className="inline-block rounded-lg text-sm  py-2 px-4  uppercase tracking-wider font-semibold bg-blue-500 text-white focus:outline-none focus:shadow-outline"
      >
        Create Turf
      </button>
      {showModal ? (
        <>
          {/* <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
            aria-hidden="true"
          /> */}
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-200 opacity-50" />
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" />
              &#8203;
              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="px-5 mb-4">
                    <h4 className="text-gray-800 text-lg">{orgName}</h4>
                  </div>
                  <form>
                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="no-of-pitches"
                      >
                        <input
                          className="appearance-none rounded w-full px-3 py-2 border focus:outline-none focus:shadow-outline-teal placeholder-gray-500 focus:border-teal-700 sm:text-sm sm:leading-5"
                          id="no-of-pitches"
                          placeholder="No.of pitches"
                          type="number"
                          name="pitches"
                          value={turf.pitches}
                          onChange={onInputChange}
                        />
                      </label>
                    </div>

                    <div className="relative mb-6">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="Lockers available"
                      >
                        <select
                          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          value={turf.lockers}
                          name="lockers"
                          onChange={onInputChange}
                        >
                          <option>Select....</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </label>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="changing-rooms"
                      >
                        <input
                          className="appearance-none rounded w-full px-3 py-2 border focus:outline-none focus:shadow-outline-teal placeholder-gray-500 focus:border-teal-700 sm:text-sm sm:leading-5"
                          id="changing_rooms"
                          placeholder="No.of changing rooms"
                          type="number"
                          name="changing_rooms"
                          value={turf.changing_rooms}
                          onChange={onInputChange}
                        />
                      </label>
                    </div>
                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="benches"
                      >
                        <input
                          className="appearance-none rounded w-full px-3 py-2 border focus:outline-none focus:shadow-outline-teal placeholder-gray-500 focus:border-teal-700 sm:text-sm sm:leading-5"
                          id="benches"
                          placeholder="No.of benches"
                          type="number"
                          name="benches"
                          value={turf.benches}
                          onChange={onInputChange}
                        />
                      </label>
                    </div>
                  </form>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-teal-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                      onClick={onCreateTurf}
                    >
                      Add Turf
                    </button>
                  </span>

                  <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AddTurf;
