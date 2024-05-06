import React, { useEffect, useState } from 'react'
import ProductCard from '../../lib/components/product-card/ProductCard'
import axios from 'axios';


const RecommendedProduct = (category: any) => {
  const [recProduct, setRecProduct] = useState<any>([]);

  const fetchRecProductData = async () => {
    try {
      const response = await axios.get(`/api/products?category=${category}`);
      
      setRecProduct(response.data);
    } catch (error) {
      console.error('Error fetching category items:', error);
    }
  };

  
  useEffect(() => {
    fetchRecProductData();
  },[]);

  return (
    <>
    {recProduct?.map((item: any, index: any) => (
        <ProductCard key={index} imageUrl={item.imageUrl} title={item.title} description={item.description} _id={item._id} />
    ))}</>
  )
}

export default RecommendedProduct