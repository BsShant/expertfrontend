import { message, Table } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchingServiceCategoryStarts } from "../../store/categoryReducer/categoryStore.actions";
import { server } from "../../utils/fetch";
import DataInputModal from "../dataInputmodal/DataInputModal";
import ServiceData from "../serviceData.jsx/ServiceData";
import "./styles.css";
const dataSource = [
  {
    id: "1",
    title: "ATM card",
    category: "financial-services",
    price: "Rs 12000",
    image: "10 Downing Street",
    thumbnail: "dddd",
    para1: "dfsfsd",
    para2: "dsdddd",
    rank: "3",
    point1: "ddd",
    point2: "Dddd",
    point3: "ddddd",
    point4: "",
    point5: "",
  },
  {
    id: "2",
    title: "Life Insurance",
    category: "insurance-services",
    price: "Rs 12000",
    image: "10 Downing Street",
    thumbnail: "dddd",
    rank: "3",
    para1: "dfsfsd",
    para2: "dsdddd",
    point1: "ddd",
    point2: "Dddd",
    point3: "ddddd",
    point4: "",
    point5: "",
  },
];

const ServiceTable = () => {
  let url = `${server}/service`;
  const [serviceDataEditModalVisible, setServiceDataEditModalVisible] =
    useState(false);
  const dispatch = useDispatch();
  const [selectedService, setSelectedService] = useState({});
  const editServiceEdit = (record) => {
    setSelectedService(dataSource.find((data) => data.id == record.id));
    setServiceDataEditModalVisible(true);
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
        console.log("Deleteing service category success");
        message.success("Service Category deleted!");
      })
      .catch((error) => {
        console.log("Deleteing service category failed: ", error);
        message.error("Service Category deletiopn failed!");
      });
  };
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (text, record) => (
        <div className="category-table-name">{text.replaceAll("-", " ")}</div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "Edit",
      key: "edit",
      render: (text, record) => (
        <button
          className="table-button"
          onClick={() => editServiceEdit(record)}
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
      <Table dataSource={dataSource} columns={columns} />
      <DataInputModal
        setDataModalVisible={setServiceDataEditModalVisible}
        dataModalVisible={serviceDataEditModalVisible}
      >
        <ServiceData serviceData={selectedService} url={url} method="PUT" />
      </DataInputModal>
    </div>
  );
};

export default ServiceTable;
