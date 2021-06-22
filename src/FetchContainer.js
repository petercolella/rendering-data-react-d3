import React, { useEffect, useState } from "react";
import { arc, csv } from "d3";
import useWindowDimensions from "./hooks/useWindowDimensions";

const csvUrl =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv";

const styles = {
  pre: {
    fontSize: "2rem",
  },
};

const FetchContainer = () => {
  const [data, setData] = useState(null);
  const { height, width } = useWindowDimensions();

  const centerX = width / 2;
  const centerY = height / 2;

  const arcInstance = arc();
  const piePieceDegree = data && (Math.PI * 2) / data.length;

  const pieArc = (i) =>
    arcInstance({
      innerRadius: 0,
      outerRadius: height < width ? height / 2 : width / 2,
      startAngle: piePieceDegree * i,
      endAngle: piePieceDegree * (i + 1),
    });

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  if (!data) {
    return <pre style={styles.pre}>Waiting for data...</pre>;
  }

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX}, ${centerY})`}>
        {data.map((d, i) => (
          <path key={i} fill={d["RGB hex value"]} d={pieArc(i)} />
        ))}
      </g>
    </svg>
  );
};

export default FetchContainer;
