import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const ReactRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Outlet></Outlet>}>
          <Route index element={<Home />}></Route>

          <Route path="favorites" element={<Favorites />}></Route>

          <Route path="add-user" element={<AddUsers />}></Route>

          <Route path="update-user" element={<Outlet></Outlet>}>
            <Route path=":id" element={<UpdateUser />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default ReactRoutes;
