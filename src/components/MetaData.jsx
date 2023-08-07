import React from "react";
import Head from "next/head";

const MetaData = ({title}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
    </div>
  );
};

export default MetaData;
