import React, { useEffect} from "react";
import Heading from "../components/Heading";
import Overview from "../components/activate/Overview";

const OverviewPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Heading title="BOT Overview" description="" keywords="" />
          <Overview />
    </div>
  );
};

export default OverviewPage;
