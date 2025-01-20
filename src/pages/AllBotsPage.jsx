import React, { useEffect} from "react";
import Heading from "../components/Heading";
import AllBots from "../components/AllBots";
import Header from "../components/Header";

const AllBotsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Heading title="ALL BOTS" description="" keywords="" />
      <Header active={0} />
          <AllBots />
    </div>
  );
};

export default AllBotsPage;
