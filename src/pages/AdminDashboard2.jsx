// import React, { useEffect, useState, useMemo, useCallback } from "react";

// import { useDispatch, useSelector } from "react-redux";
// import { fetchDashboardData } from "../redux/slice/adminDashboardDataSlice"; // adjust path as needed

// import {
//   Gauge,
//   TrendingUp,
//   Download,
//   AlertTriangle,
//   Zap,
//   Bell,
//   Calendar,
//   Activity,
//   Users,
//   DollarSign,
//   BarChart3,
//   UserPlus,
//   Search,
//   Settings,
//   Filter,
//   RefreshCw,
//   ChevronDown,
//   Eye,
//   TrendingDown,
//   Clock,
//   CheckCircle,
//   XCircle,
//   AlertCircle,
// } from "lucide-react";
// import MeterList from "../components/MeterList";

// // Mock data for demo purposes
// const mockCharts = [
//   {
//     id: 1,
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     dataPoints: [65, 59, 80, 81, 56, 55],
//   },
// ];

// const Dashboard = () => {
//   const [startDate, setStartDate] = useState("2025-04-01");
//   const [refreshing, setRefreshing] = useState(false);
//   const [notifications, setNotifications] = useState(23);

//   const meters = [
//   {
//     meterId: "M01-499602d2",
//     name: "Main Water Meter - Building A",
//     type: "Smart Water Meter",
//     meterSerialNumber: 1234567890,
//     slaveId: 1,
//     status: "online",
//     lastSeen: new Date(),
//     adminId: "64b8a9cf3c8a4b2f7f3921f1",
//     assingnedUserId: "64b8aa2f9f7cbe2f7f3923e4",
//     isAssigned: true
//   },
//   {
//     meterId: "M02-3ade68b1",
//     name: "Submeter - Lab 2",
//     type: "Smart Electric Meter",
//     meterSerialNumber: 987654321,
//     slaveId: 2,
//     status: "offline",
//     lastSeen: new Date("2025-07-16T22:10:00Z"),
//     adminId: "64b8a9cf3c8a4b2f7f3921f1",
//     isAssigned: false
//   },
//   {
//     meterId: "M03-1cbe991",
//     name: "Gas Meter - Kitchen",
//     type: "Smart Gas Meter",
//     meterSerialNumber: 30003025,
//     slaveId: 3,
//     status: "faulty",
//     lastSeen: new Date("2025-07-10T13:05:00Z"),
//     adminId: "64b8a9cf3c8a4b2f7f3921f1",
//     isAssigned: false
//   }
// ];

//   const mockAdminNotifications = [
//     {
//       _id: "ADM-1",
//       alertType: "High Load Usage",
//       message:
//         "High load detected on Meter ID #MTR456 for User ID #USR789. Please reduce usage to avoid overload.",
//       value: "6.2kW",
//       mode: "Email",
//       time: "2025-01-16T09:15:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-2",
//       alertType: "Security Alert",
//       message: "Unusual login attempt detected",
//       value: "From IP: 192.168.1.100",
//       mode: "Text",
//       time: "2025-01-15T22:30:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-3",
//       alertType: "Maintenance Required",
//       message: "Meter MTR-004 needs firmware update",
//       value: "MTR-004",
//       mode: "Email",
//       time: "2025-01-14T14:45:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-4",
//       alertType: "Reverse Polarity",
//       message:
//         "Reverse current detected for Meter ID #MTR321 (User ID #USR654). Downlink sent to protect the system.",
//       value: "Reverse Current",
//       mode: "Text",
//       time: "2025-01-16T11:00:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-5",
//       alertType: "Magnetic Interference",
//       message:
//         "We detected possible magnetic interference on Meter ID #MTR888 (User ID #USR333). Please ensure the area is safe.",
//       value: "Magnet detected",
//       mode: "Email",
//       time: "2025-01-16T10:30:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-6",
//       alertType: "Current Imbalance",
//       message:
//         "Phase current imbalance noticed – please check wiring or load for Meter ID #MTR567.",
//       value: "R:Y:B = 5A:12A:7A",
//       mode: "Email",
//       time: "2025-01-16T09:00:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-7",
//       alertType: "Neutral Voltage Issue",
//       message:
//         "Voltage fluctuation detected – this may damage appliances (Meter ID #MTR678).",
//       value: "Neutral = 18V",
//       mode: "Text",
//       time: "2025-01-16T08:30:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-8",
//       alertType: "Meter Offline",
//       message:
//         "Meter #MTR123 (User ID #USR987) is offline or not responding for over 3 hours.",
//       value: "Last seen: 05:30 AM",
//       mode: "Email",
//       time: "2025-01-16T08:00:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-9",
//       alertType: "Garbage Uplink Data",
//       message:
//         "Meter #MTR456 (User #USR789) sent invalid data (01FFFFF) 3 times. Please verify.",
//       value: "3x Invalid packets",
//       mode: "Email",
//       time: "2025-01-15T19:00:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-10",
//       alertType: "No Usage Detected",
//       message:
//         "No usage detected today on Meter ID #MTR123 for User ID #USR456. May indicate no one is home or a device issue.",
//       value: "0 Units",
//       mode: "Text",
//       time: "2025-01-15T21:00:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-11",
//       alertType: "High Load vs Previous",
//       message:
//         "Today's load is 50% higher than any previous day for Meter ID #MTR890 (User ID #USR222).",
//       value: "9.5kW today",
//       mode: "Email",
//       time: "2025-01-15T20:00:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-12",
//       alertType: "Spike in Usage",
//       message: "Unusual electricity usage detected today.",
//       value: "3× Daily Avg",
//       mode: "Text",
//       time: "2025-01-15T18:00:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-13",
//       alertType: "Meter Offline",
//       message: "Meter #MTR456 is offline or not responding for over 3 hours.",
//       value: "Last seen: 02:00 PM",
//       mode: "Email",
//       time: "2025-01-15T17:00:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-14",
//       alertType: "Reverse Polarity",
//       message:
//         "Reverse current detected for Meter ID #MTR654 (User ID #USR100).",
//       value: "Fault Detected",
//       mode: "Text",
//       time: "2025-01-15T16:00:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-15",
//       alertType: "Current Imbalance",
//       message: "Current imbalance detected on Meter MTR010",
//       value: "R:5A G:12A B:7A",
//       mode: "Email",
//       time: "2025-01-15T15:30:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-16",
//       alertType: "Garbage Uplink Data",
//       message: "Meter MTR777 sent corrupt data pattern multiple times",
//       value: "01FFFFF",
//       mode: "Email",
//       time: "2025-01-15T14:00:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-17",
//       alertType: "Magnetic Interference",
//       message: "Possible magnetic tampering detected – Meter ID #MTR987",
//       value: "Magnet Triggered",
//       mode: "Text",
//       time: "2025-01-15T13:00:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-18",
//       alertType: "Neutral Voltage Issue",
//       message: "Voltage on neutral exceeded 15V threshold.",
//       value: "Neutral = 16.5V",
//       mode: "Email",
//       time: "2025-01-15T12:30:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-19",
//       alertType: "Spike in Usage",
//       message: "Daily usage has doubled for Meter ID #MTR007.",
//       value: "4 units → 10 units",
//       mode: "Email",
//       time: "2025-01-15T12:00:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-20",
//       alertType: "Security Alert",
//       message: "Multiple failed login attempts detected.",
//       value: "5 attempts",
//       mode: "Text",
//       time: "2025-01-15T11:30:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-21",
//       alertType: "Maintenance Required",
//       message: "Low signal strength on Meter ID #MTR006",
//       value: "RSSI = -105 dBm",
//       mode: "Email",
//       time: "2025-01-15T11:00:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-22",
//       alertType: "System Alert",
//       message: "Memory usage exceeded 80%",
//       value: "81% RAM",
//       mode: "Email",
//       time: "2025-01-15T10:30:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-23",
//       alertType: "Garbage Uplink Data",
//       message: "Invalid data received multiple times from Meter MTR-300",
//       value: "Repeated Code: XXFFF",
//       mode: "Email",
//       time: "2025-01-15T09:45:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-24",
//       alertType: "Meter Offline",
//       message: "No response from Meter ID #MTR110 for 5 hours",
//       value: "Offline",
//       mode: "Text",
//       time: "2025-01-15T09:15:00Z",
//       status: "enabled",
//     },
//     {
//       _id: "ADM-25",
//       alertType: "Reverse Polarity",
//       message:
//         "Meter #MTR999 has reversed current. Please inspect immediately.",
//       value: "Alert: Polarity Mismatch",
//       mode: "Email",
//       time: "2025-01-15T08:00:00Z",
//       status: "enabled",
//     },
//   ];

//   const initialAlerts = mockAdminNotifications.filter((alert) =>
//     [
//       "Reverse Polarity",
//       "High Load Usage",
//       "Balance Expired",
//       "Magnetic Interference",
//     ].includes(alert.alertType)
//   );

//   const [alerts, setAlerts] = useState(initialAlerts);

//   // const [alerts, setAlerts] = useState([
//   //   {
//   //     id: 1,
//   //     type: "critical",
//   //     message: "Meter #245 offline",
//   //     time: "2 min ago",
//   //   },
//   //   {
//   //     id: 2,
//   //     type: "warning",
//   //     message: "High usage detected",
//   //     time: "5 min ago",
//   //   },
//   //   {
//   //     id: 3,
//   //     type: "info",
//   //     message: "System update available",
//   //     time: "1 hour ago",
//   //   },
//   // ]);
//   const [isExportOpen, setIsExportOpen] = useState(false);
//   const handleExportClick = (format) => {
//     console.log(`Exporting as ${format}`);
//     setIsExportOpen(false);
//     // Add your export logic here
//   };

//   const today = new Date().toISOString().split("T")[0];

//   const [adminDashboardData, setAdminDashboardData] = useState(null);

//   const dispatch = useDispatch();
//   const adminId = "64acbd8fc9e77a6fba123001"; // You can replace with dynamic ID if needed
//   console.log(useSelector((state) => state.adminDashboardData));
//   const { data, loading, error } = useSelector(
//     (state) => state.adminDashboardData
//   );

//   useEffect(() => {
//     dispatch(fetchDashboardData(adminId));
//     if (!loading && data) {
//       setAdminDashboardData(data);
//     }
//   }, [dispatch, adminId]);

//   if (loading || !data) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-gray-500 text-lg">Loading Dashboard...</p>
//       </div>
//     );
//   }

//   const from = new Date(startDate);
//   const to = new Date();
//   const filteredCharts = mockCharts.map((chart) => {
//     const filteredLabels = [];
//     const filteredDataPoints = [];

//     chart.labels.forEach((label, i) => {
//       const fakeDate = new Date(
//         `2025-${(i + 1).toString().padStart(2, "0")}-01`
//       );
//       if (fakeDate >= from && fakeDate <= to) {
//         filteredLabels.push(label);
//         filteredDataPoints.push(chart.dataPoints[i]);
//       }
//     });

//     return {
//       ...chart,
//       labels: filteredLabels,
//       dataPoints: filteredDataPoints,
//     };
//   });

//   const handleRefresh = async () => {
//     setRefreshing(true);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setRefreshing(false);
//   };

//   const totalActive = data.data.totalActiveMeters;
//   const total = data.data.totalMeters;

//   // Safeguard against division by zero
//   const percentage = total > 0 ? Math.round((totalActive / total) * 100) : 0;

//   const MetricsCard = ({
//     title,
//     value,
//     change,
//     isPositive,
//     icon: Icon,
//     trend,
//     cardType = "default",
//   }) => {
//     const trendColor = isPositive ? "bg-green-500" : "bg-red-500";
//     const textColor = isPositive ? "text-green-600" : "text-red-600";

//     return (
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-all duration-200 w-full max-w-sm">
//         {/* Top Row: Icon (left) + Title (right) */}
//         <div className="flex items-center justify-between mb-2">
//           <div
//             className={`p-2 rounded-xl ${
//               isPositive ? "bg-green-100" : "bg-red-100"
//             }`}
//           >
//             <Icon className={textColor} size={20} />
//           </div>
//           <h3 className={`text-sm font-semibold ${textColor}`}>{title}</h3>
//         </div>

//         {/* Horizontal Line */}
//         <div className="border-t border-gray-200 mb-6"></div>

//         {/* Value Centered */}
//         <div className="text-center mb-4">
//           <p className="text-3xl font-bold text-gray-900">{value}</p>
//         </div>

//         {/* Bar Chart Section */}
//         {trend && (
//           <div className="mt-2">
//             {cardType === "energy" ? (
//               // Solid line for Energy Consumption
//               <div className="h-1 bg-blue-500 rounded-full"></div>
//             ) : (
//               // Bar chart
//               <div className="h-6 flex items-end justify-between gap-1">
//                 {trend.map((point, index) => (
//                   <div
//                     key={index}
//                     className={`w-2 rounded-t ${trendColor}`}
//                     style={{ height: `${point}%` }}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     );
//   };

//   const EnhancedChart = ({ data }) => (
//     <div className="w-full min-h-[200px] md:min-h-[300px] bg-gray-50 rounded-sm flex items-center justify-center">
//       <div className="text-center">
//         <BarChart3 className="mx-auto mb-4 text-gray-400" size={48} />
//         <p className="text-gray-600">Interactive Chart Placeholder</p>
//         <p className="text-sm text-gray-500 mt-2">
//           Data points: {data.dataPoints?.length || 0}
//         </p>
//       </div>
//     </div>
//   );

//   const AlertPanel = ({ alerts, setAlerts, dismissAlert }) => {
//     const getAlertIcon = (alertType) => {
//       switch (alertType) {
//         case "High Load Usage":
//           return <Zap className="text-red-600" size={16} />;
//         case "Power Spike":
//           return <Activity className="text-orange-600" size={16} />;
//         case "Maintenance Required":
//           return <AlertCircle className="text-blue-600" size={16} />;
//         case "Low Battery":
//           return <AlertTriangle className="text-yellow-600" size={16} />;
//         default:
//           return <AlertTriangle className="text-gray-600" size={16} />;
//       }
//     };

//     const formatTime = (timestamp) => {
//       const date = new Date(timestamp);
//       return date.toLocaleString("en-US", {
//         month: "short",
//         day: "numeric",
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: true,
//       });
//     };

//     const getAlertTypeColor = (type) => {
//       switch (type) {
//         case "critical":
//           return "bg-red-500";
//         case "warning":
//           return "bg-orange-500";
//         case "info":
//           return "bg-blue-500";
//         default:
//           return "bg-gray-500";
//       }
//     };

//     return (
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow w-full">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
//           <div className="flex items-center space-x-3">
//             <div className="p-2 bg-orange-100 rounded-lg">
//               <AlertTriangle className="text-orange-600" size={24} />
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold text-gray-800">
//                 Smart Alerts
//               </h3>
//               <p className="text-sm text-gray-500">
//                 {alerts.length} active alerts
//               </p>
//             </div>
//           </div>
//           <button
//             onClick={() => setAlerts([])}
//             className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
//           >
//             Clear All
//           </button>
//         </div>

//         <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
//           {alerts.length === 0 ? (
//             <div className="text-center py-8 text-gray-500">
//               <AlertTriangle className="mx-auto mb-3 text-gray-300" size={48} />
//               <p className="text-lg font-medium">No active alerts</p>
//               <p className="text-sm">Your system is running smoothly</p>
//             </div>
//           ) : (
//             alerts.map((alert, index) => (
//               <div
//                 key={alert._id + index}
//                 className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-100"
//               >
//                 <div className="flex items-start space-x-3 flex-1">
//                   <div className="flex-shrink-0 mt-1">
//                     {getAlertIcon(alert.alertType)}
//                   </div>
//                   <div
//                     className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${getAlertTypeColor(
//                       alert.type
//                     )}`}
//                   />
//                   <div className="flex-1 min-w-0">
//                     <div className="flex items-center space-x-2 mb-1">
//                       <div className="text-sm font-semibold text-gray-900">
//                         {alert.alertType}
//                       </div>
//                       {alert.value !== "N/A" && (
//                         <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
//                           {alert.value}
//                         </span>
//                       )}
//                     </div>
//                     <div className="text-sm text-gray-700 mb-2 leading-relaxed">
//                       {alert.message}
//                     </div>
//                     <div className="flex items-center space-x-4 text-xs text-gray-500">
//                       <span>{formatTime(alert.time)}</span>
//                       <span className="flex items-center space-x-1">
//                         <span>Via {alert.mode}</span>
//                       </span>
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs ${
//                           alert.status === "enabled"
//                             ? "bg-green-100 text-green-800"
//                             : "bg-gray-100 text-gray-600"
//                         }`}
//                       >
//                         {alert.status}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => dismissAlert(alert._id)}
//                   className="text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full p-1 transition-colors flex-shrink-0"
//                   title="Dismiss alert"
//                 >
//                   <XCircle size={18} />
//                 </button>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     );
//   };
//   const dismissAlert = (alertId) => {
//     setAlerts(alerts.filter((alert) => alert._id !== alertId));
//   };

//   console.log(data.data.totalRevenue);
//   // Components
//   const ExportButton = () => (
//     <div className="relative inline-block text-left">
//       <button
//         type="button"
//         className="inline-flex items-center px-4 py-2 bg-white/80 rounded-xl border border-emerald-200 hover:bg-white transition-colors focus:outline-none"
//         onClick={() => setIsExportOpen(!isExportOpen)}
//       >
//         <Download className="text-emerald-600 mr-2" size={18} />
//         <span className="text-emerald-700 font-medium">Export</span>
//         <ChevronDown className="ml-2 text-emerald-600" size={16} />
//       </button>

//       {isExportOpen && (
//         <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
//           <div className="py-1">
//             {["PDF", "Word", "CSV"].map((format) => (
//               <button
//                 key={format}
//                 className="w-full text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
//                 onClick={() => handleExportClick(format)}
//               >
//                 Export as {format}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="bg-blue-200/10 min-h-screen">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b border-gray-200 px-4 sm:px-6 py-4">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//           <div>
//             <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
//               Admin Dashboard
//             </h1>
//             <p className="text-xs text-gray-500">
//               <span className="font-bold">Hello {"user"}</span> Welcome to
//               Real-time energy management system
//             </p>
//           </div>
//           <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600">
//             <Clock size={16} />
//             <span>Last updated: {new Date().toLocaleTimeString()}</span>
//             <button
//               onClick={handleRefresh}
//               disabled={refreshing}
//               className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 disabled:opacity-50 transition-colors"
//             >
//               <RefreshCw
//                 className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`}
//               />
//               {refreshing ? "Refreshing..." : "Refresh"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Revenue Summary */}
//       <div className="mx-4 sm:mx-6 mt-6 mb-4 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 gap-6">
//           <div className="flex items-center space-x-6">
//             <div className="p-4 bg-emerald-100 rounded-2xl">
//               <DollarSign className="text-emerald-600" size={32} />
//             </div>
//             <div>
//               <h2 className="text-lg font-semibold text-emerald-800 mb-1">
//                 Total Revenue
//               </h2>
//               <div className="flex items-baseline space-x-2">
//                 {/* <span className="text-3xl font-bold text-emerald-900">$95,000</span> */}
//                 <span className="text-3xl font-bold text-emerald-900">
//                   {data.data.totalRevenue}
//                 </span>
//                 {/* <span className="text-sm text-emerald-600 flex items-center">
//                   <TrendingUp size={14} className="mr-1" /> +12.5%
//                 </span> */}
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-wrap gap-6 justify-between">
//             <div className="text-center">
//               {/* <div className="text-2xl font-bold text-emerald-900">1,247</div> */}
//               <div className="text-2xl font-bold text-emerald-900">
//                 {data.data.totalAssignedUsers}
//               </div>
//               <div className="text-sm text-emerald-600">Active Users</div>
//             </div>
//             <div className="text-center">
//               {/* <div className="text-2xl font-bold text-emerald-900">25/30</div> */}
//               <div className="text-2xl font-bold text-emerald-900">
//                 {data.data.totalActiveMeters}
//               </div>
//               <div className="text-sm text-emerald-600">Active Meters</div>
//             </div>
//             {/* <button className="flex items-center px-4 py-2 bg-white/80 rounded-xl border border-emerald-200 hover:bg-white transition-colors">
//               <Download className="text-emerald-600 mr-2" size={18} />
//               <span className="text-emerald-700 font-medium">Export</span>
//             </button> */}

//             <ExportButton />
//           </div>
//         </div>
//       </div>

//       {/* Grid Content */}
//       <div className="px-4 sm:px-6 pb-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {/* <MetricsCard title="Total Users" value="44,071" change="30.8%" isPositive={true} icon={Users} trend={[20, 40, 60, 80, 100, 85, 90]} /> */}
//           <MetricsCard
//             title="Total Users"
//             value={data.data.totalUsers}
//             change="30.8%"
//             isPositive={true}
//             icon={Users}
//             // trend={[20, 40, 60, 80, 100, 85, 90]}
//           />
//           {/* <MetricsCard title="Faulty Meters" value="8" change="2.3%" isPositive={false} icon={AlertTriangle} trend={[10, 15, 8, 12, 20, 18, 8]} /> */}
//           <MetricsCard
//             title="Faulty Meters"
//             value={data.data.totalFaultyMeters}
//             change="2.3%"
//             isPositive={false}
//             icon={AlertTriangle}
//             // trend={[10, 15, 8, 12, 20, 18, 8]}
//           />

//           {/* <MetricsCard title="Next Payment" value="$2,829" change="-1.43%" isPositive={false} icon={DollarSign} trend={[80, 70, 85, 75, 90, 85, 75]} /> */}
//           <MetricsCard
//             title="Next Payment"
//             value="$2,829"
//             change="-1.43%"
//             isPositive={false}
//             icon={DollarSign}
//             trend={[80, 70, 85, 75, 90, 85, 75]}
//           />
//           {/* <MetricsCard title="Energy Consumption" value="12,300 kWh" change="18.9%" isPositive={true} icon={Zap} trend={[30, 50, 70, 90, 85, 95, 100]} /> */}
//           <MetricsCard
//             title="Energy Consumption"
//             value={data.data.totalConsumption}
//             change="18.9%"
//             isPositive={true}
//             icon={Zap}
//             // trend={[30, 50, 70, 90, 85, 95, 100]}
//           />
//         </div>

//         <div className="mt-6">
//           <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
//               <div className="flex items-center space-x-3">
//                 <div className="p-2 bg-blue-100 rounded-sm">
//                   <BarChart3 className="text-blue-600" size={24} />
//                 </div>
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-800">
//                     Smart Usage Analytics
//                   </h2>
//                   <p className="text-sm text-gray-500">
//                     AI-powered consumption insights
//                   </p>
//                 </div>
//               </div>
//               <div className="flex flex-wrap items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <label className="text-sm font-medium text-gray-700">
//                     From:
//                   </label>
//                   <input
//                     type="date"
//                     value={startDate}
//                     max={today}
//                     onChange={(e) => setStartDate(e.target.value)}
//                     className="px-3 py-2 border border-gray-300 rounded-sm text-sm focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//               </div>
//             </div>
//             <EnhancedChart data={filteredCharts[0] || { dataPoints: [] }} />
//           </div>
//         </div>

//      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* <AlertPanel /> */}
//           <AlertPanel
//             alerts={alerts}
//             setAlerts={setAlerts}
//             dismissAlert={dismissAlert}
//           />
//           <div className="space-y-6">
//             <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-sm border border-green-200 p-6 hover:shadow-md transition-shadow">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="p-3 bg-green-100 rounded-xl">
//                   <Gauge className="text-green-600" size={24} />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                   <span className="text-xs text-green-700 font-medium">
//                     ONLINE
//                   </span>
//                 </div>
//               </div>

//               <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                 Smart Meters
//               </h3>

//               <div className="flex items-baseline space-x-2 mb-3">
//                 <span className="text-2xl font-bold text-green-600">
//                   {totalActive}
//                 </span>
//                 <span className="text-lg text-gray-500">/ {total}</span>
//                 <span className="text-sm text-green-600">({percentage}%)</span>
//               </div>

//               <div className="w-full bg-green-200 rounded-full h-3 mb-2">
//                 <div
//                   className="bg-green-500 h-3 rounded-full transition-all duration-500"
//                   style={{ width: `${percentage}%` }}
//                 ></div>
//               </div>

//               {/* <p className="text-sm text-gray-600">
//                 5 meters scheduled for maintenance
//               </p> */}
//             </div>

//             {/* <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="p-3 bg-blue-100 rounded-xl">
//                   <Activity className="text-blue-600" size={24} />
//                 </div>
//                 <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
//                   EXCELLENT
//                 </div>
//               </div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                 System Health
//               </h3>
//               <div className="text-2xl font-bold text-blue-600 mb-3">98.5%</div>
//               <div className="space-y-2 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Uptime</span>
//                   <span className="font-medium">99.2%</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Response Time</span>
//                   <span className="font-medium">45ms</span>
//                 </div>
//               </div>
//             </div> */}

//             {/* <div
//       onClick={() => onClick(meters[0])}
//       className="cursor-pointer bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
//     >
//       <div className="flex items-center justify-between mb-4">
//         <div className="p-3 bg-blue-100 rounded-xl">
//           <Zap className="text-blue-600" size={24} />
//         </div>
//         <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium capitalize">
//           {meters[0].status}
//         </div>
//       </div>

//       <h3 className="text-lg font-semibold text-gray-800 mb-2">
//         {meters[0].name}
//       </h3>
//       <div className="text-sm text-gray-500 mb-1">Meter ID: {meters[0].meterId}</div>
//       <div className="text-sm text-gray-500 mb-3">Type: {meters[0].type}</div>

//       <div className="space-y-2 text-sm">
//         <div className="flex justify-between">
//           <span className="text-gray-600">Slave ID</span>
//           <span className="font-medium">{meters[0].slaveId}</span>
//         </div>
//         <div className="flex justify-between">
//           <span className="text-gray-600">Serial No</span>
//           <span className="font-medium">{meters[0].meterSerialNumber}</span>
//         </div>
//       </div>
//     </div> */}
// {/* <MeterList meters={meters} /> */}
//    <div className="h-[300px] overflow-y-auto">
//               <MeterList meters={meters} />
//             </div></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState, useMemo, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardData } from "../redux/slice/adminDashboardDataSlice"; // adjust path as needed
import {
  fetchAdminMeters,
  selectFilteredAdminMeters,
} from "../redux/slice/meterSlice";

import {
  Gauge,
  TrendingUp,
  Download,
  AlertTriangle,
  Zap,
  Bell,
  Calendar,
  Activity,
  Users,
  DollarSign,
  BarChart3,
  UserPlus,
  Search,
  Settings,
  Filter,
  RefreshCw,
  ChevronDown,
  Eye,
  TrendingDown,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
import MeterList from "../components/MeterList";

// Mock data for demo purposes
const mockCharts = [
  {
    id: 1,
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    dataPoints: [65, 59, 80, 81, 56, 55],
  },
];

const Dashboard = () => {
  const [startDate, setStartDate] = useState("2025-04-01");
  const [refreshing, setRefreshing] = useState(false);
  const [notifications, setNotifications] = useState(23);
  const dispatch = useDispatch();
  const adminId = "68774978c2cb68989bbf187b"; // Replace with dynamic if needed

  const meters = useSelector(selectFilteredAdminMeters);
  const loading = useSelector((state) => state.meters.adminLoading);
  // const error = useSelector((state) => state.meters.adminError);
  console.log("======", meters);

  useEffect(() => {
    dispatch(fetchAdminMeters(adminId));
  }, [dispatch, adminId]);

  const mockAdminNotifications = [
    {
      _id: "ADM-1",
      alertType: "High Load Usage",
      message:
        "High load detected on Meter ID #MTR456 for User ID #USR789. Please reduce usage to avoid overload.",
      value: "6.2kW",
      mode: "Email",
      time: "2025-01-16T09:15:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-2",
      alertType: "Security Alert",
      message: "Unusual login attempt detected",
      value: "From IP: 192.168.1.100",
      mode: "Text",
      time: "2025-01-15T22:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-3",
      alertType: "Maintenance Required",
      message: "Meter MTR-004 needs firmware update",
      value: "MTR-004",
      mode: "Email",
      time: "2025-01-14T14:45:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-4",
      alertType: "Reverse Polarity",
      message:
        "Reverse current detected for Meter ID #MTR321 (User ID #USR654). Downlink sent to protect the system.",
      value: "Reverse Current",
      mode: "Text",
      time: "2025-01-16T11:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-5",
      alertType: "Magnetic Interference",
      message:
        "We detected possible magnetic interference on Meter ID #MTR888 (User ID #USR333). Please ensure the area is safe.",
      value: "Magnet detected",
      mode: "Email",
      time: "2025-01-16T10:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-6",
      alertType: "Current Imbalance",
      message:
        "Phase current imbalance noticed – please check wiring or load for Meter ID #MTR567.",
      value: "R:Y:B = 5A:12A:7A",
      mode: "Email",
      time: "2025-01-16T09:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-7",
      alertType: "Neutral Voltage Issue",
      message:
        "Voltage fluctuation detected – this may damage appliances (Meter ID #MTR678).",
      value: "Neutral = 18V",
      mode: "Text",
      time: "2025-01-16T08:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-8",
      alertType: "Meter Offline",
      message:
        "Meter #MTR123 (User ID #USR987) is offline or not responding for over 3 hours.",
      value: "Last seen: 05:30 AM",
      mode: "Email",
      time: "2025-01-16T08:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-9",
      alertType: "Garbage Uplink Data",
      message:
        "Meter #MTR456 (User #USR789) sent invalid data (01FFFFF) 3 times. Please verify.",
      value: "3x Invalid packets",
      mode: "Email",
      time: "2025-01-15T19:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-10",
      alertType: "No Usage Detected",
      message:
        "No usage detected today on Meter ID #MTR123 for User ID #USR456. May indicate no one is home or a device issue.",
      value: "0 Units",
      mode: "Text",
      time: "2025-01-15T21:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-11",
      alertType: "High Load vs Previous",
      message:
        "Today's load is 50% higher than any previous day for Meter ID #MTR890 (User ID #USR222).",
      value: "9.5kW today",
      mode: "Email",
      time: "2025-01-15T20:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-12",
      alertType: "Spike in Usage",
      message: "Unusual electricity usage detected today.",
      value: "3× Daily Avg",
      mode: "Text",
      time: "2025-01-15T18:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-13",
      alertType: "Meter Offline",
      message: "Meter #MTR456 is offline or not responding for over 3 hours.",
      value: "Last seen: 02:00 PM",
      mode: "Email",
      time: "2025-01-15T17:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-14",
      alertType: "Reverse Polarity",
      message:
        "Reverse current detected for Meter ID #MTR654 (User ID #USR100).",
      value: "Fault Detected",
      mode: "Text",
      time: "2025-01-15T16:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-15",
      alertType: "Current Imbalance",
      message: "Current imbalance detected on Meter MTR010",
      value: "R:5A G:12A B:7A",
      mode: "Email",
      time: "2025-01-15T15:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-16",
      alertType: "Garbage Uplink Data",
      message: "Meter MTR777 sent corrupt data pattern multiple times",
      value: "01FFFFF",
      mode: "Email",
      time: "2025-01-15T14:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-17",
      alertType: "Magnetic Interference",
      message: "Possible magnetic tampering detected – Meter ID #MTR987",
      value: "Magnet Triggered",
      mode: "Text",
      time: "2025-01-15T13:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-18",
      alertType: "Neutral Voltage Issue",
      message: "Voltage on neutral exceeded 15V threshold.",
      value: "Neutral = 16.5V",
      mode: "Email",
      time: "2025-01-15T12:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-19",
      alertType: "Spike in Usage",
      message: "Daily usage has doubled for Meter ID #MTR007.",
      value: "4 units → 10 units",
      mode: "Email",
      time: "2025-01-15T12:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-20",
      alertType: "Security Alert",
      message: "Multiple failed login attempts detected.",
      value: "5 attempts",
      mode: "Text",
      time: "2025-01-15T11:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-21",
      alertType: "Maintenance Required",
      message: "Low signal strength on Meter ID #MTR006",
      value: "RSSI = -105 dBm",
      mode: "Email",
      time: "2025-01-15T11:00:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-22",
      alertType: "System Alert",
      message: "Memory usage exceeded 80%",
      value: "81% RAM",
      mode: "Email",
      time: "2025-01-15T10:30:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-23",
      alertType: "Garbage Uplink Data",
      message: "Invalid data received multiple times from Meter MTR-300",
      value: "Repeated Code: XXFFF",
      mode: "Email",
      time: "2025-01-15T09:45:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-24",
      alertType: "Meter Offline",
      message: "No response from Meter ID #MTR110 for 5 hours",
      value: "Offline",
      mode: "Text",
      time: "2025-01-15T09:15:00Z",
      status: "enabled",
    },
    {
      _id: "ADM-25",
      alertType: "Reverse Polarity",
      message:
        "Meter #MTR999 has reversed current. Please inspect immediately.",
      value: "Alert: Polarity Mismatch",
      mode: "Email",
      time: "2025-01-15T08:00:00Z",
      status: "enabled",
    },
  ];

  const initialAlerts = mockAdminNotifications.filter((alert) =>
    [
      "Reverse Polarity",
      "High Load Usage",
      "Balance Expired",
      "Magnetic Interference",
    ].includes(alert.alertType)
  );

  const [alerts, setAlerts] = useState(initialAlerts);

  // const [alerts, setAlerts] = useState([
  //   {
  //     id: 1,
  //     type: "critical",
  //     message: "Meter #245 offline",
  //     time: "2 min ago",
  //   },
  //   {
  //     id: 2,
  //     type: "warning",
  //     message: "High usage detected",
  //     time: "5 min ago",
  //   },
  //   {
  //     id: 3,
  //     type: "info",
  //     message: "System update available",
  //     time: "1 hour ago",
  //   },
  // ]);

  const [isExportOpen, setIsExportOpen] = useState(false);
  const handleExportClick = (format) => {
    console.log(`Exporting as ${format}`);
    setIsExportOpen(false);
    // Add your export logic here
  };

  const today = new Date().toISOString().split("T")[0];

  const [adminDashboardData, setAdminDashboardData] = useState(null);

  // const dispatch = useDispatch();

  //  const meters = useSelector(fetchAdminMeters(adminId));
  //    console.log("=========",meters)

  console.log(useSelector((state) => state.adminDashboardData));
  const { data, error } = useSelector((state) => state.adminDashboardData);

  useEffect(() => {
    dispatch(fetchDashboardData("64acbd8fc9e77a6fba123001"));
    if (!loading && data) {
      setAdminDashboardData(data);
    }
  }, [dispatch, adminId]);

  const from = new Date(startDate);
  const to = new Date();
  const filteredCharts = mockCharts.map((chart) => {
    const filteredLabels = [];
    const filteredDataPoints = [];

    chart.labels.forEach((label, i) => {
      const fakeDate = new Date(
        `2025-${(i + 1).toString().padStart(2, "0")}-01`
      );
      if (fakeDate >= from && fakeDate <= to) {
        filteredLabels.push(label);
        filteredDataPoints.push(chart.dataPoints[i]);
      }
    });

    return {
      ...chart,
      labels: filteredLabels,
      dataPoints: filteredDataPoints,
    };
  });

  const handleRefresh = async () => {
    setRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setRefreshing(false);
  };

  const totalActive = data.data.totalActiveMeters;
  const total = data.data.totalMeters;

  // Safeguard against division by zero
  const percentage = total > 0 ? Math.round((totalActive / total) * 100) : 0;

  const dismissAlert = (alertId) => {
    setAlerts(alerts.filter((alert) => alert._id !== alertId));
  };

  console.log(data.data.totalRevenue);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading Dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">
          Error loading dashboard: {error.message || error}
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">No dashboard data found.</p>
      </div>
    );
  }
  

  const MetricsCard = ({
    title,
    value,
    change,
    isPositive,
    icon: Icon,
    trend,
    cardType = "default",
  }) => {
    const trendColor = isPositive ? "bg-green-500" : "bg-red-500";
    const textColor = isPositive ? "text-green-600" : "text-red-600";

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-all duration-200 w-full max-w-sm">
        {/* Top Row: Icon (left) + Title (right) */}
        <div className="flex items-center justify-between mb-2">
          <div
            className={`p-2 rounded-xl ${
              isPositive ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <Icon className={textColor} size={20} />
          </div>
          <h3 className={`text-sm font-semibold ${textColor}`}>{title}</h3>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-gray-200 mb-6"></div>

        {/* Value Centered */}
        <div className="text-center mb-4">
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>

        {/* Bar Chart Section */}
        {trend && (
          <div className="mt-2">
            {cardType === "energy" ? (
              // Solid line for Energy Consumption
              <div className="h-1 bg-blue-500 rounded-full"></div>
            ) : (
              // Bar chart
              <div className="h-6 flex items-end justify-between gap-1">
                {trend.map((point, index) => (
                  <div
                    key={index}
                    className={`w-2 rounded-t ${trendColor}`}
                    style={{ height: `${point}%` }}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const EnhancedChart = ({ data }) => (
    <div className="w-full min-h-[200px] md:min-h-[300px] bg-gray-50 rounded-sm flex items-center justify-center">
      <div className="text-center">
        <BarChart3 className="mx-auto mb-4 text-gray-400" size={48} />
        <p className="text-gray-600">Interactive Chart Placeholder</p>
        <p className="text-sm text-gray-500 mt-2">
          Data points: {data.dataPoints?.length || 0}
        </p>
      </div>
    </div>
  );

  const AlertPanel = ({ alerts, setAlerts, dismissAlert }) => {
    const getAlertIcon = (alertType) => {
      switch (alertType) {
        case "High Load Usage":
          return <Zap className="text-red-600" size={16} />;
        case "Power Spike":
          return <Activity className="text-orange-600" size={16} />;
        case "Maintenance Required":
          return <AlertCircle className="text-blue-600" size={16} />;
        case "Low Battery":
          return <AlertTriangle className="text-yellow-600" size={16} />;
        default:
          return <AlertTriangle className="text-gray-600" size={16} />;
      }
    };

    const formatTime = (timestamp) => {
      const date = new Date(timestamp);
      return date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    };

    const getAlertTypeColor = (type) => {
      switch (type) {
        case "critical":
          return "bg-red-500";
        case "warning":
          return "bg-orange-500";
        case "info":
          return "bg-blue-500";
        default:
          return "bg-gray-500";
      }
    };

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <AlertTriangle className="text-orange-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Smart Alerts
              </h3>
              <p className="text-sm text-gray-500">
                {alerts.length} active alerts
              </p>
            </div>
          </div>
          <button
            onClick={() => setAlerts([])}
            className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
          >
            Clear All
          </button>
        </div>

        <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
          {alerts.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <AlertTriangle className="mx-auto mb-3 text-gray-300" size={48} />
              <p className="text-lg font-medium">No active alerts</p>
              <p className="text-sm">Your system is running smoothly</p>
            </div>
          ) : (
            alerts.map((alert, index) => (
              <div
                key={alert._id + index}
                className="flex items-start justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-100"
              >
                <div className="flex items-start space-x-3 flex-1">
                  <div className="flex-shrink-0 mt-1">
                    {getAlertIcon(alert.alertType)}
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full flex-shrink-0 mt-1 ${getAlertTypeColor(
                      alert.type
                    )}`}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="text-sm font-semibold text-gray-900">
                        {alert.alertType}
                      </div>
                      {alert.value !== "N/A" && (
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                          {alert.value}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-700 mb-2 leading-relaxed">
                      {alert.message}
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>{formatTime(alert.time)}</span>
                      <span className="flex items-center space-x-1">
                        <span>Via {alert.mode}</span>
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          alert.status === "enabled"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {alert.status}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => dismissAlert(alert._id)}
                  className="text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full p-1 transition-colors flex-shrink-0"
                  title="Dismiss alert"
                >
                  <XCircle size={18} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  // Components
  const ExportButton = () => (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 bg-white/80 rounded-xl border border-emerald-200 hover:bg-white transition-colors focus:outline-none"
        onClick={() => setIsExportOpen(!isExportOpen)}
      >
        <Download className="text-emerald-600 mr-2" size={18} />
        <span className="text-emerald-700 font-medium">Export</span>
        <ChevronDown className="ml-2 text-emerald-600" size={16} />
      </button>

      {isExportOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1">
            {["PDF", "Word", "CSV"].map((format) => (
              <button
                key={format}
                className="w-full text-left text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                onClick={() => handleExportClick(format)}
              >
                Export as {format}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-blue-200/10 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="text-xs text-gray-500">
              <span className="font-bold">Hello {"user"}</span> Welcome to
              Real-time energy management system
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600">
            <Clock size={16} />
            <span>Last updated: {new Date().toLocaleTimeString()}</span>
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              <RefreshCw
                className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`}
              />
              {refreshing ? "Refreshing..." : "Refresh"}
            </button>
          </div>
        </div>
      </div>

      {/* Revenue Summary */}
      <div className="mx-4 sm:mx-6 mt-6 mb-4 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 gap-6">
          <div className="flex items-center space-x-6">
            <div className="p-4 bg-emerald-100 rounded-2xl">
              <DollarSign className="text-emerald-600" size={32} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-emerald-800 mb-1">
                Total Revenue
              </h2>
              <div className="flex items-baseline space-x-2">
                {/* <span className="text-3xl font-bold text-emerald-900">$95,000</span> */}
                <span className="text-3xl font-bold text-emerald-900">
                  {data.data.totalRevenue}
                </span>
                {/* <span className="text-sm text-emerald-600 flex items-center">
                  <TrendingUp size={14} className="mr-1" /> +12.5%
                </span> */}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-6 justify-between">
            <div className="text-center">
              {/* <div className="text-2xl font-bold text-emerald-900">1,247</div> */}
              <div className="text-2xl font-bold text-emerald-900">
                {data.data.totalAssignedUsers}
              </div>
              <div className="text-sm text-emerald-600">Active Users</div>
            </div>
            <div className="text-center">
              {/* <div className="text-2xl font-bold text-emerald-900">25/30</div> */}
              <div className="text-2xl font-bold text-emerald-900">
                {data.data.totalActiveMeters}
              </div>
              <div className="text-sm text-emerald-600">Active Meters</div>
            </div>
            {/* <button className="flex items-center px-4 py-2 bg-white/80 rounded-xl border border-emerald-200 hover:bg-white transition-colors">
              <Download className="text-emerald-600 mr-2" size={18} />
              <span className="text-emerald-700 font-medium">Export</span>
            </button> */}

            <ExportButton />
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="px-4 sm:px-6 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* <MetricsCard title="Total Users" value="44,071" change="30.8%" isPositive={true} icon={Users} trend={[20, 40, 60, 80, 100, 85, 90]} /> */}
          <MetricsCard
            title="Total Users"
            value={data.data.totalUsers}
            change="30.8%"
            isPositive={true}
            icon={Users}
            // trend={[20, 40, 60, 80, 100, 85, 90]}
          />
          {/* <MetricsCard title="Faulty Meters" value="8" change="2.3%" isPositive={false} icon={AlertTriangle} trend={[10, 15, 8, 12, 20, 18, 8]} /> */}
          <MetricsCard
            title="Faulty Meters"
            value={data.data.totalFaultyMeters}
            change="2.3%"
            isPositive={false}
            icon={AlertTriangle}
            // trend={[10, 15, 8, 12, 20, 18, 8]}
          />

          {/* <MetricsCard title="Next Payment" value="$2,829" change="-1.43%" isPositive={false} icon={DollarSign} trend={[80, 70, 85, 75, 90, 85, 75]} /> */}
          <MetricsCard
            title="Next Payment"
            value="$2,829"
            change="-1.43%"
            isPositive={false}
            icon={DollarSign}
            trend={[80, 70, 85, 75, 90, 85, 75]}
          />
          {/* <MetricsCard title="Energy Consumption" value="12,300 kWh" change="18.9%" isPositive={true} icon={Zap} trend={[30, 50, 70, 90, 85, 95, 100]} /> */}
          <MetricsCard
            title="Energy Consumption"
            value={data.data.totalConsumption}
            change="18.9%"
            isPositive={true}
            icon={Zap}
            // trend={[30, 50, 70, 90, 85, 95, 100]}
          />
        </div>

        <div className="mt-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-sm">
                  <BarChart3 className="text-blue-600" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Smart Usage Analytics
                  </h2>
                  <p className="text-sm text-gray-500">
                    AI-powered consumption insights
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-gray-700">
                    From:
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    max={today}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-sm text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
            <EnhancedChart data={filteredCharts[0] || { dataPoints: [] }} />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* <AlertPanel /> */}
          <AlertPanel
            alerts={alerts}
            setAlerts={setAlerts}
            dismissAlert={dismissAlert}
          />
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-sm border border-green-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Gauge className="text-green-600" size={24} />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-700 font-medium">
                    ONLINE
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Smart Meters
              </h3>

              <div className="flex items-baseline space-x-2 mb-3">
                <span className="text-2xl font-bold text-green-600">
                  {totalActive}
                </span>
                <span className="text-lg text-gray-500">/ {total}</span>
                <span className="text-sm text-green-600">({percentage}%)</span>
              </div>

              <div className="w-full bg-green-200 rounded-full h-3 mb-2">
                <div
                  className="bg-green-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>

              {/* <p className="text-sm text-gray-600">
                5 meters scheduled for maintenance
              </p> */}
            </div>

            {/* <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Activity className="text-blue-600" size={24} />
                </div>
                <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                  EXCELLENT
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                System Health
              </h3>
              <div className="text-2xl font-bold text-blue-600 mb-3">98.5%</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Uptime</span>
                  <span className="font-medium">99.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-medium">45ms</span>
                </div>
              </div>
            </div> */}

            {/* <div
      onClick={() => onClick(meters[0])}
      className="cursor-pointer bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-blue-100 rounded-xl">
          <Zap className="text-blue-600" size={24} />
        </div>
        <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium capitalize">
          {meters[0].status}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {meters[0].name}
      </h3>
      <div className="text-sm text-gray-500 mb-1">Meter ID: {meters[0].meterId}</div>
      <div className="text-sm text-gray-500 mb-3">Type: {meters[0].type}</div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Slave ID</span>
          <span className="font-medium">{meters[0].slaveId}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Serial No</span>
          <span className="font-medium">{meters[0].meterSerialNumber}</span>
        </div>
      </div>
    </div> */}
            {/* <MeterList meters={meters} /> */}
            <div className="h-[300px] overflow-y-auto">
              <MeterList meters={meters} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
