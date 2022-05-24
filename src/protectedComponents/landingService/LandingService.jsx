import React, { useRef, useState } from "react";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import './styles.css'
const LandingService = () => {

    const [landingServiceValues, setLandingServiceValues] = useState({
      heading: "hello",
      detail: "world",
    });
    const [landingServiceTextEdit, setLandingServiceTextEdit] = useState({
      headingEdit: false,
      detailEdit: false,
    });
  const adminLandingServiceHeadingRef = useRef(null);
  const adminLandingServiceSubHeadingRef = useRef(null);
  return (
    <div className="admin-landing-service">
      <div className="row">
        <div className="col-md-8">
          <div className="admin-sub-heading">Service Section</div>
          <div className="data-container">
            <div className="data-heading">Heading</div>
            <AdminTextArea
              textAreaRef={adminLandingServiceHeadingRef}
              setTextEdit={setLandingServiceTextEdit}
              textEdit={landingServiceValues}
              textAreaValue={landingServiceTextEdit}
              onTextAreaValueChange={setLandingServiceValues}
              textEditName="headingEdit"
              textName="heading"
              name="landingServiceHeading"

            />
          </div>

          <div className="data-container">
            <div className="data-heading">Sub Heading</div>
            <AdminTextArea
              textAreaRef={adminLandingServiceSubHeadingRef}
              setTextEdit={setLandingServiceTextEdit}
              textEdit={landingServiceValues}
              textAreaValue={landingServiceTextEdit}
              onTextAreaValueChange={setLandingServiceValues}
              textEditName="detailEdit"
              textName="detail"
              name="landingServiceHeading"

            />
          </div>
          <button className="update-button" onClick={() => {}}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingService;
