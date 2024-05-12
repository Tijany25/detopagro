"use client"
import React, { useEffect, useState } from 'react'
import CategoryModal from './categoryModal';
import axios from 'axios';
import toast from 'react-hot-toast';
import EditCategoryModal from './editCategoryModal';
import moment from 'moment';
import Image from '@/app/modules/lib/components/image/Image';


const AdminCategory = () => {

	const [open, setOpen] = useState(false);
	const [editData, setEditData] = useState<any>('');
	const [openEdit, setOpenEdit] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [categortItem, setCategoryItem] = useState([]);
	const [loading, setLoading] = useState(false);


	const fetchProduct = async () => {
		let url = '/api/category';

		if (searchTerm) {
			url += `?q=${searchTerm}`;
		}
		try {
		  const response = await axios.get(url);
		  setCategoryItem(response.data);
		setLoading(false);
		} catch (error) {
		  console.error('Error fetching products items:', error);
		setLoading(false);
		}
	  };
	useEffect(() => {
		setLoading(true);
		fetchProduct();
	  }, [searchTerm]);
	


  const handleOpenModal = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseEditModal = () => {
    setOpenEdit(false);
	setEditData('');
  };
  const handleEdit = (id: any) => {
	const data = categortItem?.filter((item: any) => item._id === id);
	setEditData(data);
	setOpenEdit(!openEdit);
  }

  const handleDelete = async (id: any) => {
  
    try {
      const response = await axios.delete(`/api/category?id=${id}`);
      if (response.status === 200) {
		toast.success('Category deleted successfully');
		fetchProduct();
      } else {
		toast.error('Error deleting category');
      }
    } catch (error) {
		toast.error('Error deleting category');
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	setSearchTerm(event.target.value);
  };
  return (
    <>
    <div className="mt-24">
      {/* <div className="w-full mb-12 px-4">
        <CardTable />
      </div>
      <div className="w-full mb-12 px-4">
        <CardTable color="dark" />
      </div> */}
      <div className="w-full mx-auto ">
	  <CategoryModal modalOpen={open} handleCloseModal={handleClose} data="data" refetch={fetchProduct} />
	  <EditCategoryModal modalOpen={openEdit} handleCloseModal={handleCloseEditModal} data={editData} refetch={fetchProduct} />
	  <div className='flex justify-between items-center mt-8 mb-6'>
	  <h2 className="text-xl md:text-2xl font-semibold  text-deep-green">Products Category</h2>
	  <button onClick={() => handleOpenModal()} className="border bg-green border-deep-green hover:bg-white hover:text-deep-green text-white font-bold py-2 px-2 md:px-4 rounded">
		 Add Category
	  </button>
	  </div>

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
							Category name
						</th>
						<th scope="col" className="px-6 py-3">
							Date Created
						</th>
						<th scope="col" className="px-6 py-3">
							<span className="sr-only">Action</span>
						</th>
					</tr>
				</thead>
				<tbody>
				{categortItem?.map(({name, createdAt, location, _id}) => (
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
						<td className="px-6 py-4 text-right flex gap-3">
						<button onClick={() => handleEdit(_id)} className="border bg-green border-deep-green hover:bg-white hover:text-deep-green text-white font-bold py-2 px-4 rounded">
							Edit
						</button>
						<button onClick={() => handleDelete(_id)} className="border bg-red hover:bg-white hover:text-deep-green text-white font-bold py-2 px-4 rounded">
						 	Delete
						</button>
						</td>
					</tr>
					))}
				</tbody>
			</table>
				)}
		</div>

		
	</div>
    </div>
  </>
  )
}

export default AdminCategory