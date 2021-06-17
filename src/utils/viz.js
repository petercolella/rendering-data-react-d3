import * as vl from "vega-lite-api";
export const viz = vl
  .markLine({ size: 5, opacity: 1 })
  .encode(
    vl.x().fieldT("timestamp").scale({ zero: false }),
    vl.y().fieldQ("temperature").scale({ zero: false }),
    vl.tooltip().fieldN("temperature")
  );
