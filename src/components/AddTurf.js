import React, { useCallback, useState } from 'react';
import Modal from 'react-modal';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : '50%',
    bottom                : 'auto',
    marginRight           : '-30%',
    transform             : 'translate(-50%, -50%)'
  }
};

const AddTurf = ({ id, orgName, fetchTurf, fetchOrgs}) => {

  const initialState = {
    pitches: 0,
    changing_rooms: 0,
    lockers: 'None',
    benches: 0,
    orgId: id,

}
  const [showModal, setShowModal] = useState(false);
  const open = useCallback(() => setShowModal(true),[]);
  const close = useCallback(() => setShowModal(false),[]);

  const [turf, setTurf] = useState(initialState);
  const onInputChange = useCallback(
    e => {
      setTurf({
        ...turf,
        [e.target.name]: e.target.value,
      });
    },
    [turf]
  );

 const onCreateTurf = async () => {

   try {

    const url = `/api/orgs/${id}/create`
    const response = await fetch(url, {method:'POST', body:JSON.stringify(
      {
        pitches: turf.pitches,
        changing_rooms: turf.changing_rooms,
        lockers: turf.lockers,
        benches: turf.benches,
      }
    )})
    const json = await response.json()
    setTurf(json);
      close();
      fetchTurf();
      
      setTimeout(() => {
        fetchOrgs();
      }, 1000);
     
      
    
   } catch (error) {
      console.log(error);
   }

 }

 
  return (
    <>
      <button
        type="button"
        onClick={open}
        className="inline-block rounded-lg text-sm  py-2 px-4  uppercase tracking-wider font-semibold bg-blue-500 text-white focus:outline-none focus:shadow-outline"
      >
        Create Turf
      </button>
      <Modal
        isOpen={showModal}
        onRequestClose={close}
        contentLabel="Add Turf Modal"
        style={customStyles}
      >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="px-5 mb-4">
                    <h4 className="text-gray-800 text-lg">{orgName}</h4>
                  </div>

                  <div className="mb-6">
                  <input
                          className="appearance-none rounded w-full px-3 py-2 border focus:outline-none focus:shadow-outline-teal placeholder-gray-500 focus:border-teal-700 sm:text-sm sm:leading-5"
                          id="no-of-pitches"
                          placeholder="No.of pitches"
                          type="number"
                          name="pitches"
                          value={turf.pitches || ''}
                          onChange={onInputChange}
                        />
                  </div>
                 

                  <div className="mb-6">
                  <input
                          className="block appearance-none rounded w-full px-3 py-2 border focus:outline-none focus:shadow-outline-teal placeholder-gray-500 focus:border-teal-700 sm:text-sm sm:leading-5"
                          id="changing_rooms"
                          placeholder="No.of changing rooms"
                          type="number"
                          name="changing_rooms"
                          value={turf.changing_rooms || ''}
                          onChange={onInputChange}
                        />
                  </div>

                <div className="mb-6">
                <input
                          className="appearance-none rounded w-full px-3 py-2 border focus:outline-none focus:shadow-outline-teal placeholder-gray-500 focus:border-teal-700 sm:text-sm sm:leading-5"
                          id="benches"
                          placeholder="No.of benches"
                          name="benches"
                          type="number"
                          value={turf.benches || ''}
                          onChange={onInputChange}
                        />
                </div>

                <div className="relative mb-6">
                        <select
                          className="appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          value={turf.lockers || ''}
                          name="lockers"
                          onChange={onInputChange}
                          placeholder="Do you have lockers?"
                        >
                          <option>Do you have lockers?....</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                    
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
                  </div>

                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-teal-500 text-base leading-6 font-medium text-white  hover:bg-teal-700 focus:outline-none sm:text-sm sm:leading-5"
                      onClick={onCreateTurf}
                    >
                      Add Turf
                    </button>
                  </span>

                  <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
                      onClick={close}
                    >
                      Cancel
                    </button>
                  </span>
                </div>

      </Modal>
    </>
  );
};

export default AddTurf;
