// import React from 'react'

import { Link } from "react-router-dom";

const Document = () => {
  return (
    <div className="w-full min-h-[40vh] bg-[#F1F3F4] flex  justify-center p-5">
      <div className="container w-[70%]  flex flex-col ">
        <div className="uper flex items-center justify-between p-4">
          <p>start document</p>
          <div className="galleryy">
            <select>
              <option>template gallery</option>
            </select>
          </div>
        </div>

        <div className="card flex items-center justify-center flex-col gap-5 ">
          <Link to="/new-document">
            <div className="w-44 h-44 flex items-center justify-center bg-white cursor-pointer">
              <img
                className="h-12"
                src="https://www.gstatic.com/images/branding/productlogos/gsuite_addons/v6/192px.svg"
                alt=""
              />
            </div>
          </Link>
          <p>blank document</p>
        </div>
      </div>
    </div>
  );
};

export default Document;
