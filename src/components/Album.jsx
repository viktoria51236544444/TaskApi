import React, { useContext, useEffect } from "react";
import { apiContext } from "../context/ApiContextProvaider";
import { useParams } from "react-router-dom";

const Album = () => {
  const { getOneApi, oneApi } = useContext(apiContext);
  const { id } = useParams();
  useEffect(() => {
    getOneApi(id);
  }, [id]);
  return (
    <div>
      <div className="img">
        <img src={oneApi.url} alt="" />
      </div>
    </div>
  );
};

export default Album;
