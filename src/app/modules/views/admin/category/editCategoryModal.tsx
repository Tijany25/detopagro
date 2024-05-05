import React, { useEffect, useState } from 'react';
import Modal from '@/app/modules/lib/components/Modal/modal';
import InputField from '@/app/modules/lib/components/input/Input';
import axios from 'axios';
import toast from 'react-hot-toast';

interface Category {
  name: string;
  description?: string;
  imageUrl?: string;
  _id: any
}

interface CategoryModalProps {
  modalOpen: boolean;
  handleCloseModal: () => void;
  data: any;
  refetch: () => void;
}

const EditCategoryModal: React.FC<CategoryModalProps> = ({ modalOpen, handleCloseModal, data, refetch }) => {
  const [category, setCategory] = useState<Category>(data);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if(data){
      setCategory(data[0])
    }
  },[data]);
  const { name, description, imageUrl, _id } = category || {};

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

  const handleSave = async () => {
    // Validation logic
    const newErrors: { [key: string]: string } = {};
    if (!category.name) {
      newErrors.name = 'Product name is required';
    }
    // Add more validation rules as needed
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Exit early if there are errors
    }

    const catData = {
        name: category.name,
        description: category.description,
        imageUrl: category.imageUrl,
      };
  
    try {
      const response = await axios.put(`/api/category?id=${_id}`, catData);
      if (response.status === 200) {
        // Handle successful save (e.g., close modal, show success message)
        handleCloseModal();
        toast.success('Category saved successfully');
        refetch();
      } else {
        // Handle API errors (e.g., display error message)
        toast.error('Error saving category');
      }
    } catch (error) {
      toast.error('Error saving product:');
      // Handle network or other errors
    }
  };

  return (
    <Modal isOpen={modalOpen} onClose={handleCloseModal}>
      <div className="modalWidthSm px-8 pt-8 pb-8 mb-4">
      <h1 className='text-center text-xl lg:text-3xl text-green'>Edit Products Category</h1>
        <InputField
          label="Category Name"
          value={name}
          onChange={(value: any) => handleChange('name', value)}
          error={errors.name}
        />
        <InputField
          label="description"
          value={description || ''}
          onChange={(value: any) => handleChange('description', value)}
          error={errors.description}
        />
        <InputField
          label="imageUrl"
          value={imageUrl || ''}
          onChange={(value: any) => handleChange('imageUrl', value)}
          error={errors.imageUrl}
        />
        {/* Add more InputFields for other fields in the product schema */}
        <div className="flex justify-end mt-8">
          <button
            className="bg-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleSave}
          >
            Save
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

export default EditCategoryModal;
