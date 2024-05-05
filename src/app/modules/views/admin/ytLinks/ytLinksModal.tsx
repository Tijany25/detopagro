import React, { useState } from 'react';
import Modal from '@/app/modules/lib/components/Modal/modal';
import InputField from '@/app/modules/lib/components/input/Input';
import axios from 'axios';
import toast from 'react-hot-toast';

interface YtLinks {
  name: string;
  imageUrl?: string;
}

interface YTModalProps {
  modalOpen: boolean;
  handleCloseModal: () => void;
  data: any;
  refetch: () => void;
}

const YtLinksModal: React.FC<YTModalProps> = ({ modalOpen, handleCloseModal, data, refetch }) => {
  const [ytLink, setYtlink] = useState<any>(data);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (field: keyof YtLinks, value: string) => {
    setYtlink((prevytLink: any) => ({
      ...prevytLink,
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
    if (!ytLink.name) {
      newErrors.name = 'Product name is required';
    }
    // Add more validation rules as needed
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Exit early if there are errors
    }

    const ytData = {
        name: ytLink.name,
        imageUrl: ytLink.imageUrl,
      };
  
    try {
      const response = await axios.post('/api/ytlinks', ytData);
      if (response.status === 200) {
        // Handle successful save (e.g., close modal, show success message)
        handleCloseModal();
        refetch();
        setYtlink([]);
        toast.success('Link saved successfully');
      } else {
        // Handle API errors (e.g., display error message)
        toast.error('Error saving Link:', response.data);
      }
    } catch (error) {
      console.error('Error saving Link:', error);
      // Handle network or other errors
    }
  };

  return (
    <Modal isOpen={modalOpen} onClose={handleCloseModal}>
      <div className="modalWidthSm px-8 pt-8 pb-8 mb-4">
      <h1 className='text-center text-xl lg:text-3xl text-green'>Add Youtube Link</h1>
        <InputField
          label="Category Name"
          value={ytLink.name}
          onChange={(value: any) => handleChange('name', value)}
          error={errors.name}
        />
        <InputField
          label="imageUrl"
          value={ytLink.imageUrl || ''}
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

export default YtLinksModal;
