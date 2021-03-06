import { Layout, Menu } from "antd";
import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import { setSelectedCategory } from "../../store/categoryReducer/categoryStore.actions";
const CategoriesSider = (props) => {
  const { Sider } = Layout;
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.categoryStore.selectedCategory
  );
  const serviceCategory = useSelector(
    (state) => state.categoryStore.serviceCategory
  );
  const location = useLocation();
  let url = location.pathname;
  const handleClick = (e) => {
    dispatch(setSelectedCategory(e));
  };
  const mySelected = url.split("/")[url.split("/").length - 1];
  return (
    <div className="category-sider">
      <div
        className="container"
        style={{ height: "100%", background: "white", padding: "0px" }}
      >
        <div className="sider-header">Categories</div>
        <Sider
          trigger={null}
          className="categoriesSider"
          collapsible
          collapsed={false}
          collapsedWidth={0}
        >
          <Menu
            className="sliderMenu"
            mode="inline"
            onClick={(e) => handleClick(e.key)}
            selectedKeys={[selectedCategory]}
            // defaultSelectedKeys={[mySelected]}
          >
            {serviceCategory.length > 0
              ? serviceCategory.map((category, index) => {
                  return (
                    <Menu.Item key={category.route} style={{textTransform:'capitalize'}}>{category.name}</Menu.Item>
                  );
                })
              : null}
           
          </Menu>
        </Sider>
      </div>
    </div>
  );
};

export default CategoriesSider;
