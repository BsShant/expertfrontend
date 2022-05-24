import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingServiceCategoryStarts } from "../../store/categoryReducer/categoryStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import LoanIntroData from "../loanIntroData/loanIntroData";
import LoanTypeData from "../loanTypeData/LoanTypeData";
import "./styles.css";

const FundRaiserCategoryTable = () => {
  let url = `${server}/loanType`;
  const dispatch = useDispatch();
  const serviceCategory = useSelector(
    (state) => state.categoryStore.serviceCategory
  );
  const [fundRaiserCategoryEditModalVisible, setFundRaiserCategoryEditModalVisible] =
    useState(false);
  const [selectedFunndRaiserCategory, setSelectedFunndRaiserCategory] = useState({});
  const tableItemEdit = (record) => {
    setSelectedFunndRaiserCategory(
      serviceCategory.find((data) => data.id == record.id)
    );
    setFundRaiserCategoryEditModalVisible(true);
  };
  const tableItemDelete = (record) => {
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: record.id }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingServiceCategoryStarts());
        console.log("Deleteing Fund Raiser Category Success");
        message.success("Fund Raiser Category Deleted!");
      })
      .catch((error) => {
        console.log("Deleteing Fund Raiser Category Failed: ", error);
        message.error("Fund Raiser Category Deletion Failed!");
      });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="category-table-name">{text}</div>
      ),
    },
    {
      title: "Edit",
      key: "edit",
      render: (text, record) => (
        <button
          className="table-button"
          onClick={() => tableItemEdit(record)}
        >
          Edit
        </button>
      ),
      responsive: ["lg"],
    },
    {
      title: "Delete",
      key: "delete",
      render: (text, record) => (
        <button
          className="table-button"
          onClick={() => tableItemDelete(record)}
        >
          Delete
        </button>
      ),
      responsive: ["lg"],
    },
  ];
  return (
    <div>
      <Table dataSource={serviceCategory} columns={columns} />
      <DataInputModal
        setDataModalVisible={setFundRaiserCategoryEditModalVisible}
        dataModalVisible={fundRaiserCategoryEditModalVisible}
      >
        <LoanTypeData
          updateData={selectedFunndRaiserCategory}
          url={url}
          method="PUT"
        />
      </DataInputModal>
    </div>
  );
};

export default FundRaiserCategoryTable;
