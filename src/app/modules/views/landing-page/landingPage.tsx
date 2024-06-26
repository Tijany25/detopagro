"use client"
import React, { useEffect, useState } from 'react'
import CategoryCard from '../../lib/components/category-card/CategoryCard'
import ProductCard from '../../lib/components/product-card/ProductCard';
import ResponsiveCarousel from './caroselImage/carouselImage';
import YouTubeSection from '../../lib/components/youtubeVideos/YoutubeSection';
import axios from 'axios';
import Image from '../../lib/components/image/Image';

const LandingPage = () => {
  const [categoryItems, setCategoryItems] = useState([]);
  const [productItems, setProductItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [catLoading, setCatLoading] = useState(false);


  const fetchData = async () => {
    setCatLoading(true);
    try {
      const response = await axios.get('/api/category');
      setCategoryItems(response.data);
      setCatLoading(false);
    } catch (error) {
      console.error('Error fetching category items:', error);
      setCatLoading(false);
    }
  };

  const fetchProductData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/products');
      setProductItems(response?.data?.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching category items:', error);
    }
  };

  
  useEffect(() => {
    fetchData();
    fetchProductData();

  }, []);

  return (
    <>
      <div className='mt-20'>
      <ResponsiveCarousel />
      </div>
      <div className="maxWidth w-full px-4 py-2">
        <div className='px-6 lg:px-12'>
        <div className="text-3xl py-2 text-green font-bold mb-4">Product Categories</div>
        {catLoading ? (
           <div className='flex justify-center mt-10'>
           <Image
               className='w-fit lg:w-fit'
               src='loaderImg.gif'
               alt='images'
               type='image'
           />
           </div>
        ) : (
          <div className="w-full mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryItems?.map((item: any, index: any) => (
            <CategoryCard key={index} imageUrl={item.imageUrl} title={item.name} description={item.description} />
          ))}
        </div>
        )}
        </div>

        <div className='py-5 mt-10 px-6 lg:px-12 '>
          <div className="text-3xl py-3 text-green font-bold mb-4">Top Product</div>
          {loading ? (
            <div className='flex justify-center mt-10'>
            <Image
                className='w-fit lg:w-fit'
                src='loaderImg.gif'
                alt='images'
                type='image'
            />
            </div>
          ) : (
            <div className="w-full grid lg:grid-cols-4 gap-8">
            {productItems?.map((item: any, index: any) => (
              <ProductCard key={index} imageUrl={item.imageUrl} title={item.name} description={item.description} _id={item._id} />
            ))}
          </div>
          )}
        </div>
      </div>
      <div className='px-6 lg:px-12'>
        <YouTubeSection />
      </div>
    </>
  )
}

export default LandingPage