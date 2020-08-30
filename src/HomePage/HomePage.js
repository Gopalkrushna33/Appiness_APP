import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../actions";
import "./HomePage.css"

function HomePage() {
  debugger;
  const users = useSelector((state) => state.empList);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getEmp(user));
  }, []);

  return (
    <>
      <h1>Hi {user.username}!</h1>
      <h3>Employee List</h3>
      <p className="floatrt">
        <Link to="/login">Logout</Link>
      </p>
      <div className="table-responsive">
        {users.items && users.items.length > 0 && (
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>PhoneNo</th>
              </tr>
            </thead>
            <tbody>
              {users.items &&
                users.items.map((user, index) => (
                  <tr keys={user.id}>
                    <th>{user.id}</th>
                    <th>{user.name}</th>
                    <th>{user.age}</th>
                    <th>{user.gender}</th>
                    <th>{user.email}</th>
                    <th>{user.phoneNo}</th>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export { HomePage };
