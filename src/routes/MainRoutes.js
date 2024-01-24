import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import Photo from "../components/Photo";
import Album from "../components/Album";
import Detail from "../components/Detail";
import User from "../components/User";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/photo" element={<Photo />} />
      <Route path="/album/:id" element={<Album />} />
      <Route path="/user" element={<User />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default MainRoutes;
