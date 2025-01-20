import React from "react";
import { Helmet } from "react-helmet";

const Heading = ({ title, description, keywords }) => {
return (
    <Helmet>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        </Helmet>
)
}

export default Heading;