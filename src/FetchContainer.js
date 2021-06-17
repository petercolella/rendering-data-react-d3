import React, { useEffect, useState } from "react";
import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv";

const styles = {
  pre: {
    fontSize: "2rem",
  },
};

const FetchContainer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  if (!data) {
    return <pre style={styles.pre}>Waiting for data...</pre>;
  }

  console.log(data[0]);

  return data.map((d, i) => (
    <div
      key={i}
      style={{ backgroundColor: d["RGB hex value"], height: 20 }}
    ></div>
  ));
};

export default FetchContainer;
