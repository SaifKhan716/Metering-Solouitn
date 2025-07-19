// // import { Activity, Zap } from "lucide-react";
// // import React, { useEffect, useState, useMemo, useCallback } from "react";
// // const MeterCard = ({ meter, onClick }) => {
// //   return (
// //     <div
// //       onClick={() => onClick(meter)}
// //       className="cursor-pointer bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
// //     >
// //       <div className="flex items-center justify-between mb-4">
// //         <div className="p-3 bg-blue-100 rounded-xl">
// //           <Zap className="text-blue-600" size={24} />
// //         </div>
// //         <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium capitalize">
// //           {meter.status}
// //         </div>
// //       </div>

// //       <h3 className="text-lg font-semibold text-gray-800 mb-2">
// //         {meter.name}
// //       </h3>
// //       <div className="text-sm text-gray-500 mb-1">Meter ID: {meter.meterId}</div>
// //       <div className="text-sm text-gray-500 mb-3">Type: {meter.type}</div>

// //       <div className="space-y-2 text-sm">
// //         <div className="flex justify-between">
// //           <span className="text-gray-600">Slave ID</span>
// //           <span className="font-medium">{meter.slaveId}</span>
// //         </div>
// //         <div className="flex justify-between">
// //           <span className="text-gray-600">Serial No</span>
// //           <span className="font-medium">{meter.meterSerialNumber}</span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MeterCard;











// import { Zap } from "lucide-react";
// import React, { useEffect, useState, useMemo, useCallback } from "react";
// const MeterCard = ({ meter, onClick }) => {
//   return (
//     <div
//       onClick={() => onClick(meter)}
//       className="cursor-pointer bg-white rounded-xl shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
//     >
//       <div className="flex items-center justify-between mb-2">
//         <div className="p-2 bg-blue-100 rounded-lg">
//           <Zap className="text-blue-600" size={18} />
//         </div>
//         <div className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium capitalize">
//           {meter.status}
//         </div>
//       </div>

//       <h3 className="text-sm font-semibold text-gray-800 mb-1 truncate">
//         {meter.name}
//       </h3>
//       <div className="text-xs text-gray-500 truncate">
//         ID: {meter.meterId}
//       </div>
//       <div className="text-xs text-gray-500 mb-2 truncate">
//         Type: {meter.type}
//       </div>

//       <div className="space-y-1 text-xs">
//         <div className="flex justify-between">
//           <span className="text-gray-600">Slave ID</span>
//           <span className="font-medium">{meter.slaveId}</span>
//         </div>
//         <div className="flex justify-between">
//           <span className="text-gray-600">Serial No</span>
//           <span className="font-medium">{meter.meterSerialNumber}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MeterCard;









import React, { useEffect, useState, useMemo, useCallback } from "react";

import { Zap } from "lucide-react";

const MeterCard = ({ meter, onClick }) => {
  return (
    <div
      onClick={() => onClick(meter)}
      className="cursor-pointer bg-white rounded-lg shadow-sm border border-gray-200 p-3 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between mb-1">
        <div className="p-1.5 bg-blue-100 rounded-md">
          <Zap className="text-blue-600" size={24} />
        </div>
        <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
          {meter.status}
        </div>
      </div>

      {/* <h3 className="text-[13px] font-semibold text-gray-800 truncate"> */}
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {meter.name}
      </h3>
      <div className="text-gray-600 space-y-2 text-sm truncate font-medium">
        ID: {meter.meterId}
      </div>
      <div className="text-gray-600 space-y-2 text-sm font-medium truncate">
        Type: {meter.type}
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Slave ID</span>
          <span className="font-medium">{meter.slaveId}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Serial No</span>
          <span className="font-medium">{meter.meterSerialNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default MeterCard;
