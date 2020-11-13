import { useEffect, useReducer } from 'react';

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        orgName: action.orgName,
        error: null,
      };
    case 'FETCH_FAILED':
      return {
        ...prevState,
        error: action.error,
      };
    default:
      return prevState;
  }
};
export const useOrg = orgId => {
  const [state, dispatch] = useReducer(reducer, {
    orgName: '',
  });

  useEffect(() => {
    let isMounted = true;

    const url = `/api/orgs/${orgId}`;
    fetch(url)
      .then(res => res.json())
      .then(json => {
        if (isMounted) {
          dispatch({
            type: 'FETCH_SUCCESS',
            orgName: json.org.organization_name,
          });
        }
      })
      .catch(err => {
        if (isMounted) {
          dispatch({
            type: 'FETCH_FAILED',
            error: err.message,
          });
        }
      });
    return () => {
      isMounted = false;
    };
  }, [orgId]);
  return state;
};
