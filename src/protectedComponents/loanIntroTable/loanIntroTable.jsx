import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingServiceCategoryStarts } from "../../store/categoryReducer/categoryStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import LoanIntroData from "../loanIntroData/loanIntroData";
import ServiceCategoryData from "../serviceCategoryData/ServiceCategoryData";
import "./styles.css";

const LoanIntroTable = () => {
  let url = `${server}/loanWhatIs`;
  const dispatch = useDispatch();
  const serviceCategory = useSelector(
    (state) => state.categoryStore.serviceCategory
  );
  const [loanIntroEditModalVisible, setLoanIntroEditModalVisible] =
    useState(false);
  const [selectedLoanIntro, setSelectedLoanIntro] = useState({});
  const tableItemEdit = (record) => {
    setSelectedLoanIntro(
      serviceCategory.find((data) => data.id == record.id)
    );
    setLoanIntroEditModalVisible(true);
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
        console.log("Deleteing Loan Intro Success");
        message.success("Loan Intro Deleted!");
      })
      .catch((error) => {
        console.log("Deleteing Loan Intro Failed: ", error);
        message.error("Loan Intro Deletion Failed!");
      });
  };
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <div className="category-table-name">{text}</div>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Loan Type",
      dataIndex: "loanType",
      key: "loanType",
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
        setDataModalVisible={setLoanIntroEditModalVisible}
        dataModalVisible={loanIntroEditModalVisible}
      >
        <LoanIntroData
          updateData={selectedLoanIntro}
          url={url}
          method="PUT"
        />
      </DataInputModal>
    </div>
  );
};

export default LoanIntroTable;
