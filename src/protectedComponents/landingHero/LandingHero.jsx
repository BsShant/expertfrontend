import { message } from "antd";
import React, { useRef, useState } from "react";
import { server } from "../../utils/fetch";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import "./styles.css";
const LandingHero = () => {
  let url = `${server}/landingHero`;
  const [landingHeroValues, setLandingHeroValues] = useState({
    heading: "",
    subHeading: "",
  });
  const [landingHeroTextEdit, setLandingHeroTextEdit] = useState({
    headingEdit: false,
    subHeadingEdit: false,
  });

  const adminLandingHeadingRef = useRef(null);
  const adminLandingSubHeadingRef = useRef(null);
  const updateDatabase = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(landingHeroValues),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(`Landing Hero Section Updated!`);
        message.success(`Landing Hero Section Updated!`);
      })
      .catch((error) => {
        console.log(`Updating Landing Hero Section Failed!! : `, error);
        message.success(`Updating Landing Hero Section Failed!!`);
      });
  };
  return (
    <div className="admin-landing-section-hero-container">
      <div className="row">
        <div className="col-md-8">
          <div className="admin-sub-heading">Hero Section</div>
          <div className="data-container">
            <div className="data-heading">Heading</div>
            <AdminTextArea
              textAreaRef={adminLandingHeadingRef}
              setTextEdit={setLandingHeroTextEdit}
              textEdit={landingHeroTextEdit}
              textEditName="headingEdit"
              textAreaValue={landingHeroValues}
              onTextAreaValueChange={setLandingHeroValues}
              textName="heading"
              name="landingHeroHeading"
            />
          </div>

          <div className="data-container">
            <div className="data-heading">Sub Heading</div>
            <AdminTextArea
              textAreaRef={adminLandingSubHeadingRef}
              setTextEdit={setLandingHeroTextEdit}
              textEdit={landingHeroTextEdit}
              textEditName="subHeadingEdit"
              textAreaValue={landingHeroValues}
              onTextAreaValueChange={setLandingHeroValues}
              textName="subHeading"
              name="landingHeroSubHeading"
            />
          </div>
          <button className="update-button" onClick={() => updateDatabase()}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
