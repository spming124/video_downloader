function VideoMetadata({ metadata, onDownload }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{metadata.title}</h2>
      <img
        src={metadata.thumbnail}
        alt="Thumbnail"
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-medium mb-2">Chọn chất lượng:</h3>
      <div className="flex flex-wrap gap-2">
        {metadata.formats
          .filter((f) => f.qualityLabel)
          .map((format) => (
            <button
              key={format.qualityLabel}
              onClick={() => onDownload(format.qualityLabel)}
              className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
            >
              {format.qualityLabel}
            </button>
          ))}
      </div>
    </div>
  );
}

export default VideoMetadata;
