import Player from "react-player";

function VideoPreview({ url }) {
  return (
    <div className="mb-4">
      <Player url={url} width="100%" height="200px" controls />
    </div>
  );
}

export default VideoPreview;
