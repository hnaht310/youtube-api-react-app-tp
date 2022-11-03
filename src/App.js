import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import youtube from './apis/youtube'; // import the custom axios instance
import VideoDetail from './components/VideoDetail';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const onFormSubmit = async (term) => {
    try {
      const response = await youtube.get('/search', {
        params: {
          q: term,
        },
      });
      console.log(response.data.items);
      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // show results for 'hello' on first render
  useEffect(() => {
    onFormSubmit('hello');
  }, []);

  const onVideoSelect = (id) => {
    const clickedVideo = videos.find((item) => item.id.videoId === id);
    setSelectedVideo(clickedVideo);
  };

  return (
    <div className='App'>
      <SearchBar onFormSubmit={onFormSubmit} />
      <div className='grid'>
        <VideoDetail selectedVideo={selectedVideo} />
        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
      </div>
    </div>
  );
}

export default App;
