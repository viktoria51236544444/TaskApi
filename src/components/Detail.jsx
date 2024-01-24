import React, { useContext, useEffect } from "react";
import { apiContext } from "../context/ApiContextProvaider";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { getOneApi2, oneApi1 } = useContext(apiContext);
  const { id } = useParams();
  useEffect(() => {
    getOneApi2(id);
  }, [id]);
  return (
    <div>
      <div className="form">
        <h2>{oneApi1.name}</h2>
        <h3>{oneApi1.username}</h3>
        <h3>{oneApi1.email}</h3>
        <h4>{oneApi1.address.city}</h4>
        <h4>{oneApi1.address.suite}</h4>
        <h3>{oneApi1.address.zipcode}</h3>
      </div>
    </div>
  );
};

export default Detail;
