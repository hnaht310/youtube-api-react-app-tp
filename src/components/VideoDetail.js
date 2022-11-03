import { useState } from 'react';
import { ImLoop } from 'react-icons/im';
const VideoDetail = ({ selectedVideo }) => {
  const [checked, setChecked] = useState(false);

  if (!selectedVideo) {
    return <div>Loading...</div>;
  }
  const { title, description } = selectedVideo.snippet;
  const { videoId } = selectedVideo.id;

  //   <iframe width="560" height="315" src="https://www.youtube.com/embed/5NVKHu6LzlQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  return (
    <div className='selected-video-container'>
      <div className='embedded-video'>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?playlist=${videoId}&loop=${
            checked ? 1 : 0
          }`}
          title='YouTube video player'
          allowFullScreen
        ></iframe>
      </div>
      <div className='repeat-section'>
        <ImLoop />
        <label htmlFor='checkbox'>Loop:</label>
        <input
          type='checkbox'
          name='checkbox'
          id='checkbox'
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </div>
      <div className='video-info'>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
