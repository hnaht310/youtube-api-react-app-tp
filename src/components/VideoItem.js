const VideoItem = ({ snippet, id: { videoId }, onVideoSelect }) => {
  const {
    thumbnails: { medium },
    title,
  } = snippet;

  return (
    <div className='video-item' onClick={() => onVideoSelect(videoId)}>
      <img src={medium.url} />
      <h5 className='title'>{title}</h5>
    </div>
  );
};

export default VideoItem;
