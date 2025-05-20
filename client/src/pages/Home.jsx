import { useState } from "react";
import VideoForm from "../components/VideoForm";
import VideoPreview from "../components/VideoPreview";
import VideoMetadata from "../components/VideoMetadata";
import { fetchMetadata } from "../services/api";
import toast, { Toaster } from "react-hot-toast";

function Home() {
  const [url, setUrl] = useState("");
  const [metadata, setMetadata] = useState(null);

  const handleFetchMetadata = async (e) => {
    e.preventDefault();
    setMetadata(null);
    try {
      const data = await fetchMetadata(url);
      setMetadata(data);
    } catch (err) {
      toast.error("Video not found. Please check video URL.");
    }
  };

  const handleDownload = (format) => {
    window.location.href = `http://localhost:5000/api/download?url=${encodeURIComponent(
      url
    )}&quality=${format}`;
  };

  return (
    <div className=" w-full h-screen bg-gray-100">
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-12 sm:py-24 px-4 sm:px-6">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-8">
            <h1 className="sm:text-[3rem] text-3xl font-bold text-center text-gray-800">
              Video<span className="text-[#bd001c]">Downloader</span>
            </h1>
            <p className="mt-3 text-base text-gray-700 sm:mt-6 sm:text-xl lg:text-lg xl:text-xl">
              Free online video downloader for YouTube, Tiktok, Instagram and
              Facebook.
            </p>
          </div>
          <div className="mt-6 sm:mt-7 sm:mx-auto">
            <VideoForm
              url={url}
              setUrl={setUrl}
              onSubmit={handleFetchMetadata}
            />
            {metadata && (
              <>
                <VideoPreview url={url} />
                <VideoMetadata
                  metadata={metadata}
                  onDownload={handleDownload}
                />
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
