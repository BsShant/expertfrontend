import React, { useState } from "react";
import DataInputModal from "../../protectedComponents/dataInputmodal/DataInputModal";
import ProductData from "../../protectedComponents/productData/productData";
import ProductHero from "../../protectedComponents/productHero/ProductHero";
import ProductTable from "../../protectedComponents/productTable/ProductTable";

import { server } from "../../utils/fetch";
import "./styles.css";
const ProductPage = () => {
  const [productModalVisible, setProductModalVisible] = useState(false);

  return (
    <div id="admin-product-section">
      <div className="container">
        <div className="admin-product-inner-section">
          <div className="admin-header">Product Page</div>
          <ProductHero />
          <div className="admin-inner-section">
            <button
              className="choose-button"
              onClick={() => setProductModalVisible(true)}
            >
              Add Product
            </button>
            <DataInputModal
              setDataModalVisible={setProductModalVisible}
              dataModalVisible={productModalVisible}
            >
              <ProductData url={`${server}/product`} method="POST" />
            </DataInputModal>
            <ProductTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
