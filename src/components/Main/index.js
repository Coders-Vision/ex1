import React from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "./Dasboard";
import Items from "./Items/Items";
import Order from "./Orders/Orders";
import File from "./File/File";
import Orders from "./Orders/Orders";

function index() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/items" element={<Items />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/file" element={<File />} />
      {/* <Route component={NotFoundPage} /> */}
    </Routes>
  );
}

export default index;
