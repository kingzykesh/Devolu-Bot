import React, { useEffect} from "react";
import Heading from "../components/Heading";
import BotDetails from "../components/BotDetails";
import Header from "../components/Header";

const AllBotsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Heading title="BOT Details" description="" keywords="" />
      <Header active={0} />
          <BotDetails />
    </div>
  );
};

export default AllBotsPage;
