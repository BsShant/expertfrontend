import React, { useState, useRef } from "react";
import "./styles.css";
import ImageUploading, { ImageListType } from "react-images-uploading";
import ImageUpload from "../imageUpload/ImageUplpoad";
import ImageUploadModal from "../imageUploadModal/ImageUploadModal";
import { server } from "../../utils/fetch";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import { message } from "antd";

const aboutData = {
  heading: "A NEW WAY TO CREATE PROJECT FOR YOUR COMPANY.",
  detail:
    "Expert Business serves professional and specialist business support to businesses of all sizes and in all sectors. We provide a support service to a company from pre incorporation to operation till winding-up. We’re trusted to provide flexible business services to some of the leading public and private companies.",
};
const AboutSection = () => {
  let url = `${server}/landingAbout/text`;

    const [landingAboutValues, setLandingAboutValues] = useState({
        heading: aboutData.heading,
        detail: aboutData.detail,
      });
      const [landingAboutTextEdit, setLandingAboutTextEdit] = useState({
        headingEdit: false,
        detailEdit: false,
      });

  const landingAboutHeadingRef = useRef(null);
  const landingAboutDetailRef = useRef(null);
  const updateDatabase = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(landingAboutValues),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(`Landing About Section Updated!`);
        message.success(`Landing About Section Updated!`);
      })
      .catch((error) => {
        console.log(`Updating Landing About Section Failed!! : `, error);
        message.success(`Updating Landing About Section Failed!!`);
      });
  };
  return (
    <div className="admin-landing-about-section">
      <div className="admin-landing-about-inner">
        <div className="row">
          <div className="col-md-8">
            <div className="admin-sub-heading">About Section</div>
            <div className="data-container">
              <div className="data-heading">Heading</div>
              <AdminTextArea
              textAreaRef={landingAboutHeadingRef}
              setTextEdit={setLandingAboutTextEdit}
              textEdit={landingAboutTextEdit}
              textEditName="headingEdit"
              textAreaValue={landingAboutValues}
              onTextAreaValueChange={setLandingAboutValues}
              textName="heading"
              name="landingAboutHeading"
            />
            </div>

            <div className="data-container">
              <div className="data-heading">Detail</div>
              <AdminTextArea
              textAreaRef={landingAboutDetailRef}
              setTextEdit={setLandingAboutTextEdit}
              textEdit={landingAboutTextEdit}
              textAreaValue={landingAboutValues}
              onTextAreaValueChange={setLandingAboutValues}
              textEditName="detailEdit"
              textName="detail"
              name="landingAboutDetail"

            />
            </div>
            <button className="update-button" onClick={() => updateDatabase()}>
              Update
            </button>
            <div className="data-container">
              <div className="data-heading">About Image</div>
              <ImageUploadModal name='image' imageSection='Landing About Image' url={`${server}/landingAbout/image`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
