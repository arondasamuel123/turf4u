import React, { useCallback, useState } from 'react';

const AddOrg = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [org, setOrg] = useState({
    org_email: '',
    org_location: '',
    org_name: '',
    contact_number: '',
  });
  const onInputChange = useCallback(
    e => {
      setOrg({
        ...org,
        [e.target.name]: e.target.value,
      });
      // console.log(org);
    },
    [setOrg, org]
  );

  // const [isSaved, setIsSaved] = useState(false);

  const onAddOrg = e => {
    e.preventDefault();
    setIsSaved(true);
    fetch('/api/create-org', {
      method: 'POST',
      body: JSON.stringify({
        contact_number: org.contact_number,
        organization_email: org.org_email,
        organization_location: org.org_location,
        organization_name: org.org_name,
      }),
    })
      .then(res => {
        setIsSaved(false);
        res.json();
        setOrg({
            contact_number: '',
            org_email: '',
            org_location: '',
            org_name: '',
          });
          
      })
      .catch(err => {
        setIsSaved(false);
        console.log('Error occured', err);
      });
    // console.log(org);
  };
  return (
    <div className="w-full max-w-xs mx-auto mt-20  shadow-md">
      <div className=" py-5 ">
        <h2 className="text-gray-800 text-2xl font-semibold text-center">
          Add Organization
        </h2>
      </div>
      <form className="rounded bg-gray-100 px-8 py-5" onSubmit={onAddOrg}>
        <div className="mb-6">
          <input
            className="appearance-none rounded w-full px-3 py-2 border focus:outline-none focus:shadow-outline-teal placeholder-gray-500 focus:border-teal-700 sm:text-sm sm:leading-5"
            onChange={onInputChange}
            type="text"
            value={org.org_name}
            placeholder="Organization Name"
            name="org_name"
          />
        </div>

        <div className="mb-6">
          <input
            className="appearance-none rounded w-full px-3 py-2 border focus:outline-none focus:shadow-outline-teal placeholder-gray-500 focus:border-teal-700 sm:text-sm sm:leading-5"
            onChange={onInputChange}
            type="email"
            value={org.org_email}
            placeholder="Organization Email"
            name="org_email"
          />
        </div>
        <div className="mb-6">
          <input
            className="appearance-none rounded w-full px-3 py-2 border focus:outline-none focus:shadow-outline-teal placeholder-gray-500 focus:border-teal-700 sm:text-sm sm:leading-5"
            onChange={onInputChange}
            type="text"
            value={org.org_location}
            placeholder="Organization Location"
            name="org_location"
          />
        </div>
        <div className="mb-6">
          <input
            className="appearance-none rounded w-full px-3 py-2 border focus:outline-none focus:shadow-outline-teal placeholder-gray-500 focus:border-teal-700 sm:text-sm sm:leading-5"
            onChange={onInputChange}
            type="text"
            value={org.contact_number}
            placeholder="Contact Number"
            name="contact_number"
          />
        </div>
        <div className="mb-6">
          <button
            className={
              isSaved
                ? 'bg-teal-500 text-white hover:bg-teal-700 rounded-lg py-3 px-3 font-bold opacity-50 cursor-not-allowed'
                : 'bg-teal-500 text-white hover:bg-teal-700 rounded-lg py-3 px-3 font-bold'
            }
            type="submit"
          >
            Add Organization
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOrg;
