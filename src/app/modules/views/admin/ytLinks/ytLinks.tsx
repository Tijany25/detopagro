"use client"
import React, { useEffect, useState } from 'react'
import CategoryModal from './ytLinksModal';
import axios from 'axios';
import toast from 'react-hot-toast';
import moment from 'moment';


const AdminYtLink = () => {

	const [open, setOpen] = useState(false);
	const [editData, setEditData] = useState<any>('');
	const [openEdit, setOpenEdit] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [ytItem, setYtItem] = useState([])


	const fetchLink = async () => {
		let url = '/api/ytlinks'; // Default URL

		if (searchTerm) {
			// Build URL with search query parameter
			url += `?q=${searchTerm}`;
		}
		try {
		  const response = await axios.get(url);
		  setYtItem(response.data);
		} catch (error) {
		  console.error('Error fetching products items:', error);
		}
	  };
	useEffect(() => {
		fetchLink();
	  }, []);
	


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
	const data = ytItem?.filter((item: any) => item._id === id);
	setEditData(data);
	setOpenEdit(!openEdit);
  }

  const handleDelete = async (id: any) => {
  
    try {
      const response = await axios.delete(`/api/ytlinks?id=${id}`);
      if (response.status === 200) {
		toast.success('Link deleted successfully');
		fetchLink();
      } else {
		toast.error('Error deleting Link');
      }
    } catch (error) {
		toast.error('Error deleting Link');
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	setSearchTerm(event.target.value);
  };
  return (
    <>
    <div className="mt-24">
      <div className="w-full mx-auto ">
	  <CategoryModal modalOpen={open} handleCloseModal={handleClose} data="data" refetch={fetchLink} />
	  <div className='flex justify-between items-center mt-8 mb-6'>
	  <h2 className="text-xl md:text-2xl font-semibold  text-deep-green">Youtube Links</h2>
	  <button onClick={() => handleOpenModal()} className="border bg-green border-deep-green hover:bg-white hover:text-deep-green text-white font-bold py-2 px-2 md:px-4 rounded">
		 Add Youtube Videos
	  </button>
	  </div>

	<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
							Link name
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
				{ytItem?.map(({name, createdAt, location, _id}) => (
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
						<button onClick={() => handleDelete(_id)} className="border bg-red hover:bg-white hover:text-deep-green text-white font-bold py-2 px-4 rounded">
						 	Delete
						</button>
						</td>
					</tr>
					))}
				</tbody>
			</table>
		</div>

		
	</div>
    </div>
  </>
  )
}

export default AdminYtLink