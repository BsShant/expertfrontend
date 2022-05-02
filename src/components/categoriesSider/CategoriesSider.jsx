import { Layout, Menu } from 'antd';
import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux'
import './styles.css'
import { setSelectedCategory } from '../../store/categoryReducer/categoryStore.actions';
const CategoriesSider = (props) => {
    const { Sider } = Layout;
    const dispatch = useDispatch()
    const selectedCategory = useSelector(state => state.categoryStore.selectedCategory)

    const location = useLocation();
    let url = location.pathname;
    const handleClick = (e) => {
       dispatch(setSelectedCategory(e))
    }
    const mySelected = url.split("/")[url.split("/").length - 1];
    return (
        <div className="category-sider">
            <div className="container" style={{ height: "100%", background: "white", padding: "0px" }}>
                <div className="sider-header">
                    Categories
                </div>
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
                        <Menu.Item
                            key="legal service"

                        >
                            Legal Service
                        </Menu.Item>
                        <Menu.Item
                            key="insurance"

                        >
                            Insurance
                        </Menu.Item>
                        <Menu.Item
                            key="marketing"
                        >
                            Marketing
                        </Menu.Item>
                        <Menu.Item
                            key="finance"
                        >
                            Finance
                        </Menu.Item>
                        <Menu.Item
                            key="consulting"
                        >
                            Consulting
                        </Menu.Item>
                        <Menu.Item
                            key="management"
                        >
                            Management
                        </Menu.Item>
                        <Menu.Item
                            key="training"
                        >
                            Training
                        </Menu.Item>
                        <Menu.Item
                            key="research"
                        >
                            Research
                        </Menu.Item>
                        <Menu.Item
                            key="language"
                        >
                            Language
                        </Menu.Item>
                        <Menu.Item
                            key="designing"
                        >
                            Designing
                        </Menu.Item>
                        <Menu.Item
                            key="strategy"
                        >
                            Strategy
                        </Menu.Item>
                        <Menu.Item
                            key="it"
                        >
                            IT
                        </Menu.Item>
                        <Menu.Item
                            key="investment"
                        >
                            Investment
                        </Menu.Item>
                        <Menu.Item
                            key="engineering"
                        >
                            Engineering
                        </Menu.Item>
                    </Menu>
                </Sider>
            </div>

        </div>

    )
}

export default CategoriesSider