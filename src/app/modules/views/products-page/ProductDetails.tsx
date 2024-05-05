'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '../../lib/components/product-card/ProductCard';
import axios from 'axios';
import { useParams } from 'next/navigation';
import RecommendedProduct from './RecommendedProduct';


const ProductDetails = () => {
    const product = [
        { imageUrl: 'https://i.ibb.co/gtFcmKC/gettyimages-1139556569-612x612.jpg', title: 'Product 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.', _id: 1},
        { imageUrl: 'https://i.ibb.co/gtFcmKC/gettyimages-1139556569-612x612.jpg', title: 'Product 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.', _id: 15 },
        { imageUrl: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80", title: 'Category 19', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.', id: 16 },
        { imageUrl: 'https://i.ibb.co/sQh9wPT/8cbee690-224e-4cf7-8e25-fba85b6e496a.jpg', title: 'Product 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae antevel eros fermentum faucibus sit amet euismod lorem.', _id: 17 },
      ];
  const [productItems, setProductItems] = useState<any>([]);
  const [recProduct, setRecProduct] = useState<any>([]);

  const params = useParams<any>()
  const { id } = params;
  
  

  

  const fetchProductData = async () => {
    try {
      const response = await axios.get(`/api/products?id=${id}`);
      setProductItems(response.data.products[0]);
    } catch (error) {
      console.error('Error fetching category items:', error);
    }
  };

  
  useEffect(() => {
    fetchProductData();

  }, []);

  //https://via.placeholder.com/400x400
  const { name, description, imageUrl, features, estimatedDeliveryDate, category } = productItems || {};
  const dataString = features;
const dataArray = dataString?.split(", ");

  
  return (
        <div className="maxWidth mx-auto px-4 py-8 pt-24 pb-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <div className="flex justify-center lg:justify-end">
            <img src={imageUrl} alt="Product Image" className="w-full lg:max-w-md rounded-lg shadow-md" />
        </div>
        <div>
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">{name}</h1>
            <p className="text-lg text-gray-600 mb-6">{description}</p>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Estimated Delivery Date</h2>
            <p className="text-lg text-gray-600">{estimatedDeliveryDate}</p>
            <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Product Features</h2>
            <ul className="list-disc pl-6">
                {dataArray?.map((item: any) => (
                    <li className="text-gray-700 mb-2">{item}</li>
                ))}
            </ul>
            </div>
        </div>
        </div>
        {/* <div className=" mt-20">
        <h2 className="text-3xl text-deep-green font-semibold mb-4">Recommended Products</h2>
        <div className="w-full grid lg:grid-cols-4 gap-8">
        {category ? <RecommendedProduct category={category} /> : ''}
        </div>
    </div> */}
    </div>
  )
}

export default ProductDetails