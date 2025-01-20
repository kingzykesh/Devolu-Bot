import React, { useEffect} from "react";
import Heading from "../components/Heading";
import Deposit from "../components/activate";

const DepositPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Heading title="Deposit" description="" keywords="" />
          <Deposit />
    </div>
  );
};

export default DepositPage;
