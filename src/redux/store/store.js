// // src/store/store.js
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from ".";

// const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;









// redux/store.js
import { configureStore } from "@reduxjs/toolkit";

import adminDashboardReducer from "../slice/adminDashboardDataSlice";
import headerReducer from "../slice/headerSlice";
import currentPowerChartReducer from "../slice/currentPowerChartSlice";
import meterReducer from "../slice/meterSlice";
import commandReducer from "../slice/commandSlice";
import userReducer from "../slice/userSlice";

const store = configureStore({
  reducer: {
    header: headerReducer,
    powerChart: currentPowerChartReducer,
    meters: meterReducer,
    commands: commandReducer,
    users: userReducer,
    adminDashboardData: adminDashboardReducer,
  },
});

export default store;














// import { configureStore } from "@reduxjs/toolkit";
// import adminDashboardDataReducer from "../slice/adminDashboardDataSlice";

// const store = configureStore({
//   reducer: {
//     adminDashboardData: adminDashboardDataReducer,
//   },
// });

// export default store;















// import { configureStore } from "@reduxjs/toolkit";

// import headerReducer from "../slice/headerSlice";
// import currentPowerChartReducer from "../slice/currentPowerChartSlice";
// import meterReducer from "../slice/meterSlice";
// import commandSlice from "../slice/commandSlice";
// import userSlice from "../slice/userSlice";
// import adminDashboardReducer from "../slice/adminDashboardDataSlice";

// const store = configureStore({
//   reducer: {
//     header: headerReducer,
//     powerChart: currentPowerChartReducer,
//     meters: meterReducer,
//     commands: commandSlice,
//     users: userSlice,
//     adminDashboardData: adminDashboardReducer,
//   },
// });

// export default store;



