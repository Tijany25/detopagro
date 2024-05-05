import React, { useEffect, useState } from 'react'


import YouTubeVideo from './YoutubeVideo';
import axios from 'axios';


const YouTubeSection = () => {
  const [ytItem ,setYtItem] = useState([]);

  const fetchLink = async () => {

    try {
      const response = await axios.get('/api/ytlinks');
      setYtItem(response.data);
    } catch (error) {
      console.error('Error fetching products items:', error);
    }
    };
    useEffect(() => {
      fetchLink();
    }, [])
  return (
    <div className="py-12 w-full">
      <div className="w-full">
        <h2 className="text-3xl text-deep-green font-bold mb-8">Products Spotlight</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ytItem.map(({name, imageUrl}) => (
            <YouTubeVideo key={name} videoLink={imageUrl} />
          ))}
        </div>
        <div className="text-xl text-center cursor-pointer text-green font-bold">
        <button className="border cursor-pointer bg-green text-white border-deep-green hover:bg-white hover:text-green font-bold py-2 px-2 md:px-6 rounded">
        View more
        </button>
        </div>
      </div>
    </div>
  );
};

export default YouTubeSection;
