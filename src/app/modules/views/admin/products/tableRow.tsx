import React from 'react'

const TableRow = (items: any) => {
    const { name } = items;
    console.log('ffffffff', items);
    const itemsjj = [
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
    <tr
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
            {items.createdAt}
        </td>
        <td className="px-6 py-4">
            {items.category || 'N/A'}
        </td>
        <td className="px-6 py-4">
            {items.location || 'N/A'}
        </td>
        <td className="px-6 py-4 text-right">
            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
    </tr>
  )
}

export default TableRow