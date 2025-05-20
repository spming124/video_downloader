import axios from "axios";

export const fetchMetadata = async (url) => {
  const response = await axios.get(
    `http://localhost:5000/api/metadata?url=${encodeURIComponent(url)}`
  );
  return response.data;
};
