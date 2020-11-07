import React, { useEffect, useState } from 'react';
import TurfCard from './TurfCard';

const TurfList = () => {
    const [turfs, setTurfs] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      const url = '/api/pitches';
  
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setIsLoaded(true);
          setTurfs(json.pitches);
        })
        
    }, []);

    if(!isLoaded) {
        return <div>Loading...</div>
    }
    return (
    <div className="">
        <div className="mt-5 mx-10">
          <h3 className="text-blue-500 font-bold text-center text-3xl">Available Turfs:{turfs.length}</h3>
      </div>
    
      <div className="flex flex-wrap  mx-56 mt-6">
      
          {turfs.length === 0 ? (<p className="font-bold text-xl text-center mt-5">No turfs available</p>) :
            (
            turfs.map((turf) => {
              return <TurfCard
                  key={turf.id}
                  id={turf.id}
                  turfName={turf.turf_name}
                  createdAt={turf.createdAt}
                  pitches={turf.pitches}
              />
            })
            )
          }
  
      </div>
      </div>
    )
  
}

export default TurfList
