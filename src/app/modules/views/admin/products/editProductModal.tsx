import React, { use, useEffect, useState } from 'react';
import Modal from '@/app/modules/lib/components/Modal/modal';
import InputField from '@/app/modules/lib/components/input/Input';
import axios from 'axios';
import SelectInputField from '@/app/modules/lib/components/selectInput/SelectInput';
import TextAreaInputField from '@/app/modules/lib/components/textArea/TextArea';
import toast from 'react-hot-toast';
import Image from '@/app/modules/lib/components/image/Image';

interface Product {
  name: string;
  location?: string;
  category?: string;
  description?: string;
  imageUrl?: string;
  estimatedDeliveryDate?: string;
  _id: any;
  features?: string
}

interface ProductModalProps {
  modalOpen: boolean;
  handleCloseModal: () => void;
  data: any;
  category: any;
  refetch: () => void;
}

const EditProductModal: React.FC<ProductModalProps> = ({ modalOpen, handleCloseModal, data, category: catitem, refetch }) => {
  const [product, setProduct] = useState<any>(data[0]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [loading, setLoading] = useState(false)

  

  const option = catitem?.map((item: any) => item.name);

  useEffect(() => {
    if(data){
      setProduct(data[0])
    }
  },[data]);
  const { name, location, category, description, imageUrl, estimatedDeliveryDate, _id } = product || {};
  useEffect(() => {
    if(imageUrl){
      setSelectedFile(imageUrl)
    }
  },[imageUrl]);



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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const uploadImageToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'productImage');
    formData.append('api_key', `${process.env.API_KEY}`);
    formData.append('api_secret', `${process.env.API_SECRET}`);


    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/duneijg7k/image/upload`, // Replace YOUR_CLOUD_NAME with your actual cloud name
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
    if (!product?.name) {
      setLoading(false);
      newErrors.name = 'Product name is required';
    }
    
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return; 
    }

    let imageUrl = product?.imageUrl;
    let imgPublicId = product?.imagePublicId;
    if (selectedFile.name) {
      const uploadedImage = await uploadImageToCloudinary(selectedFile);
      if (uploadedImage) {
        imageUrl = uploadedImage.secure_url;
        imgPublicId = uploadedImage.public_id;
      } else {
        return;
      }
    }
    

    const productData = {
        name: product?.name,
        location: product?.location,
        category: product?.category,
        description: product?.description,
        imageUrl: imageUrl,
        estimatedDeliveryDate: product?.estimatedDeliveryDate,
        features: product?.features,
        imagePublicId: imgPublicId || '',
      };
  
    try {
      const response = await axios.put(`/api/products?id=${_id}`, productData);
      if (response.status === 200) {
        handleCloseModal();
        setProduct([]);
        refetch();
        setLoading(false);
        toast.success('Product saved successfully');
      } else {
        toast.error('Error saving product')
        setLoading(false);
      }
    } catch (error) {
      console.error('Error saving product:', error);
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={modalOpen} onClose={handleCloseModal}>
      <div className="modalWidth px-8 pt-8 pb-8 mb-4">
      <h1 className='text-center text-xl lg:text-3xl text-green'>Edit Product</h1>
      <div className="flex items-center justify-center w-full py-5">
      {selectedFile ? (
            <div className="text-center flex items-center justify-between w-full">
              {selectedFile.name ? (
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Selected File: {selectedFile.name}</p>

              ) : (
                <Image
                  className='w-24 h-24 lg:w-60'
                  src={imageUrl}
                  alt='logo'
                  type='image'
              />
              )}
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
          label="Product Name"
          value={name}
          onChange={(value: any) => handleChange('name', value)}
          error={errors.name}
        />
        <InputField
          label="Location"
          value={location || ''}
          onChange={(value: any) => handleChange('location', value)}
          error={errors.location}
        />
         <SelectInputField
          label="category"
          value={category || ''}
          onChange={(value: any) => handleChange('category', value)}
          error={errors.category}
          options={option}
        />
        <TextAreaInputField
          label="description"
          value={description || ''}
          onChange={(value: any) => handleChange('description', value)}
          error={errors.description}
        />
        {/* <InputField
          label="Image Url"
          value={imageUrl || ''}
          onChange={(value: any) => handleChange('imageUrl', value)}
          error={errors.imageUrl}
        /> */}
         <InputField
          label="estimatedDeliveryDate"
          value={estimatedDeliveryDate || ''}
          onChange={(value: any) => handleChange('estimatedDeliveryDate', value)}
          error={errors.estimatedDeliveryDate}
        />
        <InputField
          label="Features"
          value={product?.features}
          onChange={(value: any) => handleChange('features', value)}
          error={errors.features}
        />
        <div className="flex justify-end my-4">
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

export default EditProductModal;
