import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Cards from "./Cards";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import Addprofile from "./Addprofile";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* Sidebar */}
      <SideBar />

      <div className="lg:ml-[19%] w-full p-4">
        {/* Navbar */}
        <NavBar />

        {/* Cards */}
        <Cards />

        {/* BarChart */}
        <BarChart />

        <div className="flex flex-col md:flex-row">
          {/* DoughnutChart */}
          <DoughnutChart />

          <div className="min-w-[50%]">
            {/* Addprofile */}
            <Addprofile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
