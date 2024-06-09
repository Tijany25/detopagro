import React, { useState } from 'react';
import Modal from '@/app/modules/lib/components/Modal/modal';
import InputField from '@/app/modules/lib/components/input/Input';
import axios from 'axios';
import toast from 'react-hot-toast';

interface Category {
  name: string;
  description?: string;
  imageUrl?: string;
}

interface CategoryModalProps {
  modalOpen: boolean;
  handleCloseModal: () => void;
  data: any;
  refetch: () => void;
}

const CategoryModal: React.FC<CategoryModalProps> = ({ modalOpen, handleCloseModal, data, refetch }) => {
  const [category, setCategory] = useState<Category>(data);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false)

  const handleChange = (field: keyof Category, value: string) => {
    setCategory((prevCategory) => ({
      ...prevCategory,
      [field]: value,
    }));
    // Clear error when field is changed
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: '',
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };
  const uploadImageToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'categoryImage');
    formData.append('api_key', `${process.env.API_KEY}`);
    formData.append('api_secret', `${process.env.API_SECRET}`);


    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/duneijg7k/image/upload`,
        formData
      );
      return { secure_url: response.data.secure_url, public_id: response.data.public_id };
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Error uploading image');
      return null;
    }
  };


  const handleSave = async () => {
    setLoading(true);
    const newErrors: { [key: string]: string } = {};
    if (!category.name) {
      newErrors.name = 'Product name is required';
      setLoading(false);
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    let imageUrl;
    let imagePublicId;
    if (selectedFile) {
      const uploadedImage = await uploadImageToCloudinary(selectedFile);
      if (uploadedImage) {
        imageUrl = uploadedImage.secure_url;
        imagePublicId = uploadedImage.public_id;
      } else {
        return;
      }
    }

    const catData = {
        name: category.name,
        description: category.description,
        imageUrl: imageUrl,
        imagePublicId: imagePublicId,
      };
  
    try {
      const response = await axios.post('/api/category', catData);
      if (response.status === 200) {
        handleCloseModal();
        refetch();
        toast.success('Category saved successfully');
        setLoading(false);
      } else {
        toast.error('Error saving Category:', response.data);
        setLoading(false);

      }
    } catch (error) {
      console.error('Error saving Category:', error);
      setLoading(false);

    }
  };

  return (
    <Modal isOpen={modalOpen} onClose={handleCloseModal}>
      <div className="modalWidthSm px-8 pt-8 pb-8 mb-4">
      <h1 className='text-center text-xl lg:text-3xl text-green'>Add Products Category</h1>
      <div className="flex items-center justify-center w-full">
      {selectedFile ? (
            <div className="text-center flex items-center justify-between w-full">
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Selected File: {selectedFile.name}</p>
              <button
                className="bg-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSelectedFile(null)}
              >
                Replace Image
              </button>
            </div>
          ) : (
          <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
          </label>
          )}
      </div> 

        <InputField
          label="Category Name"
          value={category.name}
          onChange={(value: any) => handleChange('name', value)}
          error={errors.name}
        />
        <InputField
          label="description"
          value={category.description || ''}
          onChange={(value: any) => handleChange('description', value)}
          error={errors.description}
        />
        {/* <InputField
          label="imageUrl"
          value={category.imageUrl || ''}
          onChange={(value: any) => handleChange('imageUrl', value)}
          error={errors.imageUrl}
        /> */}
        <div className="flex justify-end mt-4">
          <button
            className="bg-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleSave}
          >
            {loading ? 'Loading...' : 'Save'}
          </button>
          <button
            className="border border-green text-green font-bold py-2 px-4 rounded"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CategoryModal;
