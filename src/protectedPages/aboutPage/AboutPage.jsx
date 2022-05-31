import { message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { server } from "../../utils/fetch";
import AdminTextArea from "../../protectedComponents/adminTextArea/AdminTextArea";
import ImageUploadModal from "../../protectedComponents/imageUploadModal/ImageUploadModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchingAboutStarts } from "../../store/aboutReducer/aboutStore.actions";
const AboutPage = () => {
  let url = `${server}/about/text`;
  const dispatch = useDispatch();
  const about = useSelector((state) => state.aboutStore.about);
  const [aboutPageValues, setAboutPageValues] = useState({
    heading: about ? about.heading : "",
    para1: about ? about.para1 : "",
    para2: about ? about.para2 : "",
  });
  const [aboutPageTextEdit, setAboutPageTextEdit] = useState({
    headingEdit: false,
    para1Edit: false,
    para2Edit: false,
  });

  useEffect(() => {
    if (about) {
      setAboutPageValues({
        heading: about.heading,
        para1: about.para1,
        para2: about.para2,
      });
    }
  }, [about]);
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
        dispatch(fetchingAboutStarts());
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
        <div className="admin-box-container">
          <div className="row">
            <div className="col-md-12">
              <div className="data-container ">
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
              <button
                className="update-button"
                onClick={() => updateDatabase()}
              >
                Update
              </button>
              <div className="data-container">
                <div className="data-heading">About Page Image</div>
                <ImageUploadModal
                  name="image"
                  imageSection="About Page Image"
                  url={`${server}/about/image`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
