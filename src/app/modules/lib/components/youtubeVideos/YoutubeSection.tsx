import React from 'react'

// components/YouTubeSection.js

import YouTubeVideo from './YoutubeVideo';

const YouTubeSection = () => {
    const videoLinks = [
        'https://www.youtube.com/watch?v=3h0cH2k5kOg',
        'https://www.youtube.com/watch?v=videoId2',
        'https://www.youtube.com/watch?v=videoId3',
        'https://www.youtube.com/watch?v=videoId4'
      ]; 
  return (
    <div className="py-12 w-full">
      <div className="w-full">
        <h2 className="text-3xl text-deep-green font-bold mb-8">Products Spotlight</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoLinks.map((videoLink) => (
            <YouTubeVideo key={videoLink} videoLink={videoLink} />
          ))}
        </div>
        <div className="text-xl text-center cursor-pointer text-deep-green font-bold">
        <button className="border border-deep-green hover:bg-green hover:text-white text-deep-green font-bold py-2 px-2 md:px-6 rounded">
        View more
        </button>
        </div>
      </div>
    </div>
  );
};

export default YouTubeSection;
