import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { uploadfile } from "../../../apiService";

function File() {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    if (selectedFile) {
      data.append("files", selectedFile);
      const res = await uploadfile(data);
      if (res) {
        toast.success("File uploaded", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        });
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
          <div className="mb-3 w-96">
            <label
              htmlFor="formFile"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Upload File
            </label>
            <input
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0s focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              id="formFile"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <button
              className="block mt-2 bg-blue-600 hover:bg-blue-900 text-white uppercase text-sm mx-auto p-2 rounded"
              type="submit"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default File;
