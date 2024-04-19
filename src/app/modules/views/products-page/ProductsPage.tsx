import React from 'react'
import ProductCard from '../../lib/components/product-card/ProductCard'
import ResponsiveCarousel from '../landing-page/caroselImage/carouselImage';

const ProductsPage = () => {
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
        <div className='pt-24 pb-11'>
           <div className="h-96">
                  <img className="w-full h-full" src="https://i.ibb.co/RPS4CN0/high-angle-farmland-view.jpg" alt="slides" />
            </div>
            <div className='maxWidth mx-auto '>
        {/* <div className="bg-blue-500 text-deep-green py-4 px-8">
            <h1 className="text-3xl font-bold">Welcome to Our Store!</h1>
            <p className="mt-2">Discover our latest products and deals.</p>
        </div> */}



    
      <div className="container mx-auto px-7 mt-10 lg:flex gap-10">
        <div className="">
        <div className="bg-white rounded-lg shadow-lg py-4 px-10 min-h-min hidden md:grid">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul>
                <li className="mb-2">
                <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-blue-500 hover:underline">Category 1</span>
                </label>
                </li>
                <li className="mb-2">
                <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-blue-500 hover:underline">Category 2</span>
                </label>
                </li>
                <li className="mb-2">
                <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-blue-500 hover:underline">Category 3</span>
                </label>
                </li>
                {/* Add more categories as needed */}
            </ul>
        </div>
        </div>


    
        <div className="">
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          <div className="w-full grid lg:grid-cols-4 gap-8">
            {product.map((item, index) => (
              <ProductCard key={index} imageUrl={item.imageUrl} title={item.title} description={item.description} id={item.id} />
            ))}
          </div>
        </div>
      </div>
      </div>
        </div>
      
  )
}

export default ProductsPage