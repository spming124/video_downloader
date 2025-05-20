import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function PlatformSupportedItem({ platform }) {
  return (
    <>
      {platform === "youtube" && (
        <div className="text-red-500 rounded-full flex items-center justify-center">
          <FontAwesomeIcon
            icon={faYoutube}
            className="text-inherit text-[23px] sm:text-4xl"
          />
        </div>
      )}
      {platform === "facebook" && (
        <div className="text-blue-500 rounded-full flex items-center justify-center">
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-inherit text-xl sm:text-3xl"
          />
        </div>
      )}
      {platform === "tiktok" && (
        <div className="text-black rounded-full flex items-center justify-center">
          <FontAwesomeIcon
            icon={faTiktok}
            className="text-inherit text-xl sm:text-3xl"
          />
        </div>
      )}
      {platform === "instagram" && (
        <div className="text-[#fb295d] rounded-full flex items-center justify-center">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-inherit text-xl sm:text-[33px]"
          />
        </div>
      )}
    </>
  );
}
