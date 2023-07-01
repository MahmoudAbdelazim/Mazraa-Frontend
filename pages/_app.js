import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { useEffect } from "react";
import "../app/globals.css";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;