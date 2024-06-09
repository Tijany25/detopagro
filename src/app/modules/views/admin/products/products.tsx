"use client"
import React, { useEffect, useState } from 'react'
import ProductModal from './addProductModal'
import axios from 'axios';
import CryptoJS from 'crypto-js';
import EditProductModal from './editProductModal';
import toast from 'react-hot-toast';
import moment from 'moment';
import Pagination from '@/app/modules/lib/components/pagination/Pagination';
import CreateSuperAdmin from '@/app/modules/lib/components/register/register';
import Image from '@/app/modules/lib/components/image/Image';


const AdminProducts = () => {
	const [open, setOpen] = useState(false);
	const [categoryItems, setCategoryItems] = useState([]);
	const [productItems, setProductItems] = useState([]);
	const [editData, setEditData] = useState<any>('');
	const [openEdit, setOpenEdit] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1)
	const [totalProducts, setTotalProducts] = useState(0);
	const [loading, setLoading] = useState(false);


	const fetchProduct = async () => {
		let url = `/api/products?q=${searchTerm}&limit=${limit}&page=${page}`;
		try {
		  const response = await axios.get(url);
		  setProductItems(response?.data?.products);
		  setTotalProducts(response?.data?.totalProducts);
		 setLoading(false);
		} catch (error) {
		  console.error('Error fetching products items:', error);
		 setLoading(false);
		}
	  };
	useEffect(() => {
		setLoading(true);
		fetchProduct();
	}, [searchTerm, page]);
	  useEffect(() => {
		const fetchData = async () => {
		  try {
			const response = await axios.get('/api/category');
			setCategoryItems(response.data);
		  } catch (error) {
			console.error('Error fetching category items:', error);
		  }
		};
	
		fetchData();
	  }, []);
  

  const handleOpenModal = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenEditModal = () => {
    setOpen(!open);
  };

  const handleCloseEditModal = () => {
    setOpenEdit(false);
	setEditData('');
  };
  const handleEdit = (id: any) => {
	const data = productItems?.filter((item: any) => item._id === id);
	setEditData(data);
	setOpenEdit(!openEdit);
  }

  const deleteImageFromCloudinary = async (publicId: string) => {
	try {
	  const timestamp = Math.round(new Date().getTime() / 1000);
	  const stringToSign = `public_id=${publicId}&timestamp=${timestamp}${process.env.API_SECRET}`; // Replace YOUR_API_SECRET with your Cloudinary API secret
	  const signature = CryptoJS.SHA1(stringToSign).toString();
  
	  const response = await axios.post(
		`https://api.cloudinary.com/v1_1/duneijg7k/image/destroy`,
		{
		  public_id: publicId,
		  signature: signature,
		  api_key: `${process.env.API_KEY}`,
		  timestamp: timestamp
		}
	  );
  
	  return response.data;
	} catch (error) {
	  console.error('Error deleting image:', error);
	  toast.error('Error deleting image');
	  return null;
	}
  };
  

  const handleDelete = async (id: any, imagePublicId: any) => {
	if (imagePublicId) {
		const deleteImageResponse = await deleteImageFromCloudinary(imagePublicId);
		if (deleteImageResponse.result !== 'ok') {
		  toast.error('Error deleting image from Cloudinary');
		  return;
		}
	  }
  
    try {
      const response = await axios.delete(`/api/products?id=${id}`);
      if (response.status === 200) {
		toast.success('Product deleted successfully');
		fetchProduct();
      } else {
		toast.error('Error deleting Product');
      }
    } catch (error) {
		toast.error('Error deleting Product');
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	setSearchTerm(event.target.value);
  };
  return (
    <>
    <div className="mt-24">
      <div className="w-full mx-auto ">
      <ProductModal modalOpen={open} handleCloseModal={handleClose} data="" category={categoryItems} refetch={fetchProduct}/>
	  <EditProductModal modalOpen={openEdit} handleCloseModal={handleCloseEditModal} data={editData} category={categoryItems} refetch={fetchProduct}/>

	  <div className='flex justify-between items-center mt-8 mb-6'>
	  <h2 className="text-2xl font-semibold  text-deep-green">Products</h2>
	  <button onClick={() => handleOpenModal()} className="border bg-green border-deep-green hover:bg-white hover:text-deep-green text-white font-bold py-2 px-4 rounded">
		 Add Product
	  </button>
	  </div>
	  {/* <CreateSuperAdmin /> */}

	<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
		<div className="p-4">
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
				<input value={searchTerm} onChange={(e) =>handleSearchChange(e)} type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-deep-green text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
        </div>
			</div>
			{loading ? (
					<div className='flex w-full justify-center mt-10'>
					<Image
						className='w-fit lg:w-fit'
						src='loaderImg.gif'
						alt='images'
						type='image'
					/>
					</div>
				) : (
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="p-4">
							<div className="flex items-center">
								<input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
								<label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
							</div>
						</th>
						<th scope="col" className="px-6 py-3">
							Product name
						</th>
						<th scope="col" className="px-6 py-3">
							Date created
						</th>
						<th scope="col" className="px-6 py-3">
							Category
						</th>
						<th scope="col" className="px-6 py-3">
							Location
						</th>
						<th scope="col" className="px-6 py-3">
							<span className="sr-only">Action</span>
						</th>
					</tr>
				</thead>
					<tbody>
					{productItems?.map(({name, category, createdAt, location, _id, imagePublicId}) => (
						<tr
						key={name}
						className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
						<td className="w-4 p-4">
							<div className="flex items-center">
								<input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
								<label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
							</div>
						</td>
						<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
							{name}
						</th>
						<td className="px-6 py-4">
							{moment(createdAt).format("MMM Do YY")}
						</td>
						<td className="px-6 py-4">
							{category || 'N/A'}
						</td>
						<td className="px-6 py-4">
							{location || 'N/A'}
						</td>
						<td className="px-6 py-4 text-right flex gap-3">
						<button onClick={() => handleEdit(_id)} className="border bg-green border-deep-green hover:bg-white hover:text-deep-green text-white font-bold py-2 px-4 rounded">
							Edit
						</button>
						<button onClick={() => handleDelete(_id, imagePublicId)} className="border bg-red hover:bg-white hover:text-deep-green text-white font-bold py-2 px-4 rounded">
						 	Delete
						</button>
						</td>
					</tr>
					))}
				</tbody>
				
			</table>
				)}

			<div className='py-10 px-5'>
				<Pagination totalProducts={totalProducts} limit={limit} page={page} setPage={setPage} />
			</div>
		</div>

		
	</div>
    </div>
  </>
  )
}

export default AdminProducts