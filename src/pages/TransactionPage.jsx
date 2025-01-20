import React, { useEffect} from "react";
import Heading from "../components/Heading";
import Transaction from "../components/activate/Transaction";

const TransactionPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Heading title="Transaction History" description="" keywords="" />
          <Transaction />
    </div>
  );
};

export default TransactionPage;
