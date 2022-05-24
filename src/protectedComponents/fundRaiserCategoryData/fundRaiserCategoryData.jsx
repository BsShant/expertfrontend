import { message, Select } from "antd";
import React, { useEffect, useState } from "react";
import AdminModalTextArea from "../adminModalTextArea/AdminModalTextArea";
import ImageSelect from "../imageSelect/ImageSelect";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchingServiceCategoryStarts } from "../../store/categoryReducer/categoryStore.actions";

const FundRaiserCategoryData = (props) => {
  const dispatch = useDispatch();
  const [fundRaiserCategoryValues, setFundRaiserCategoryValues] = useState({
    name: "",
  });
  const serviceCategory = useSelector(
    (state) => state.categoryStore.serviceCategory
  );

  useEffect(() => {
    setFundRaiserCategoryValues({
      name: props.updateData ? props.updateData.name : "",
    });
  }, [props.updateData]);
  const addData = () => {
    if (!fundRaiserCategoryValues.name) {
      return message.error("Please insert required values!");
    }
    fetch(props.url, {
      method: props.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        props.updateData
          ? { ...fundRaiserCategoryValues, id: props.updateData.id }
          : { ...fundRaiserCategoryValues }
      ),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingServiceCategoryStarts());
        console.log(
          `Fund Raiser Category ${props.updateData ? "Updated" : "Added"}`
        );
        message.success(
          `Fund Raiser Category ${props.updateData ? "Updated" : "Added"}!`
        );
        props.setDataModalVisible(false);
      })
      .catch((error) => {
        console.log(
          `${props.updateData ? "Updating" : "Adding"} Fund Raiser Category
           Failed`
        );
        message.error(
          `${
            props.updateData ? "Updating" : "Adding"
          } New Fund Raiser Category Failed!`
        );
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <AdminModalTextArea
            textAreaValue={fundRaiserCategoryValues}
            onTextAreaValueChange={setFundRaiserCategoryValues}
            textName="name"
            name="FundRaiserCtaegoryName"
            title="Name"
          />
        </div>
      </div>

      <button className="update-button" onClick={() => addData()}>
        {props.updateData ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default FundRaiserCategoryData;
