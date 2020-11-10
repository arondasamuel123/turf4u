import React from 'react'
import { Link } from 'react-router-dom'
import organization from '../images/organization-chart.svg';

const OrgCard = ({id, contactNumber, orgEmail, orgLocation, orgName}) => {
    return (
        <div className="bg-teal-100 rounded-lg overflow-hidden shadow-lg mb-8 mr-8">
            <img className=" w-full" src={organization} alt="organization_profile"/>
            <div className="px-6 py-4">
            <div className="font-semibold text-xl mb-2 text-center">
                {orgName}
            </div>
            <p className="text-gray-500 text-base py-1 px-10"> Email:<span className="text-teal-800 ml-3 font-normal">{orgEmail}</span></p>
            <p className="text-gray-500 text-base py-1 px-10">Location:<span className="text-teal-800 ml-3 font-normal">{orgLocation}</span></p>
            <p className="text-gray-500 text-base py-1 px-10">Contact Number:<span className="ml-3 font-normal text-teal-800">{contactNumber}</span></p>
            <div className="flex px-6 pt-4 pb-2">
                <Link className="inline-block rounded-lg text-sm  py-2 px-4 mr-2 uppercase tracking-wider font-semibold bg-teal-500 text-white focus:outline-none focus:shadow-outline" to={`/view/${id}`}>View Turfs</Link>
                <Link className="inline-block rounded-lg text-sm  py-2 px-4  uppercase tracking-wider font-semibold bg-blue-500 text-white focus:outline-none focus:shadow-outline" to={`/add/${id}`}>Create Turf</Link>
            </div>
            </div>
            
        </div>
    )
}

export default OrgCard
