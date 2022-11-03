import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video, index) => {
    return <VideoItem key={index} {...video} onVideoSelect={onVideoSelect} />;
  });
  return <div className='list-container'>{renderedList}</div>;
};

export default VideoList;
