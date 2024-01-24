import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { apiContext } from "../context/ApiContextProvaider";

const User = () => {
  const { getApi1, apiData } = useContext(apiContext);
  useEffect(() => {
    getApi1();
  }, []);
  console.log(apiData);
  return (
    <div>
      {apiData.map((elem) => (
        <NavLink key={elem.id} to={`/detail/${elem.id}`}>
          <div>
            <h2>{elem.name}</h2>
            <NavLink key={elem.id} to={`/detail/${elem.id}`}>
              <button variant="contained" className="button">
                Посмотреть делальней
              </button>
            </NavLink>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default User;
