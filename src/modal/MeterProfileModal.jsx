// import React, { useEffect, useState, useMemo, useCallback,Fragment, } from "react";
// import { Dialog, Transition } from '@headlessui/react';

// import { User, X, Zap, Wifi, WifiOff, AlertCircle, Link, Unlink } from 'lucide-react';

// const MeterProfileModal = ({ meter, isOpen, onClose }) => {
//   if (!meter) return null;

//   const getStatusIcon = () => {
//     switch (meter.status) {
//       case 'online':
//         return <Wifi className="text-green-500" size={20} />;
//       case 'offline':
//         return <WifiOff className="text-yellow-500" size={20} />;
//       case 'faulty':
//         return <AlertCircle className="text-red-500" size={20} />;
//       default:
//         return <WifiOff className="text-gray-500" size={20} />;
//     }
//   };

//   return (
//     <Transition appear show={isOpen} as={Fragment}>
//       <Dialog as="div" className="relative z-50" onClose={onClose}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0  bg-opacity-25" />
//         </Transition.Child>

//         <div className="fixed inset-0 overflow-y-auto">
//           <div className="flex min-h-full items-center justify-center p-4 text-center">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                 <div className="flex justify-between items-start">
//                   <Dialog.Title
//                     as="h3"
//                     className="text-lg font-medium leading-6 text-gray-900"
//                   >
//                     Meter Details
//                   </Dialog.Title>
//                   <button
//                     type="button"
//                     className="text-gray-400 hover:text-gray-500"
//                     onClick={onClose}
//                   >
//                     <X size={20} />
//                   </button>
//                 </div>

//                 <div className="mt-4 space-y-4">
//                   {/* Meter Basic Info */}
//                   <div className="bg-gray-50 p-4 rounded-lg">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-3">
//                         <Zap className="text-blue-500" size={24} />
//                         <div>
//                           <p className="font-semibold">{meter.name}</p>
//                           <p className="text-sm text-gray-500">{meter.meterId}</p>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         {getStatusIcon()}
//                         <span className="capitalize">{meter.status}</span>
//                       </div>
//                     </div>

//                     <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
//                       <div>
//                         <p className="text-gray-500">Type</p>
//                         <p>{meter.type}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-500">Serial Number</p>
//                         <p>{meter.meterSerialNumber}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-500">Slave ID</p>
//                         <p>{meter.slaveId}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-500">Last Seen</p>
//                         <p>
//                           {meter.lastSeen
//                             ? new Date(meter.lastSeen).toLocaleString()
//                             : 'Never'}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Assignment Info */}
//                   <div className="bg-gray-50 p-4 rounded-lg">
//                     <div className="flex items-center space-x-2 mb-3">
//                       {meter.isAssigned ? (
//                         <Link className="text-green-500" size={20} />
//                       ) : (
//                         <Unlink className="text-gray-400" size={20} />
//                       )}
//                       <h4 className="font-medium">
//                         {meter.isAssigned ? 'Assigned to User' : 'Unassigned Meter'}
//                       </h4>
//                     </div>

//                     {meter.isAssigned && meter.assingnedUserId ? (
//                       <div className="flex items-center space-x-3">
//                         <div className="p-2 bg-blue-100 rounded-full">
//                           <User className="text-blue-500" size={20} />
//                         </div>
//                         <div>
//                           <p className="font-medium">
//                             {meter.assignedUser?.name || 'Loading user...'}
//                           </p>
//                           <p className="text-sm text-gray-500">
//                             User ID: {meter.assingnedUserId}
//                           </p>
//                         </div>
//                       </div>
//                     ) : (
//                       <p className="text-gray-500 text-sm">
//                         This meter is not currently assigned to any user.
//                       </p>
//                     )}
//                   </div>

//                   {/* Actions */}
//                   <div className="flex space-x-3 pt-2">
//                     <button
//                       type="button"
//                       className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                     >
//                       View Consumption
//                     </button>
//                     <button
//                       type="button"
//                       className="px-4 py-2 text-sm bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
//                     >
//                       Edit Meter
//                     </button>
//                   </div>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// };



// export default MeterProfileModal;








// import React, { Fragment } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import {
//   User,
//   X,
//   Zap,
//   Wifi,
//   WifiOff,
//   AlertCircle,
//   Link,
//   Unlink,
// } from "lucide-react";

// const MeterProfileModal = ({ meter, isOpen, onClose }) => {
//   if (!meter) return null;

//   const getStatusIcon = () => {
//     switch (meter.status) {
//       case "online":
//         return <Wifi className="text-green-500" size={20} />;
//       case "offline":
//         return <WifiOff className="text-yellow-500" size={20} />;
//       case "faulty":
//         return <AlertCircle className="text-red-500" size={20} />;
//       default:
//         return <WifiOff className="text-gray-500" size={20} />;
//     }
//   };

//   return (
//     <Transition appear show={isOpen} as={Fragment}>
//       <Dialog as="div" className="relative z-50" onClose={onClose}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           {/* <div className="fixed inset-0 bg-black bg-opacity-25" /> */}
//               <div className="fixed inset-0  bg-opacity-25 backdrop-blur-sm z-40"></div>

//         </Transition.Child>

//         <div className="fixed inset-0 overflow-y-auto">
//           <div className="flex min-h-full items-center justify-center p-4 text-center">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
              
//               <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                 <div className="flex justify-between items-start">
//                   <Dialog.Title
//                     as="h3"
//                     className="text-lg font-semibold text-gray-800"
//                   >
//                     Meter Details
//                   </Dialog.Title>
//                   <button
//                     type="button"
//                     className="text-gray-400 hover:text-gray-500"
//                     onClick={onClose}
//                   >
//                     <X size={20} />
//                   </button>
//                 </div>

                

//                 <div className="mt-4 space-y-4">
//                   {/* Meter Basic Info */}
//                   <div className="bg-gray-50 p-4 rounded-lg">
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-center space-x-3">
//                         <div className="p-1.5 bg-blue-100 rounded-md">
//                           <Zap className="text-blue-600" size={24} />
//                         </div>
//                         <div>
//                           <p className="text-[15px] font-semibold text-gray-800">{meter.name}</p>
//                           <p className="text-sm text-gray-600 font-medium">ID: {meter.meterId}</p>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         {getStatusIcon()}
//                         <span className="capitalize text-sm font-medium text-gray-700">
//                           {meter.status}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
//                       <div>
//                         <p className="text-gray-600 font-medium">Type</p>
//                         <p className="text-gray-800">{meter.type}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-600 font-medium">Serial No</p>
//                         <p className="text-gray-800">{meter.meterSerialNumber}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-600 font-medium">Slave ID</p>
//                         <p className="text-gray-800">{meter.slaveId}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-600 font-medium">Last Seen</p>
//                         <p className="text-gray-800">
//                           {meter.lastSeen
//                             ? new Date(meter.lastSeen).toLocaleString()
//                             : "Never"}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Assignment Info */}
//                   <div className="bg-gray-50 p-4 rounded-lg">
//                     <div className="flex items-center space-x-2 mb-3">
//                       {meter.isAssigned ? (
//                         <Link className="text-green-600" size={20} />
//                       ) : (
//                         <Unlink className="text-gray-400" size={20} />
//                       )}
//                       <h4 className="font-semibold text-gray-800 text-sm">
//                         {meter.isAssigned ? "Assigned to User" : "Unassigned Meter"}
//                       </h4>
//                     </div>

//                     {meter.isAssigned && meter.assingnedUserId ? (
//                       <div className="flex items-center space-x-3">
//                         <div className="p-1.5 bg-blue-100 rounded-md">
//                           <User className="text-blue-600" size={20} />
//                         </div>
//                         <div>
//                           <p className="text-gray-800 font-medium">
//                             {meter.assignedUser?.name || "Loading user..."}
//                           </p>
//                           <p className="text-sm text-gray-600">
//                             User ID: {meter.assingnedUserId}
//                           </p>
//                         </div>
//                       </div>
//                     ) : (
//                       <p className="text-gray-500 text-sm">
//                         This meter is not currently assigned to any user.
//                       </p>
//                     )}
//                   </div>

//                   {/* Actions */}
//                   <div className="flex space-x-3 pt-2">
//                     <button
//                       type="button"
//                       className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//                     >
//                       assigen to User
//                     </button>
//                     <button
//                       type="button"
//                       className="px-4 py-2 text-sm bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition"
//                     >
//                       Edit Meter
//                     </button>
//                   </div>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition>
//   );
// };

// export default MeterProfileModal;






import React from "react";
import {
  User,
  X,
  Zap,
  Wifi,
  WifiOff,
  AlertCircle,
  Link,
  Unlink,
} from "lucide-react";

const MeterProfileModal = ({ meter, isOpen, onClose }) => {
  if (!isOpen || !meter) return null;

  const getStatusIcon = () => {
    switch (meter.status) {
      case "online":
        return <Wifi className="text-green-500" size={20} />;
      case "offline":
        return <WifiOff className="text-yellow-500" size={20} />;
      case "faulty":
        return <AlertCircle className="text-red-500" size={20} />;
      default:
        return <WifiOff className="text-gray-500" size={20} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={onClose}></div>

      <div
        className="relative z-50 w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all scale-100 opacity-100"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-800">Meter Details</h3>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-500"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="mt-4 space-y-4">
          {/* Meter Basic Info */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-1.5 bg-blue-100 rounded-md">
                  <Zap className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-gray-800">
                    {meter.name}
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    ID: {meter.meterId}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusIcon()}
                <span className="capitalize text-sm font-medium text-gray-700">
                  {meter.status}
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-600 font-medium">Type</p>
                <p className="text-gray-800">{meter.type}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Serial No</p>
                <p className="text-gray-800">{meter.meterSerialNumber}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Slave ID</p>
                <p className="text-gray-800">{meter.slaveId}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Last Seen</p>
                <p className="text-gray-800">
                  {meter.lastSeen
                    ? new Date(meter.lastSeen).toLocaleString()
                    : "Never"}
                </p>
              </div>
            </div>
          </div>

          {/* Assignment Info */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-3">
              {meter.isAssigned ? (
                <Link className="text-green-600" size={20} />
              ) : (
                <Unlink className="text-gray-400" size={20} />
              )}
              <h4 className="font-semibold text-gray-800 text-sm">
                {meter.isAssigned ? "Assigned to User" : "Unassigned Meter"}
              </h4>
            </div>

            {meter.isAssigned && meter.assingnedUserId ? (
              <div className="flex items-center space-x-3">
                <div className="p-1.5 bg-blue-100 rounded-md">
                  <User className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">
                    {meter.assignedUser?.name || "Loading user..."}
                  </p>
                  <p className="text-sm text-gray-600">
                    User ID: {meter.assingnedUserId}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">
                This meter is not currently assigned to any user.
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="flex space-x-3 pt-2">
            <button
              type="button"
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              assigen to User
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition"
            >
              Edit Meter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeterProfileModal;
