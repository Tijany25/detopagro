'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '../../lib/components/product-card/ProductCard'
import axios from 'axios';
import Pagination from '../../lib/components/pagination/Pagination';
import { useParams, useRouter } from 'next/navigation';
import { IoIosArrowForward } from 'react-icons/io';
import Image from '../../lib/components/image/Image';


const ProductsPage = () => {
  const [categoryItems, setCategoryItems] = useState([]);
  const [productItems, setProductItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>('');
  const [searchTerm, setSearchTerm] = useState('');
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1)
	const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('')
  
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

  useEffect(() => {
   if(searchTerm.length >= 3){
    setSearch(searchTerm);
   }else{
    setSearch('');
   }

  }, [searchTerm]);


  const fetchProductData = async () => {
		let url = `/api/products?q=${search}&category=${catName || selectedCategory}&limit=${limit}&page=${page}`;
		try {
		  const response = await axios.get(url);
		  setProductItems(response?.data?.products);
		  setTotalProducts(response?.data?.totalProducts);
      setLoading(false);
		} catch (error) {
		  console.error('Error fetching products items:', error);
		}
	  };

  
  useEffect(() => {
    fetchData();

  }, [selectedCategory]);
  useEffect(() => {
    setLoading(true)
    fetchProductData();

  }, [selectedCategory, page, search]);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
    const toggleSelectedCategory = (category: any) => {
      setSelectedCategory(selectedCategory === category ? '' : category);
  };
  return (
        <div className='pt-24 pb-11'>
           <div className="h-96">
              <img className="w-full h-full" src="https://res.cloudinary.com/duneijg7k/image/upload/v1719695273/high-angle-farmland-view_tgn2og.jpg" alt="slides" />
            </div>
            <div className='maxWidth mx-auto '>
    
      <div className="container mx-auto px-2 mt-5 lg:flex gap-10">
        <div className="w-80 mt-24">
        <div className="bg-white rounded-lg shadow-lg min-h-min hidden md:grid">
            <h2 className="text-xl py-2 px-5 bg-green text-white font-semibold mb-4">Categories</h2>
            <ul>
            {categoryItems.map((item: any, index) => (
              <li key={item} className="mb-2 px-5">
              <label className="flex text-deep-green items-center justify-between">
                  <div className="flex items-center cursor-pointer">
                      <input
                          type="checkbox"
                          className="mr-2"
                          checked={selectedCategory === item.name}
                          onChange={() => toggleSelectedCategory(item.name || null)}
                      />
                      <span className="text-blue-500 hover:underline">{item?.name}</span>
                  </div>
                  <div className='ml-auto cursor-pointer'><IoIosArrowForward /></div>
              </label>
          </li>
            ))}
            </ul>
        </div>
        </div>


    
        <div className="">
          <div className='lg:flex items-center justify-between'>
          <h2 className="text-3xl text-deep-green font-semibold lg:mb-2">Products</h2>
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
            <div className="w-full mt-4 grid lg:grid-cols-4 gap-6">
              {productItems.map((item: any, index) => (
                <ProductCard key={index} imageUrl={item.imageUrl} title={item.name} description={item.description} _id={item._id} />
              ))}
            </div>
          )}
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