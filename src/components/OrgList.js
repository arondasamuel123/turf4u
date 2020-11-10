import React, { useEffect, useState } from 'react'
import OrgCard from './OrgCard';

const OrgList = () => {
    const [orgs, setOrgs] = useState([]);

    useEffect(() => {
        const url = '/api/orgs';
        fetch(url)
        .then(res => res.json())
        .then(json => {
            setOrgs(json.orgs)
        })
        .catch(err => {
            console.log(err);
        })
    },[])
   
    return (
        <div className="flex mt-10 mx-auto">
            {
                orgs.map(org => {
                    return (
                        <OrgCard
                            key={org.id}
                            id={org.id}
                            orgName={org.organization_name}
                            orgLocation={org.organization_location}
                            orgEmail={org.organization_email}
                            contactNumber={org.contact_number}
                        />
                    )
                })
            }
        </div>
    )
}

export default OrgList
