import React, { useEffect, useState } from 'react'
import ProtectedHeader from '../../protectedComponents/header/ProtectedHeader'
import { AnalyticsDashboard } from 'react-analytics-charts';
// Over ten different commonly used charts are available
import { SessionsByDateChart, SessionsGeoChart } from 'react-analytics-charts';
const Dashboard = () => {

  return (
    <div>
      <ProtectedHeader />
      <div className="nos">
        <AnalyticsDashboard
          authOptions={{ clientId: "571088133078-rhvcpp292romvu62i18sekcitk72ta64.apps.googleusercontent.com" }}
          renderCharts={(gapi, viewId) => {
            return (
              <div>
                <SessionsByDateChart
                  gapi={gapi}
                  viewId={viewId}
                  showPageViews
                  showUsers
                />
                <SessionsGeoChart
                  gapi={gapi}
                  viewId={viewId}
                  showPageViews
                />
                ... More charts here ...
              </div>
            );
          }}
        />
      </div>
    </div>
  )
}

export default Dashboard