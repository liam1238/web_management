import React from "react";
import Navbar from "../components/Navbar";
import Users_all from "../components/Users_all";
import Users_data from "../components/Users_data";
import BarChart from "../components/BarChart";

function Users() {
  return (
    <>
      <Navbar />
      <div className="Flex flex-col my-20"></div>
      <Users_data />
      <div className="Flex flex-col my-20"></div>
      <Users_all />
      <div className="Flex flex-col my-20"></div>
      <BarChart/>
    </>
  );
}

export default Users;
