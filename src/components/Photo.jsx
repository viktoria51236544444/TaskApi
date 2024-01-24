import React, { useContext, useEffect } from "react";
import { apiContext } from "../context/ApiContextProvaider";
import { Link, NavLink } from "react-router-dom";

const Photo = () => {
  const { getApi, apiData } = useContext(apiContext);
  useEffect(() => {
    getApi();
  }, []);
  console.log(apiData);
  return (
    <div>
      <div className="img">
        {apiData.map((elem) => (
          <NavLink key={elem.id} to={`/album/${elem.id}`}>
            <div>
              <img src={elem.url} alt="" />
              <NavLink key={elem.id} to={`/album/${elem.id}`}>
                <button variant="contained" className="button">
                  Посмотреть делальней
                </button>
              </NavLink>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Photo;
