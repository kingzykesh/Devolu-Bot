import React, { useEffect} from "react";
import Heading from "../components/Heading";
import Claim from "../components/activate/Claim";

const ClaimPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Heading title="Chain Value" description="" keywords="" />
          <Claim />
    </div>
  );
};

export default ClaimPage;
