import React, { useEffect, useState } from "react";
import "./styles.css";
import Loader from "../../assets/images/loading.gif";
import HandLoader from "./HandLoader";
const PreLoader = () => {
  const [preLoader, setPreLoader] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
        setPreLoader(false)
    },[5000])
  }, []);
  return (
    <div className={`preloader ${!preLoader ? "nullState" : ""}`}>
      {/* <div className="loader"></div> */}
      {/* <img
        src={Loader}
        alt="Preloader"
        style={{ height: "60px", width: "60px" }}
      /> */}
      <HandLoader />
    </div>
  );
};

export default PreLoader;
