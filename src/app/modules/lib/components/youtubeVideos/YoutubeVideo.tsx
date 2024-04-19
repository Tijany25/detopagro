import React from 'react'

// components/YouTubeVideo.js
interface YouTubeVideoProps {
    videoLink: string;
  }

const YouTubeVideo: React.FC<YouTubeVideoProps>  = ({ videoLink }) => {
    // Extract video ID from the YouTube link
    const videoId = videoLink.split('v=')[1];
  
    return (
      <div className="flex w-full justify-center items-center mb-8">
        <iframe
          className="youtubeVideo"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  export default YouTubeVideo;
  