import { useState } from "react";
// import sites from "../assets/data/sites.json"; // Import the sites data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import PlatformSupportedItem from "./PlatformSupportedItem";

function VideoForm({ url, setUrl, onSubmit }) {
  const [selectedFormat, setSelectedFormat] = useState({});

  const handleSelect = (format) => {
    setSelectedFormat(format);
    setIsOpen(false);
  };

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
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste video URL here ..."
              className="flex-1 p-2 border-none rounded-md focus:outline-none bg-transparent text-black"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full inline-flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span className="hidden md:block">Find</span>
            </button>
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
