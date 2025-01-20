import React, { useEffect} from "react";
import Heading from "../components/Heading";
import MyBots from "../components/MyBots";
import Header from "../components/Header";

const MyBotsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Heading title="MY BOTS" description="" keywords="" />
      <Header active={1} />
          <MyBots />
    </div>
  );
};

export default MyBotsPage;
