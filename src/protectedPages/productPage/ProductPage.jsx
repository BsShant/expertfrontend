import React, { useState } from "react";
import DataInputModal from "../../protectedComponents/dataInputmodal/DataInputModal";
import ProductData from "../../protectedComponents/productData/productData";
import ProductHero from "../../protectedComponents/productHero/ProductHero";
import ProductTable from "../../protectedComponents/productTable/ProductTable";
import { useNav } from "../../protectedComponents/UseNav/UseNav";

import { server } from "../../utils/fetch";
import "./styles.css";
const ProductPage = () => {
  const serviceRef = useNav('Product');

  const [productModalVisible, setProductModalVisible] = useState(false);

  return (
    <div ref={serviceRef} id="ProductContainer">
      <div className="container">
        <div className="admin-product-inner-section">
          <div className="admin-header">Product Page</div>
          <ProductHero />
          <div className="admin-inner-section">
          <div className="admin-sub-heading">Products</div>
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
