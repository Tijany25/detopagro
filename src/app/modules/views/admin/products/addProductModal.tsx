import React, { use, useEffect, useState } from 'react';
import Modal from '@/app/modules/lib/components/Modal/modal';
import InputField from '@/app/modules/lib/components/input/Input';
import axios from 'axios';
import SelectInputField from '@/app/modules/lib/components/selectInput/SelectInput';
import TextAreaInputField from '@/app/modules/lib/components/textArea/TextArea';
import toast from 'react-hot-toast';

interface Product {
  name: string;
  location?: string;
  category?: string;
  description?: string;
  imageUrl?: string;
  estimatedDeliveryDate?: string;
  features?: string;
}

interface ProductModalProps {
  modalOpen: boolean;
  handleCloseModal: () => void;
  data: any;
  category: any;
}

const ProductModal: React.FC<ProductModalProps> = ({ modalOpen, handleCloseModal, data, category }) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const option = category?.map((item: any) => item.name);


  const handleChange = (field: keyof Product, value: string) => {
    setProduct((prevProduct: any) => ({
      ...prevProduct,
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
    if (!product?.name) {
      newErrors.name = 'Product name is required';
      toast.error('Product name is required')
    }
    // Add more validation rules as needed
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Exit early if there are errors
    }
    

    const productData = {
        name: product?.name,
        location: product?.location,
        category: product?.category,
        description: product?.description,
        imageUrl: product?.imageUrl,
        estimatedDeliveryDate: product?.estimatedDeliveryDate,
        features: product?.features
      };
  
    try {
      const response = await axios.post('/api/products', productData);
      if (response.status === 200) {
        handleCloseModal();
        setProduct(undefined);
        toast.success('Product saved successfully');
      } else {
        toast.error('Error saving product')
        console.error('Error saving product:', response.data);
      }
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <Modal isOpen={modalOpen} onClose={handleCloseModal}>
      <div className="modalWidth px-8 pt-8 pb-8 mb-4">
      <h1 className='text-center text-xl lg:text-3xl text-green'>Add Product</h1>
        <InputField
          label="Product Name"
          value={product?.name || ''}
          onChange={(value: any) => handleChange('name', value)}
          error={errors.name}
        />
        <InputField
          label="Location"
          value={product?.location || ''}
          onChange={(value: any) => handleChange('location', value)}
          error={errors.location}
        />
         <SelectInputField
          label="category"
          value={product?.category || ''}
          onChange={(value: any) => handleChange('category', value)}
          error={errors.category}
          options={option}
        />
        <TextAreaInputField
          label="description"
          value={product?.description || ''}
          onChange={(value: any) => handleChange('description', value)}
          error={errors.description}
        />
        <InputField
          label="Image Url"
          value={product?.imageUrl || ''}
          onChange={(value: any) => handleChange('imageUrl', value)}
          error={errors.imageUrl}
        />
         <InputField
          label="estimatedDeliveryDate"
          value={product?.estimatedDeliveryDate || ''}
          onChange={(value: any) => handleChange('estimatedDeliveryDate', value)}
          error={errors.estimatedDeliveryDate}
        />
        <InputField
          label="Features"
          value={product?.features || ''}
          onChange={(value: any) => handleChange('features', value)}
          error={errors.features}
        />
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

export default ProductModal;
