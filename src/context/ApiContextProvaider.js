import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { API } from "../helpers/const";
export const apiContext = createContext();
const ApiContextProvaider = ({ children }) => {
  const [oneApi, setOneApi] = useState("");
  const [oneApi1, setOneApi1] = useState("");

  const INIT_STATE = {
    apiData: [],
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_API":
        return {
          ...state,
          apiData: action.payload,
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // !GET API
  const getApi = async () => {
    const { data } = await axios(`${API}/photos`);

    dispatch({
      type: "GET_API",
      payload: data,
    });
  };
  useEffect(() => {
    getApi();
  }, []);
  // ! getOneApi
  const getOneApi = async (id) => {
    const { data } = await axios(`${API}/photos/${id}`);
    setOneApi(data);
  };

  // !GET API
  const getApi1 = async () => {
    const { data } = await axios(`${API}/users`);

    dispatch({
      type: "GET_API",
      payload: data,
    });
  };
  useEffect(() => {
    getApi1();
  }, []);
  // ! getOneApi
  const getOneApi2 = async (id) => {
    const { data } = await axios(`${API}/users/${id}`);
    setOneApi1(data);
  };
  const values = {
    apiData: state.apiData,
    getApi,
    getOneApi,
    oneApi,
    getApi1,
    getOneApi2,
    oneApi1,
  };

  return <apiContext.Provider value={values}>{children}</apiContext.Provider>;
};

export default ApiContextProvaider;
