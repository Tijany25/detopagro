import React from 'react'
import CategoryCard from '../../lib/components/category-card/CategoryCard'
import ProductCard from '../../lib/components/product-card/ProductCard';
import ResponsiveCarousel from './caroselImage/carouselImage';
import YouTubeSection from '../../lib/components/youtubeVideos/YoutubeSection';

const LandingPage = () => {
  const items = [
    { imageUrl: 'https://i.ibb.co/gtFcmKC/gettyimages-1139556569-612x612.jpg', title: 'Category 1', description: 'Description 1' },
    { imageUrl: 'https://i.ibb.co/gtFcmKC/gettyimages-1139556569-612x612.jpg', title: 'Category 11', description: 'Description 1' },
    { imageUrl: 'https://i.ibb.co/gtFcmKC/gettyimages-1139556569-612x612.jpg', title: 'Category 12', description: 'Description 1' },
    { imageUrl: 'https://i.ibb.co/gtFcmKC/gettyimages-1139556569-612x612.jpg', title: 'Category 3', description: 'Description 1' },
    { imageUrl: 'https://i.ibb.co/gtFcmKC/gettyimages-1139556569-612x612.jpg', title: 'Category 14', description: 'Description 1' },
    { imageUrl: 'https://i.ibb.co/gtFcmKC/gettyimages-1139556569-612x612.jpg', title: 'Category 15', description: 'Description 1' },
    { imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80", title: 'Category 19', description: 'Description 1' },
    { imageUrl: 'https://i.ibb.co/sQh9wPT/8cbee690-224e-4cf7-8e25-fba85b6e496a.jpg', title: 'Category 1', description: 'Description 1' },
  ];

  const product = [
    { imageUrl: 'https://i.ibb.co/gtFcmKC/gettyimages-1139556569-612x612.jpg', title: 'Product 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.', id: 1},
    { imageUrl: 'https://i.ibb.co/gtFcmKC/gettyimages-1139556569-612x612.jpg', title: 'Product 11', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.', id: 11 },
    { imageUrl: 'https://i.ibb.co/gtFcmKC/gettyimages-1139556569-612x612.jpg', title: 'Product 12', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.', id: 12 },
    { imageUrl: 'https://i.ibb.co/gtFcmKC/gettyimages-1139556569-612x612.jpg', title: 'Product 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.', id: 13 },
    { imageUrl: 'https://i.ibb.co/gtFcmKC/gettyimages-1139556569-612x612.jpg', title: 'Product 14', description: 'Description 1' },
    { imageUrl: 'https://i.ibb.co/gtFcmKC/gettyimages-1139556569-612x612.jpg', title: 'Product 15', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.', id: 14 },
    { imageUrl: 'https://i.ibb.co/gtFcmKC/gettyimages-1139556569-612x612.jpg', title: 'Product 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.', id: 15 },
    { imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80", title: 'Category 19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.', id: 16 },
    { imageUrl: 'https://i.ibb.co/sQh9wPT/8cbee690-224e-4cf7-8e25-fba85b6e496a.jpg', title: 'Product 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.', id: 17 },
  ];
  return (
    <>
      <div className='mt-20'>
      <ResponsiveCarousel />
      </div>
      <div className="maxWidth w-full px-4 py-2">
        <div className='px-6 lg:px-12'>
        <div className="text-2xl text-deep-green font-bold mb-4">Product Categories</div>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <CategoryCard key={index} imageUrl={item.imageUrl} title={item.title} description={item.description} />
          ))}
        </div>
        </div>

        <div className='py-5 mt-10 px-6 lg:px-12 '>
          <div className="text-2xl text-deep-green font-bold mb-4">Top Product</div>
          <div className="w-full grid lg:grid-cols-4 gap-8">
            {product.map((item, index) => (
              <ProductCard key={index} imageUrl={item.imageUrl} title={item.title} description={item.description} id={item.id} />
            ))}
          </div>
        </div>
      </div>
      <div className='px-6 lg:px-12'>
        <YouTubeSection />
      </div>
    </>
  )
}

export default LandingPage