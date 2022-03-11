import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";

import {
  createItemAsync,
  selectError,
  // selectStatus,
} from "../../../features/items/itemsSlice";
import { Link } from "react-router-dom";

function AddItem() {
  const dispatch = useDispatch();

  const initialState = {
    name: "",
    brand: "",
    pharmacySKU: "",
    size: "",
    UPC: "",
  };
  const [newItem, setItem] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newItem.name.length > 0 &&
      newItem.brand.length > 0 &&
      newItem.pharmacySKU.length > 0 &&
      newItem.size.length > 0 &&
      newItem.UPC.length > 0
    ) {
      dispatch(createItemAsync(newItem));
      toast.success("Item Created", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      setItem(initialState);
    } else {
      toast.error("Oops! Looks like an Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };

  return (
    <>

        <Link
          to={"/items"}
          className="absolute right-[100px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          List Items
        </Link>
 
      <div className="flex justify-center items-center h-screen w-full">
        <ToastContainer />
        <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
          <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
            Add New Item
          </h1>

          <form onSubmit={handleSubmit} method="post">
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="name"
              >
                Name
              </label>
              <input
                onChange={(e) =>
                  setItem((item) => ({ ...item, name: e.target.value }))
                }
                value={newItem.name}
                className="border py-2 px-3 text-grey-800"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="brand"
              >
                Brand
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                type="text"
                name="brand"
                value={newItem.brand}
                onChange={(e) =>
                  setItem((item) => ({ ...item, brand: e.target.value }))
                }
                id="brand"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="phaSKU"
              >
                Pharmacy SKU
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                type="text"
                value={newItem.pharmacySKU}
                name="phaSKU"
                id="phaSKU"
                onChange={(e) =>
                  setItem((item) => ({ ...item, pharmacySKU: e.target.value }))
                }
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="size"
              >
                Size
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                type="text"
                name="size"
                value={newItem.size}
                id="size"
                onChange={(e) =>
                  setItem((item) => ({ ...item, size: e.target.value }))
                }
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="mb-2 font-bold text-lg text-gray-900"
                htmlFor="upc"
              >
                UPC
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                name="upc"
                id="upc"
                value={newItem.UPC}
                onChange={(e) =>
                  setItem((item) => ({ ...item, UPC: e.target.value }))
                }
              />
            </div>
            <button
              className="block bg-blue-600 hover:bg-blue-900 text-white uppercase text-lg mx-auto p-4 rounded"
              type="submit"
            >
              Create Item
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddItem;
