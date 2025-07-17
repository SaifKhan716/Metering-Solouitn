// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Async action to fetch dashboard data
// export const fetchDashboardData = createAsyncThunk(
//   "dashboard/fetchDashboardData",
//   async (adminId, { rejectWithValue }) => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/seed-dashboard/${adminId}`);
//       return res.data.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

// const adminDashboardDataSlice = createSlice({
//   name: "dashboard",
//   initialState: {
//     data: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchDashboardData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchDashboardData.fulfilled, (state, action) => {
//         state.data = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchDashboardData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Failed to load dashboard data.";
//       });
//   },
// });

// export default adminDashboardDataSlice.reducer;










// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Update this to match your API route
// export const fetchDashboardData = createAsyncThunk(
//   'adminDashboard/fetchDashboardData',
//   async (adminId, thunkAPI) => {
//        console.log("Fetching dashboard for adminId:", adminId); // ✅ Add this
//     const res = await axios.get(`/api/seed-dashboard/${adminId}`);
//     return res.data; // this must match your backend return shape
//   }
// );

// const adminDashboardDataSlice = createSlice({
//   name: 'adminDashboardData',
//   initialState: {
//     data: null,
//     loading: false,
//     error: null
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchDashboardData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchDashboardData.fulfilled, (state, action) => {
//         state.data = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchDashboardData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   }
// });

// export default adminDashboardDataSlice.reducer;












// src/slice/adminDashboardDataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDashboardData = createAsyncThunk(
  'adminDashboardData/fetchDashboardData',
  async (adminId, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/seed-dashboard/${adminId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const adminDashboardDataSlice = createSlice({
  name: 'adminDashboardData',
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  }
});

export default adminDashboardDataSlice.reducer;

