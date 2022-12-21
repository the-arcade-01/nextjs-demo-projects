import "../styles/globals.css";

import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 1000,
});

Router.events.on("routerChangeStart", progress.start);
Router.events.on("routerChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
