import React, { useEffect, useRef } from "react";
import * as vega from "vega";
import * as vegaLite from "vega-lite";
import * as vl from "vega-lite-api";
import { Handler } from "vega-tooltip";
import { config } from "./config/config";
import { getData } from "./utils/getData";
import { viz } from "./utils/viz";

vl.register(vega, vegaLite, {
  view: { renderer: "svg" },
  init: (view) => {
    view.tooltip(new Handler().call);
  },
});

const run = async () => {
  const marks = viz
    .data(await getData())
    .width(window.innerWidth)
    .height(window.innerHeight)
    .autosize({ type: "fit", contains: "padding" })
    .config(config);

  return await marks.render();
};

const VegaComponent = () => {
  const ref = useRef();

  useEffect(() => {
    run().then((child) => {
      ref.current.appendChild(child);
    });
  }, []);

  return <div ref={ref}></div>;
};

export default VegaComponent;
