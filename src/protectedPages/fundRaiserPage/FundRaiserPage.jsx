import React, { useState } from "react";
import DataInputModal from "../../protectedComponents/dataInputmodal/DataInputModal";
import FundRaiserCategoryData from "../../protectedComponents/fundRaiserCategoryData/fundRaiserCategoryData";
import FundRaiserCategoryTable from "../../protectedComponents/fundRaiserCategoryTable/fundRaiserCategoryTable";
import FundRaiserData from "../../protectedComponents/fundRaiserData/fundRaiserData";
import FundRaiserTable from "../../protectedComponents/fundRaiserTable/fundRaiserTable";

import { server } from "../../utils/fetch";
import "./styles.css";
const FundRaiserPage = () => {
  const [FundRaiserModalVisible, setFundRaiserModalVisible] = useState(false);
  const [FundRaiserCategoryModalVisible, setFundRaiserCategoryModalVisible] =
    useState(false);

  return (
    <div id="admin-fund-raiser-section">
      <div className="container">
        <div className="admin-fund-raiser-inner-section">
          <div className="admin-header">Fund Raiser Page</div>
          <div className="admin-inner-section">
            <button
              className="choose-button"
              onClick={() => setFundRaiserCategoryModalVisible(true)}
            >
              Add Fund Raiser
            </button>
            <DataInputModal
              setDataModalVisible={setFundRaiserCategoryModalVisible}
              dataModalVisible={FundRaiserCategoryModalVisible}
            >
              <FundRaiserCategoryData
                url={`${server}/fundRaiser`}
                method="POST"
              />
            </DataInputModal>
            <FundRaiserCategoryTable />
          </div>
          <div className="admin-inner-section">
            <button
              className="choose-button"
              onClick={() => setFundRaiserModalVisible(true)}
            >
              Add Fund Raiser
            </button>
            <DataInputModal
              setDataModalVisible={setFundRaiserModalVisible}
              dataModalVisible={FundRaiserModalVisible}
            >
              <FundRaiserData url={`${server}/fundRaiser`} method="POST" />
            </DataInputModal>
            <FundRaiserTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundRaiserPage;
