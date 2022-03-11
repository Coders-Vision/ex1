import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllItemsCountAsync,
  getDeliveredAsync,
  getCancelledAsync,
  selectItems,
  selectDeliveredItems,
  selectCancelledItem,
} from "../../features/dashboard/dasboardSlice";

function Dasboard() {
  const getTotalItems = useSelector(selectItems);
  const getDeliveredOrders = useSelector(getDeliveredAsync());
  const getCancelledItems = useSelector(getCancelledAsync());
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getAllItemsCountAsync());
    dispatch(getDeliveredAsync());
    // dispatch(getCancelledAsync());
  }, [dispatch]);
  return (
    <div>
      <h1 className="font-bold pl-2">Dashboard</h1>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-green-600">
                  <i className="fa fa-wallet fa-2x fa-inverse" />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h2 className="font-bold uppercase text-gray-600">
                  Total Orders
                </h2>
                <p className="font-bold text-3xl">
                  0
                  <span className="text-green-500">
                    <i className="fas fa-caret-up" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-pink-600">
                  <i className="fas fa-users fa-2x fa-inverse" />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h2 className="font-bold uppercase text-gray-600">
                  Total Items
                </h2>
                <p className="font-bold text-3xl">
                0
                  <span className="text-pink-500">
                    <i className="fas fa-exchange-alt" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-yellow-600">
                  <i className="fas fa-user-plus fa-2x fa-inverse" />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h2 className="font-bold uppercase text-gray-600">
                  Cancelled Orders
                </h2>
                <p className="font-bold text-3xl">
               0
                  <span className="text-yellow-600">
                    <i className="fas fa-caret-up" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-blue-600">
                  <i className="fas fa-server fa-2x fa-inverse" />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h2 className="font-bold uppercase text-gray-600">
                  Delivered Orders
                </h2>
                <p className="font-bold text-3xl">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dasboard;
