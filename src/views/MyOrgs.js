import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listMyOrgs } from '../actions/orgActions';
import { useDispatch, useSelector } from 'react-redux';

function MyOrgs(props) {
  const dispatch = useDispatch();
  const myOrgList = useSelector(state => state.myOrgList);
  const { loading: loadingOrgs, orgs, error: errorOrgs } = myOrgList;

  useEffect(() => {
    dispatch(listMyOrgs());
    return () => {};
  }, [])

  return <div className="profile-orders content-margined">
  { loadingOrgs ? <div>Loading...</div> :
    errorOrgs ? <div>{errorOrgs}</div> :
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>CONTACT</th>
            <th>PHONE</th>
            <th>ADDRESS</th>
          </tr>
        </thead>
        <tbody>
          {orgs.map(org => <tr key={org.organization_id}>
            <td>{org.organization_id}</td>
            <td>{org.contact_name}</td>
            <td>{org.phone}</td>
            <td>{org.address}</td>
            <td>
              <Link to={"/orgs/" + org.organization_id}>DETAILS</Link>
            </td>
          </tr>)}
        </tbody>
      </table>
  }
  </div>
}

export default MyOrgs;
