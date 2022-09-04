import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Results } from "./results";

export const RouteComponent = () => {
  const shouldRedirect = true;
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={shouldRedirect && <Navigate replace to="/search" />}/>
        <Route path="/search" element={<Results />} />
        <Route path="/image" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/video" element={<Results />} />
      </Routes>
    </div>
  );
};