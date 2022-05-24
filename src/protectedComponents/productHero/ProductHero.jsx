import { message } from "antd";
import React, { useRef, useState } from "react";
import { server } from "../../utils/fetch";
import AdminTextArea from "../adminTextArea/AdminTextArea";
import ImageUploadModal from "../imageUploadModal/ImageUploadModal";
const ProductHero = () => {
  let url = `${server}/landingAbout/text`;

  const [productHeroValues, setProductHeroValues] = useState({
    heading: "",
    subHeading: "",
    detail: "",
  });
  const [productHeroTextEdit, setProductHeroTextEdit] = useState({
    headingEdit: false,
    subHeadingEdit: false,
    detailEdit: false,
  });

  const productHeroHeadingRef = useRef(null);
  const productHeroDetailRef = useRef(null);
  const productHeroSubHeadingRef = useRef(null);

  const updateDatabase = () => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productHeroValues),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(`Product Hero Section Updated!`);
        message.success(`Product Hero Section Updated!`);
      })
      .catch((error) => {
        console.log(`Updating Product Hero Section Failed!! : `, error);
        message.success(`Updating Product Hero Section Failed!!`);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <div className="admin-sub-heading">Product Hero Section</div>
          <div className="data-container">
            <div className="data-heading">Heading</div>
            <AdminTextArea
              textAreaRef={productHeroHeadingRef}
              setTextEdit={setProductHeroTextEdit}
              textEdit={productHeroTextEdit}
              textAreaValue={productHeroValues}
              onTextAreaValueChange={setProductHeroValues}
              textEditName="headingEdit"
              textName="heading"
              name="productHeroHeading"
            />
          </div>
          <div className="data-container">
            <div className="data-heading">Sub Heading</div>
            <AdminTextArea
              textAreaRef={productHeroSubHeadingRef}
              setTextEdit={setProductHeroTextEdit}
              textEdit={productHeroTextEdit}
              textAreaValue={productHeroValues}
              onTextAreaValueChange={setProductHeroValues}
              textEditName="subHeadingEdit"
              textName="subHeading"
              name="productHeroSubHeading"
            />
          </div>
          <div className="data-container">
            <div className="data-heading">Detail</div>
            <AdminTextArea
              textAreaRef={productHeroDetailRef}
              setTextEdit={setProductHeroTextEdit}
              textEdit={productHeroTextEdit}
              textAreaValue={productHeroValues}
              onTextAreaValueChange={setProductHeroValues}
              textEditName="detailEdit"
              textName="detail"
              name="productHeroDetail"
            />
          </div>
          <button className="update-button" onClick={() => updateDatabase()}>
            Update
          </button>
          <div className="data-container">
            <div className="data-heading">About Image</div>
            <ImageUploadModal
              name="image"
              imageSection="Product Hero Image"
              url={`${server}/landingAbout/image`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
