import { useState } from "react";
// import sites from "../assets/data/sites.json"; // Import the sites data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faMagnifyingGlass,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import PlatformSupportedItem from "./PlatformSupportedItem";

function VideoForm({ url, setUrl, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="mb-6">
      <div className="flex flex-col-reverse items-center justify-center">
        <div className="p-1 rounded-full bg-[#2f2f2f] w-full max-w-[800px]">
          <div className="bg-[#e8e8e8] sm:px-4 p-2 px-3 rounded-full w-full flex justify-between items-center gap-1">
            <FontAwesomeIcon
              className="hidden md:block"
              color="black"
              icon={faLink}
            />
            <div className="flex w-full justify-between items-center gap-1">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste video URL here ..."
                className="flex-1 px-2 border-1 border-red rounded-md focus:outline-none bg-transparent text-black w-full"
              />
              {url !== "" && (
                <button
                  type="button"
                  onClick={() => setUrl("")}
                  className="text-black sm:mr-2 "
                >
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full inline-flex items-center gap-2 "
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span className="hidden md:block">Find</span>
              {/* <svg
                className="size-5 animate-spin text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx={12}
                  cy={12}
                  r="10"
                  stroke="white"
                  strokeWidth={4}
                ></circle>
                <path
                  className="opacity-75"
                  fill="white"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg> */}
            </button>
            <button type="button" class="bg-indigo-500" disabled></button>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 pb-4 w-full max-w-[200px] md:max-w-[550px]">
          <PlatformSupportedItem platform="youtube" />
          <PlatformSupportedItem platform="facebook" />
          <PlatformSupportedItem platform="tiktok" />
          <PlatformSupportedItem platform="instagram" />
        </div>
      </div>
    </form>
  );
}

export default VideoForm;
