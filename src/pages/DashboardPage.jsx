import React, { useEffect} from "react";
import Heading from "../components/Heading";
import Dashboard from "../components/Dashboard";

const DashboardPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Heading title="Home" description="" keywords="" />
          <Dashboard />
    </div>
  );
};

export default DashboardPage;
