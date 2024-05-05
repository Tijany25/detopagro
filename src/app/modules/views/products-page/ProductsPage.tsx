'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '../../lib/components/product-card/ProductCard'
import axios from 'axios';
import Pagination from '../../lib/components/pagination/Pagination';
import { useParams, useRouter } from 'next/navigation';


const ProductsPage = () => {
  const [categoryItems, setCategoryItems] = useState([]);
  const [productItems, setProductItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>('');
  const [searchTerm, setSearchTerm] = useState('');
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1)
	const [totalProducts, setTotalProducts] = useState(0);
  
  // const catName = localStorage.getItem('cat');
  let catName: any;
  if (global?.window !== undefined) {
    catName = localStorage.getItem('cat');
  }

  useEffect(() => {
    if(catName) {
      setSelectedCategory(catName);
      if (global?.window !== undefined) {
        localStorage.setItem('cat', '');
      }
      
    }
  }, [])
  

  

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/category');
      setCategoryItems(response.data);
    } catch (error) {
      console.error('Error fetching category items:', error);
    }
  };


  const fetchProductData = async () => {
		let url = `/api/products?q=${searchTerm}&category=${catName || selectedCategory}&limit=${limit}&page=${page}`; // Default URL
		try {
		  const response = await axios.get(url);
		  setProductItems(response?.data?.products);
		  setTotalProducts(response?.data?.totalProducts);
		} catch (error) {
		  console.error('Error fetching products items:', error);
		}
	  };

  
  useEffect(() => {
    fetchData();

  }, [selectedCategory]);
  useEffect(() => {
    fetchProductData();

  }, [selectedCategory, page]);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    };
  return (
        <div className='pt-24 pb-11'>
           <div className="h-96">
                  <img className="w-full h-full" src="https://i.ibb.co/RPS4CN0/high-angle-farmland-view.jpg" alt="slides" />
            </div>
            <div className='maxWidth mx-auto '>
    
      <div className="container mx-auto px-7 mt-10 lg:flex gap-10">
        <div className="w-60">
        <div className="bg-white rounded-lg shadow-lg py-4 px-5 min-h-min hidden md:grid">
            <h2 className="text-xl text-deep-green font-semibold mb-4">Categories</h2>
            <ul>
            {categoryItems.map((item: any, index) => (
              <li key={item} className="mb-2">
              <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 cursor-pointer"
                    checked={selectedCategory === item.name}
                    onChange={() => setSelectedCategory(item.name || null)} 
                    />
                  <span className="text-blue-500 hover:underline">{item?.name}</span>
              </label>
              </li>
            ))}
            </ul>
        </div>
        </div>


    
        <div className="">
          <div className='lg:flex justify-between'>
          <h2 className="text-3xl text-deep-green font-semibold lg:mb-4">Products</h2>
          <div className="p-2 lg:p-4">
            <label htmlFor="table-search" className="sr-only">Search</label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"></path>
                </svg>
              </div>
              <input value={searchTerm} onChange={(e) =>handleSearchChange(e)} type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-deep-green text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for product" />
              </div>
          </div>

          </div>
          <div className="w-full mt-10 grid lg:grid-cols-4 gap-8">
            {productItems.map((item: any, index) => (
              <ProductCard key={index} imageUrl={item.imageUrl} title={item.name} description={item.description} _id={item._id} />
            ))}
          </div>
          <div className='p-8'>
            <Pagination totalProducts={totalProducts} limit={limit} page={page} setPage={setPage} />
          </div>
        </div>
      </div>
      </div>
        </div>
      
  )
}

export default ProductsPage