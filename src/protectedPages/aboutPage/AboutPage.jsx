import { message } from "antd";
import React, { useRef, useState } from "react";
import { server } from "../../utils/fetch";
import AdminTextArea from "../../protectedComponents/adminTextArea/AdminTextArea";
import ImageUploadModal from "../../protectedComponents/imageUploadModal/ImageUploadModal";
const AboutPage = () => {
  let url = `${server}/landingAbout/text`;

  const [aboutPageValues, setAboutPageValues] = useState({
    heading: "",
    para1: "",
    para2: "",
  });
  const [aboutPageTextEdit, setAboutPageTextEdit] = useState({
    headingEdit: false,
    para1Edit: false,
    para2Edit: false,
  });

  const aboutPageHeadingRef = useRef(null);
  const aboutPagepara1Ref = useRef(null);
  const aboutPagePara2Ref = useRef(null);

  const updateDatabase = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(aboutPageValues),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(`Product About Page Updated!`);
        message.success(`Product About Page Updated!`);
      })
      .catch((error) => {
        console.log(`Updating Product About Page Failed!! : `, error);
        message.success(`Updating Product About Page Failed!!`);
      });
  };
  return (
    <div>
      <div className="container">
        <div className="admin-header">Abouut Page Section</div>
        <div className="row">
          <div className="col-md-8">
            <div className="admin-sub-heading">Hero Section</div>
            <div className="data-container">
              <div className="data-heading">Heading</div>
              <AdminTextArea
                textAreaRef={aboutPageHeadingRef}
                setTextEdit={setAboutPageTextEdit}
                textEdit={aboutPageTextEdit}
                textAreaValue={aboutPageValues}
                onTextAreaValueChange={setAboutPageValues}
                textEditName="headingEdit"
                textName="heading"
                name="aboutPageHeading"
              />
            </div>
            <div className="data-container">
              <div className="data-heading">Para 1</div>
              <AdminTextArea
                textAreaRef={aboutPagepara1Ref}
                setTextEdit={setAboutPageTextEdit}
                textEdit={aboutPageTextEdit}
                textAreaValue={aboutPageValues}
                onTextAreaValueChange={setAboutPageValues}
                textEditName="para1Edit"
                textName="para1"
                name="aboutPagePara1"
              />
            </div>
            <div className="data-container">
              <div className="data-heading">Para 2</div>
              <AdminTextArea
                textAreaRef={aboutPagePara2Ref}
                setTextEdit={setAboutPageTextEdit}
                textEdit={aboutPageTextEdit}
                textAreaValue={aboutPageValues}
                onTextAreaValueChange={setAboutPageValues}
                textEditName="para2Edit"
                textName="para2"
                name="aboutPagePara2"
              />
            </div>
            <button className="update-button" onClick={() => updateDatabase()}>
              Update
            </button>
            <div className="data-container">
              <div className="data-heading">About Page Image</div>
              <ImageUploadModal
                name="image"
                imageSection="About Page Image"
                url={`${server}/landingAbout/image`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
