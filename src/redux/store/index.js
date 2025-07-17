// import React from "react";
// import { combineReducers } from "@reduxjs/toolkit";
// import headerReducer from "../slice/headerSlice";
// import currentPowerChartReducer  from '../slice/currentPowerChartSlice'
// import meterReducer from '../slice/meterSlice'
// import commandSlice from '../slice/commandSlice'
// import userSlice from '../slice/userSlice'

// import adminDashboardreduces from "../slice/adminDashboardDataSlice"

// const rootReducer = combineReducers({
//   header: headerReducer, // Correct structure
//   powerChart : currentPowerChartReducer,
//   meters : meterReducer,
//   commands : commandSlice,
//   users: userSlice,
//   adminDashboardData: adminDashboardreduces,
// });

// export default rootReducer;












// import { combineReducers } from "@reduxjs/toolkit";
// import headerReducer from "../slice/headerSlice";
// import currentPowerChartReducer from "../slice/currentPowerChartSlice";
// import meterReducer from "../slice/meterSlice";
// import commandSlice from "../slice/commandSlice";
// import userSlice from "../slice/userSlice";
// import adminDashboardreduces from "../slice/adminDashboardDataSlice";

// const rootReducer = combineReducers({
//   header: headerReducer,
//   powerChart: currentPowerChartReducer,
//   meters: meterReducer,
//   commands: commandSlice,
//   users: userSlice,
//   adminDashboardData: adminDashboardreduces,
// });

// export default rootReducer;









// src/store/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import headerReducer from "../slice/headerSlice";
import currentPowerChartReducer from "../slice/currentPowerChartSlice";
import meterReducer from "../slice/meterSlice";
import commandReducer from "../slice/commandSlice";
import userReducer from "../slice/userSlice";
import adminDashboardDataReducer from "../slice/adminDashboardDataSlice";

const rootReducer = combineReducers({
  header: headerReducer,
  powerChart: currentPowerChartReducer,
  meters: meterReducer,
  commands: commandReducer,
  users: userReducer,
  adminDashboardData: adminDashboardDataReducer,
});

export default rootReducer;
