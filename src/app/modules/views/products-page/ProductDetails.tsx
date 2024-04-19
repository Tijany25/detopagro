import React from 'react'
import ProductCard from '../../lib/components/product-card/ProductCard';

const ProductDetails = () => {
    const product = [
        { imageUrl: 'https://i.ibb.co/gtFcmKC/gettyimages-1139556569-612x612.jpg', title: 'Product 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.', id: 1},
        { imageUrl: 'https://i.ibb.co/gtFcmKC/gettyimages-1139556569-612x612.jpg', title: 'Product 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.', id: 15 },
        { imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80", title: 'Category 19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.', id: 16 },
        { imageUrl: 'https://i.ibb.co/sQh9wPT/8cbee690-224e-4cf7-8e25-fba85b6e496a.jpg', title: 'Product 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.', id: 17 },
      ];
  return (
        <div className="maxWidth mx-auto px-4 py-8 pt-24 pb-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex justify-center lg:justify-end">
            <img src="https://via.placeholder.com/400x400" alt="Product Image" className="w-full lg:max-w-md rounded-lg shadow-md" />
        </div>
        <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">Product Name</h1>
            <p className="text-lg text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="flex items-center mb-6">
            <span className="text-gray-700 mr-2">Description: </span>
            <span className="text-xl font-semibold text-blue-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
            <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Product Features</h2>
            <ul className="list-disc pl-6">
                <li className="text-gray-700 mb-2">Feature 1</li>
                <li className="text-gray-700 mb-2">Feature 2</li>
                <li className="text-gray-700 mb-2">Feature 3</li>
            </ul>
            </div>
        </div>
        </div>
        <div className=" mt-20">
        <h2 className="text-2xl font-semibold mb-4">Recommended Products</h2>
        <div className="w-full grid lg:grid-cols-4 gap-8">
        {product.map((item, index) => (
            <ProductCard key={index} imageUrl={item.imageUrl} title={item.title} description={item.description} id={item.id} />
        ))}
        </div>
    </div>
    </div>
  )
}

export default ProductDetails