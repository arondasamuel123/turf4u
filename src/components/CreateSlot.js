import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router';
import { useOrg } from '../misc/custom-hook';

const CreateSlot = ({ fetchTurfs }) => {
  const [showModal, setShowModal] = useState(false);
  const [slot, setSlot] = useState({
    start_time: '',
    stop_time: '',
    price: 0,
  });
  // eslint-disable-next-line prefer-const
  let { id } = useParams();
  // eslint-disable-next-line prefer-const
  let { pitchId } = useOrg(id);

  const onInputChange = useCallback(
    e => {
      setSlot({
        ...slot,
        [e.target.name]: e.target.value,
      });
    },
    [slot]
  );

  const onSubmit = () => {
    const url = `/api/turfs/${pitchId}/timeslot`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        start_time: slot.start_time,
        stop_time: slot.stop_time,
        price: slot.price,
      }),
    });

    fetchTurfs();
  };
  return (
    <>
      <button
        type="button"
        style={{ transition: 'all .2s ease' }}
        onClick={() => setShowModal(true)}
        className="inline-block rounded-lg text-sm py-2 px-4 uppercase tracking-wider font-semibold bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        <svg
          className=" float-left mr-2 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-center">Create Slots</span>
      </button>
      {showModal ? (
        <>
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                aria-hidden="true"
                className="fixed inset-0 transition-opacity"
                onClick={() => setShowModal(false)}
              >
                <div className="absolute inset-0 bg-gray-200 opacity-50" />
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" />

              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="px-5 mb-4">
                    <h4 className="text-gray-800 text-lg">Add Timeslots</h4>
                  </div>
                  <form>
                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="no-of-pitches"
                      >
                        <input
                          className="appearance-none rounded w-full px-3 py-2 border focus:outline-none focus:shadow-outline-teal placeholder-gray-500 focus:border-teal-700 sm:text-sm sm:leading-5"
                          placeholder="Start time"
                          type="text"
                          name="start_time"
                          onChange={onInputChange}
                        />
                      </label>
                    </div>

                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="changing-rooms"
                      >
                        <input
                          className="appearance-none rounded w-full px-3 py-2 border focus:outline-none focus:shadow-outline-teal placeholder-gray-500 focus:border-teal-700 sm:text-sm sm:leading-5"
                          placeholder="Stop time"
                          type="text"
                          name="stop_time"
                          onChange={onInputChange}
                        />
                      </label>
                    </div>
                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="price"
                      >
                        <input
                          className="appearance-none rounded w-full px-3 py-2 border focus:outline-none focus:shadow-outline-teal placeholder-gray-500 focus:border-teal-700 sm:text-sm sm:leading-5"
                          placeholder="Price"
                          type="number"
                          name="price"
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
                      className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-500 text-base leading-6 font-medium text-white  hover:bg-blue-700 focus:outline-none focus:shadow-outline sm:text-sm sm:leading-5"
                      onClick={onSubmit}
                    >
                      Create timeslot
                    </button>
                  </span>

                  <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
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

export default CreateSlot;
