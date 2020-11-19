import React, { useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { useOrg } from '../misc/custom-hook';

Modal.setAppElement('#root');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
const TurfModal = ({id, orgName}) => {
  const [turf, setTurf] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const open = useCallback(() => setShowModal(true),[])
  const close = useCallback(() => setShowModal(false),[])

  // eslint-disable-next-line prefer-const
  let { pitchId } = useOrg(id);

  const fetchTurf = useCallback( async () => {
        setIsLoading(true);
        const url = `/api/orgs/${id}/turfs`;
        try {
          const response = await fetch(url);
          const json = await response.json();
          setIsLoading(false);
          if(json.pitch === null) {
            return;
          }
          setTurf(json.pitch);

        } catch(error) {
          setIsLoading(false);
          console.log(error);
        }
  },[id])

  useEffect(() => {
      fetchTurf();
  }, [fetchTurf]);

  return (
        <>
          <button type="button" className="inline-block rounded-lg text-sm  py-2 px-4 mr-2 uppercase tracking-wider font-semibold bg-teal-500 text-white focus:outline-none focus:shadow-outline" onClick={open}>View Turf</button>
            <Modal
              isOpen={showModal}
              onRequestClose={close}
              style={customStyles}
              contentLabel="Turf Modal"
            >
              {
                isLoading && <h4>Loading...</h4>
              }
              {
                !turf.pitches ? (
                  <div>
                    <h4 className="font-semibold text-xl mb-6">No Turf Created. Please create one</h4>
                    <div className="pl-32">
                    <button type="button" className="inline-block rounded-lg text-sm  py-2 px-4 mr-2 uppercase tracking-wider font-semibold bg-yellow-400 hover:bg-yellow-600 text-black focus:outline-none focus:shadow-outline" onClick={close}>Close</button>
                    </div>
                    
                  </div>
                ): (
                  <div className="flex-row justify-between">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="px-5 mb-4">
                    <h3 className="text-xl text-teal-800 font-semibold">{orgName}</h3>
                </div>
                <div className="mb-6">
                  Pitches:<span className="pl-2">{turf.pitches}</span>
                </div>
                <div className="mb-6">
                 Lockers:<span className="pl-2">{turf.lockers}</span>
                </div>
                <div className="mb-6">
                    Changing Rooms: <span className="pl-2">{turf.changing_rooms}</span>
                </div>
                <div className="mb-8">
                    Benches: <span className="pl-2">{turf.benches} </span>
                </div>
                <div className="px-10 mb-2">
                <Link className="inline-block rounded-lg text-sm  py-2 px-4 mr-2 uppercase tracking-wider font-semibold bg-blue-500 hover:bg-blue-700 text-white focus:outline-none focus:shadow-outline" to={`/view-slots/${pitchId}`}>View Timeslots</Link>
                </div>
              </div>                
              </div>
                )
              }
              
            </Modal>
        </>
  );
};

export default TurfModal;
